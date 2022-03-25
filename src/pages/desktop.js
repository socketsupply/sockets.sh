import Tonic from 'tonic-ssr'
import head from '../mixins/head.js'
import nav from '../mixins/nav.js'

class PageDesktop extends Tonic {
  async render () {
    const h = await head({ styles: ['pages/index.css'] })

    return this.html`
      <!DOCTYPE html>

      <html>

        <head>${h}</head>

        <body id="index">
          ${nav}

          <main>
            <h1>Operator Framework</h1>
            <h2>Desktop API</h2>

            <markdown-module src="src/docs/menus.md"></markdown-module>
            <markdown-module src="src/docs/ipc.md"></markdown-module>
            </main>

          <app-footer js-bundle="true"></app-footer>
        </body>
      </html>
    `
  }
}

export default PageDesktop
