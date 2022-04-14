#!/usr/bin/env node
import minimist from 'minimist'
import { build } from './server.js'

function main() {
  return build()
}

main().then(() => {
  process.exit(0)
}).catch(err => {
  console.error(err)
  process.exit(1)
})
