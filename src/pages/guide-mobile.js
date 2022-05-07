import Tonic from 'tonic-ssr'
import head from '../mixins/head.js'
import nav from '../mixins/nav.js'

class PageGuideMobile extends Tonic {
  async render () {
    const h = await head({ styles: ['pages/index.css'] })

    return this.html`
      <!DOCTYPE html>

      <html>

        <head>${h}</head>

        <body id="guide-mobile">
          ${nav}

          <aside>
          </aside>
          <main>
            <h1>Mobile Guide</h1>

            <markdown-module src="src/docs/guide-mobile.md"></markdown-module>
            </main>

          <app-footer js-bundle="true"></app-footer>
        </body>
      </html>
    `
  }
}

export default PageGuideMobile
