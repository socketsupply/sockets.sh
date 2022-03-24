'use strict'

import fs from 'node:fs/promises'
import path from 'node:path'

import fetch from 'node-fetch'
import Tonic from 'tonic-ssr'
import marked from 'marked'
import hl from 'highlight.js'

const renderer = new marked.Renderer()

const highlight = (code, lang = 'javascript', escaped) => {
  if (!lang) lang = 'javascript'
  return hl.highlight(code, { language: 'javascript', ignoreIllegals: true }).value
}

marked.setOptions({
  renderer,
  highlight // doubles the build time
})

export default class MarkdownModule extends Tonic {
  async render () {
    if (!this.props.src) {
      const raw = this.node.childNodes[0].value
      this.node.childNodes.length = 0
      return Tonic.unsafeRawString(marked(raw))
    }

    try {
      let raw = ''

      const last = Tonic.cache[this.props.src]

      if (last && (last.timestamp > Date.now() - 5e4)) {
        return last.value
      }

      if (this.props.src.startsWith('https://')) {
        const res = await fetch(this.props.src)
        raw = await res.text()
      } else {
        const src = path.resolve(this.props.src)
        raw = await fs.readFile(src, 'utf8')
      }

      const value = Tonic.unsafeRawString(marked(raw))

      Tonic.cache[this.props.src] = {
        timestamp: Date.now(),
        value
      }

      return value
    } catch (err) {
      return this.html`
        <div class="error">
          Unable to read file ${this.props.src} (${err.message}).
        </div>
      `
    }
  }
}
