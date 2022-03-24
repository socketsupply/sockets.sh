'use strict'
// @ts-check

import { TonicDialog } from '@socketsupply/components/dialog'

export default class DialogLoading extends TonicDialog {
  static stylesheet () {
    return /* css */`
      dialog-loading.tonic--dialog .tonic--dialog--content .tonic--dialog--content-container > main {
        padding: 32px;
      }

      dialog-loading .message {
        font-size: 16px;
        margin-bottom: 10px;
      }

      dialog-loading main {
        min-height: 200px;
        position: relative
      }
    `
  }

  /**
   * @param {{
   *    title: string
   * }} opts
   */
  showLoading (opts) {
    this.title = opts.title
    this.reRender()
    this.show()
  }

  render () {
    const title = this.title || 'Loading'

    return this.html`
      <header>${title}</header>
      <main>
        <tonic-loader></tonic-loader>
      </main>
      <footer>
      </footer>
    `
  }
}
