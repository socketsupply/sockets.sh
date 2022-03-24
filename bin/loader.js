#!/usr/bin/env node
import { spawn } from 'child_process'

const start = () => {
  const node = spawn('node', ['bin/server'])

  node.stdout.on('data', data => process.stdout.write(data.toString()))
  node.stderr.on('data', data => process.stdout.write(data.toString()))
  node.on('close', (code) => {
    if (code && code !== 0) {
      process.exit(code)
    }
    start()
  })
}

start()
