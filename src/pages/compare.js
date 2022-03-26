import Tonic from 'tonic-ssr'
import head from '../mixins/head.js'
import nav from '../mixins/nav.js'

class PageCompare extends Tonic {
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
            <h1>Compare Frameworks</h1>
            <p>
              Below are high level features and a source code comparison that
              helps assess the <code>maintainability</code> and
              <code>readability</code> of each codebase.
            </p>

            <markdown-module src="src/docs/compare.md"></markdown-module>
          </main>

          <app-footer js-bundle="true"></app-footer>
        </body>
      </html>
    `
  }
}

export default PageCompare
