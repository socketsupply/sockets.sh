import Tonic from 'tonic-ssr'
import head from '../mixins/head.js'
import nav from '../mixins/nav.js'

class PageConfig extends Tonic {
  async render () {
    const TOKEN = process.env.TOKEN
    const h = await head({ styles: ['pages/index.css'] })

    return this.html`
      <!DOCTYPE html>

      <html>

        <head>${h}</head>

        <body id="index">
          ${nav}

          <main>
            <h1 class="title">Operator Framework</h1>
            <h3>Config</h3>
            <p>
              Each project needs a <code>operator.config</code> file in the root
              direcrory.
            </p>
            <markdown-module src="https://raw.githubusercontent.com/socketsupply/operatorframework/master/docs/config.md?token=${TOKEN}"></markdown-module>
          </main>

          <app-footer js-bundle="true"></app-footer>
        </body>
      </html>
    `
  }
}

export default PageConfig
