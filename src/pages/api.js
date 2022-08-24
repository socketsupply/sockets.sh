import Tonic from 'tonic-ssr'
import head from '../mixins/head.js'
import nav from '../mixins/nav.js'

class PageApi extends Tonic {
  async render () {
    const h = await head({ styles: ['pages/index.css'] })

    return this.html`
      <!DOCTYPE html>

      <html>
        <head>${h}</head>

        <body id="api" class="api">
          ${nav}

          <main>
            <tonic-split id="split-main" type="vertical">
              <tonic-split-left width="25%">
                <app-tree id="app-tree"></app-tree>
              </tonic-split-left>

              <tonic-split-right width="75%">
                <markdown-module class="code" src="src/docs/api.md"></markdown-module>
                <app-footer js-bundle="true"></app-footer>
              </tonic-split-right>
            </tonic-split>
          </main>

          <app-sprite></app-sprite>
        </body>
      </html>
    `
  }
}

export default PageApi
