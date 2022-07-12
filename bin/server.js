#!/usr/bin/env node
// @ts-check

import http from 'node:http'
import path from 'node:path'
import { Worker } from 'node:worker_threads'
import send from '@pre-bundled/send'
import fetch from 'node-fetch'
import minimist from 'minimist'
import { dirname } from './build.js'
import fs from 'node:fs'

const pkg = JSON.parse(fs.readFileSync('package.json'))

process.on('unhandledRejection', err => process.nextTick(() => {
  throw err
}))

const LAMBDA_PORT = parseInt(process.env.LAMBDA_PORT, 10)
const API_ROUTE = process.env.API_ROUTE
const ROOT_URL = new URL('../build', import.meta.url).pathname
const argv = minimist(process.argv.slice(2))
const port = process.env.PORT ? parseInt(process.env.PORT) : argv.p || 8081
const url = argv.url || `http://${pkg.domain}`
const __dirname = dirname(import.meta)

let gate = false

const handler = async (req, res, options) => {
  if (!gate) {
    gate = true
    setTimeout(() => { gate = false }, 2048)
    console.time('build')
    await new Promise(resolve => {
      const worker = new Worker(path.join(__dirname, 'build.js'))
      worker.on('message', resolve)
    })
    console.timeEnd('build')
  }

  if (API_ROUTE && req.url.startsWith(API_ROUTE)) {
    const apiUrl = `http://localhost:${LAMBDA_PORT}`
    const extra = req.url.slice(API_ROUTE.length)

    // Do a server-side redirect instead.

    const resp = await fetch(`${apiUrl}${extra}`, {
      method: req.method,
      headers: req.headers,
      body: req.method !== 'GET' && req.method !== 'HEAD' ? req : null
    })

    res.statusCode = resp.status

    for (const [name, value] of resp.headers) {
      res.setHeader(name, value)
    }

    resp.body.pipe(res)
    return
  }

  const { pathname } = new URL(req.url, `${url}:${port}`)

  const onError = err => {
    if (options?.fallback === true) {
      res.statusCode = 500
      res.end(err.message)
      return
    }

    console.error(err.message)

    if (err.status === 404) {
      if (!req.url.endsWith('.html')) {
        req.url = req.url + '.html'
        return handler(req, res)
      }

      req.url = '/'
      return handler(req, res, { fallback: true })
    }
  }

  return send(req, pathname, { root: ROOT_URL })
    .once('error', onError)
    .pipe(res)
}

const server = http.createServer(handler)
server.listen(port)
