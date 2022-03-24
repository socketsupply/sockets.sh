// @ts-check

import esbuild from 'esbuild'
import Tonic from 'tonic-ssr'

const cache = {}

export default class BundleJs extends Tonic {
  async render () {
    const {
      src,
      dest,
      url
    } = this.props

    delete this.props.src
    delete this.props.dest
    delete this.props.url

    const last = cache[this.constructor.name]

    if (last && (last.timestamp > Date.now() - 5e3)) {
      if (last.value) {
        return last.value
      }
      if (last.pending) {
        return last.pending
      }
    }

    const promise = this._bundle(src, dest, url)

    cache[this.constructor.name] = {
      timestamp: Date.now(),
      pending: promise
    }

    return promise
  }

  async _bundle (src, dest, url) {
    const value = this.html`
      <script src="${url}"></script>
    `

    try {
      await esbuild.build({
        ...this.props,
        entryPoints: [src],
        bundle: true,
        minify: false,
        platform: 'browser',
        external: ['util'],
        outfile: dest,
        define: {
          'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
          global: '{}',
          NODE_ENV: process.env.NODE_ENV
        }
      })

      cache[this.constructor.name] = {
        timestamp: Date.now(),
        value
      }

      return value
    } catch (err) {
      return this.html`
        Unable to bundle (${err.message}).
      `
    }
  }
}
