#!/usr/bin/env node
import Tonic from 'tonic-ssr'
import fs from 'node:fs'
import path from 'node:path'
import { parentPort } from 'node:worker_threads'
import minimist from 'minimist'

const pkg = JSON.parse(fs.readFileSync('package.json'))

console.log(process.arch)

const dirname = meta => path.dirname(new URL(meta.url).pathname)

const __dirname = dirname(import.meta)

const SKIP_LIST = pkg.skiplist ?? []

global.navigator = {}

const readDir = p => {
  const files = []
  const pages = []

  try {
    files.push(...fs.readdirSync(p))
  } catch {}

  for (const file of files) {
    const fp = path.join(p, file)
    let st
    try { st = fs.statSync(fp) } catch {}

    if (st.isDirectory()) {
      pages.push(...readDir(fp))
    } else if (path.extname(file) === '.js') {
      pages.push(fp)
    }
  }
  return pages
}

const die = err => {
  console.log(err)
  process.exit(1)
}

const load = async src => {
  const mod = await import(src)
  return mod && Tonic.add(mod.default)
}

const compile = async (base, src, dest) => {
  const part = path.dirname(path.relative(base, src))

  const filename = path.basename(src, '.js')
  const isRoot = path.relative(base, src) === 'index.js'

  if (part === '.' && !isRoot) {
    dest = path.join(dest, filename)
  } else if (!isRoot) {
    dest = path.join(dest, part)
  }

  try {
    fs.mkdirSync(dest, { recursive: true })
  } catch (err) { die(err) }

  let Page

  try {
    Page = await load(src)
  } catch (err) {
    const short = path.join(...src.split(path.sep).slice(-3))
    console.log(`.../${short} (${err.message})`)
    return Promise.resolve()
  }

  const page = new Page()
  const file = path.join(dest, 'index.html')

  let html

  try {
    html = await page.preRender()
  } catch (err) { die(err) }

  try {
    fs.writeFileSync(file, html)
  } catch (err) {
  }

  return Promise.resolve()
}

const build = async argv => {
  const __dirname = dirname(import.meta)
  const base = path.join(__dirname, '..')
  const src = path.join(base, 'src', 'pages')
  const cbase = path.join(__dirname, '../src/components')

  const buildDir = typeof argv.out === 'string'
    ? argv.out
    : path.join(base, 'build')

  fs.rmSync(buildDir, { force: true, recursive: true })
  fs.mkdirSync(buildDir, { recursive: true })

  for (const dir of ['fonts', 'images', 'styles']) {
    fs.symlinkSync(
      path.join(base, 'src', dir),
      path.join(buildDir, dir)
    )
  }

  try {
    await Promise.all([
      load(path.join(cbase, 'bundle-js.js')),
      load(path.join(cbase, 'footer.js')),
      load(path.join(cbase, 'module-markdown.js'))
    ])
  } catch {}

  const files = readDir(src)
  const jobs = files.map(p => {
    for (const dir of SKIP_LIST) {
      if (p.startsWith(dir)) {
        return
      }
    }

    return compile(src, p, buildDir)
  })

  const p = Promise.all(jobs)

  try {
    await p
  } catch (err) { die(err) }

  if (parentPort) {
    parentPort.postMessage('completed')
  }

  return p
}

export {
  build,
  dirname,
  readDir
}

if (process.argv.some(arg => arg.includes('build.js'))) {
  build(minimist(process.argv.slice(2)))
}
