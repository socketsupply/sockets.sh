import Tonic from 'tonic-ssr'
import head from '../mixins/head.js'
import nav from '../mixins/nav.js'

class PageConfig extends Tonic {
  async render () {
    const h = await head({ styles: ['pages/index.css'] })

    return this.html`
      <!DOCTYPE html>

      <html>

        <head>${h}</head>

        <body>
          ${nav}

          <main>
            <h1>Config File</h1>
            <p>
<<<<<<< HEAD
              Each project needs a <code>socket.ini</code> file in the root
              direcrory. This is an <a href="https://en.wikipedia.org/wiki/INI_file">ini</a> file.
=======
              Each project needs a <code>ssc.config</code> file in the root
              directory. This is a plain text file with key-value property pairs.
              The file also supports comments.
>>>>>>> 04bfad9 (fix-done)
            </p>

            <markdown-module src="src/docs/config.md"></markdown-module>
          </main>

          <app-footer js-bundle="true"></app-footer>
        </body>
      </html>
    `
  }
}

export default PageConfig
