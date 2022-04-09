#!/usr/bin/env node
// @ts-check

import http from 'node:http'
import fs from 'node:fs/promises'
import path from 'node:path'
import send from '@pre-bundled/send'
import fetch from 'node-fetch'
import Tonic from 'tonic-ssr'
import minimist from 'minimist'
import dirname from '../src/util.js'

const argv = minimist(process.argv.slice(2))
const LAMBDA_PORT = parseInt(process.env.LAMBDA_PORT, 10)
const API_ROUTE = process.env.API_ROUTE

let buildPromise = null

process.on('unhandledRejection', (err) => {
  process.nextTick(() => {
    throw err
  })
})

let die = null
let port = 8081
let url = 'http://dev.operatorframework.dev'

const ROOT_URL = new URL('../build', import.meta.url).pathname
const componentsDir = path.join(dirname(import.meta), '../src/components')

const load = async src => {
  const mod = await import(src)
  return Tonic.add(mod.default)
}

const compile = async (src, dest) => {
  const Page = await load(path.resolve(src))
  const page = new Page()

  try { await fs.mkdir(path.dirname(dest), { recursive: true }) } catch {}
  const r = fs.writeFile(dest, await page.preRender())
  return r
}

const PENDING_REQUESTS = new Set()

/**
 * @param {import('http').IncomingMessage} req
 * @param {import('http').ServerResponse} res
 * @returns
 */
async function handler (req, res, options) {
  PENDING_REQUESTS.add(req)
  res.once('finish', () => {
    PENDING_REQUESTS.delete(req)
  })

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

  if (buildPromise) {
    await buildPromise
  } else {
    await build(argv)
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
      handler(req, res, { fallback: true })
    }
  }

  console.log(req.url)

  return send(req, pathname, { root: ROOT_URL })
    .once('error', onError)
    .once('end', () => {
      clearTimeout(die)
      die = setTimeout(teardown, 16)
    })
    .pipe(res)
}

async function teardown () {
  if (PENDING_REQUESTS.size > 0) {
    clearTimeout(die)
    die = setTimeout(teardown, 256)
    return
  }
  process.exit(0)
}

export async function build (argv) {
  const base = path.join(dirname(import.meta), '..')

  const dest = typeof argv.out === 'string'
    ? argv.out : path.join(base, 'build')

  //
  // clean and recreate the build directory if it exists
  try {
    // await fs.rm(dest, { force: true, recursive: true })
    await fs.mkdir(dest)

    //
    // add symbolic links to the source fonts and images
    //
    for (const dir of ['fonts', 'images', 'styles']) {
      await fs.symlink(
        path.join(base, 'src', dir),
        path.join(dest, dir)
      )
    }
  } catch {}

  const pages = Promise.all([
    Promise.all([
      load(path.join(componentsDir, 'bundle-js.js')),
      load(path.join(componentsDir, 'footer.js')),
      load(path.join(componentsDir, 'module-markdown.js'))
    ]),
    compile('src/pages/index.js', `${dest}/index.html`),
    compile('src/pages/compare.js', `${dest}/compare/index.html`),
    compile('src/pages/config.js', `${dest}/config/index.html`),
    compile('src/pages/desktop.js', `${dest}/desktop/index.html`),
    compile('src/pages/mobile.js', `${dest}/mobile/index.html`),
    compile('src/pages/examples.js', `${dest}/examples/index.html`),
    compile('src/pages/guides.js', `${dest}/guides/index.html`)
  ])

  await pages
}

export function main () {
  port = process.env.PORT
    ? parseInt(process.env.PORT)
    : argv.p || port

  if (argv.url) url = argv.url
  http.createServer(handler).listen(port)
}

if (argv._.includes("run")) {
  main()
}
