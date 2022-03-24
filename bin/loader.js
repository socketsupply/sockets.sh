#!/usr/bin/env node
import { spawn } from 'child_process'


let childProc
let shutdown

const start = () => {
  childProc = spawn('node', ['bin/server'])

  childProc.stdout.on('data', data => process.stdout.write(data.toString()))
  childProc.stderr.on('data', data => process.stderr.write(data.toString()))
  childProc.on('close', (code) => {
    if (code && code !== 0) {
      process.exit(code)
    }

    if (!shutdown) {
      start()
    }
  })
}

start()

process.on('SIGTERM', () => {
  shutdown = true

  if (childProc) {
    childProc.kill()
  }
})
