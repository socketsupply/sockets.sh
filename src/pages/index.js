import Tonic from 'tonic-ssr'
import head from '../mixins/head.js'
import nav from '../mixins/nav.js'

class PageIndex extends Tonic {
  async render () {
    const tags = await head({ styles: ['pages/index.css'] })

    return this.html`
      <!DOCTYPE html>

      <html>

        <head>
          ${tags}
        </head>

        <body id="index">
          ${nav}

          <main>

          </main>

        </body>
      </html>
    `
  }
}

export default PageIndex
