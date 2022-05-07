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

        <body>
          ${nav}

          <main>
            <h1>Config File</h1>
            <p>
              Each project needs a <code>operator.config</code> file in the root
              direcrory. This is a plain text file with key-value property pairs.
              The file also supports comments.
            </p>

            <pre><code>#
# This is a comment
#
foo: bar
quxx: beep boop

# another comment
animals: cats, dogs, bears</code></pre>

            <markdown-module src="src/docs/config.md"></markdown-module>
          </main>

          <app-footer js-bundle="true"></app-footer>
        </body>
      </html>
    `
  }
}

export default PageConfig
