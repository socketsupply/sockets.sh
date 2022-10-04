import Tonic from 'tonic-ssr'
import head from '../mixins/head.js'
import nav from '../mixins/nav.js'

class PageGuides extends Tonic {
  async render () {
    const h = await head({ styles: ['pages/index.css'] })

    return this.html`
      <!DOCTYPE html>

      <html>

        <head>${h}</head>

        <body class="api" id="guides">
          ${nav}

          <main>
            <tonic-split id="split-main" type="vertical">
              <tonic-split-left width="25%">
                <app-tree id="app-tree"></app-tree>
              </tonic-split-left>

              <tonic-split-right width="75%">
                <markdown-module src="src/docs/guide-apple.md"></markdown-module>
                <markdown-module src="src/docs/guide-desktop.md"></markdown-module>
                <markdown-module src="src/docs/guide-mobile.md"></markdown-module>
                <markdown-module src="src/docs/troubleshooting.md"></markdown-module>
                <markdown-module src="src/docs/faq.md"></markdown-module>
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

export default PageGuides
