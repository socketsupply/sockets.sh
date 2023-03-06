import Tonic from 'tonic-ssr'
import head from '../mixins/head.js'
import nav from '../mixins/nav.js'

class PageIndex extends Tonic {
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
                <p class="hl">
                  The Socket Runtime is pre-release, please track and discuss issues on <a class="dotted" href="https://github.com/socketsupply/socket">GitHub</a>.
                </p>

                <section class="primer">
                  <h1>Socket Runtime</h1>
                  <h2>Write once. Run anywhere. Connect everyone.</h2>

                  <p>
                    Socket Runtime is like a next-generation Electron. Build native apps for any OS
                    using HTML, CSS, and JavaScript, for desktop &amp; mobile! You can also connect
                    your users, and let them communicate directly, without the cloud or any servers!
                  </p>

                  <h2>Features</h2>

                  <div id="value-props">
                    <div>
                      <h3>Local First</h3>
                      <p>A full-featured File System API &amp; Bluetooth ensure it's possible to create excellent offline and local-first user experiences.</p>
                    </div>

                    <div>
                      <h3>P2P &amp; Cloud</h3>
                      <p>Built to support a new generation of apps that can connect directly to each other by providing a high-performance UDP API.</p>
                    </div>

                    <div>
                      <h3>Use any backend</h3>
                      <p>Business logic can be written in any language, Python, Rust, Node.js, etc. The backend is even completely optional.</p>
                    </div>

                    <div>
                      <h3>Use any frontend</h3>
                      <p>All the standard browser APIs are supported, so you can use your favorite front-end framework to create your UIs, React, Svelte, Vue for example.</p>
                    </div>

                    <div>
                      <h3>Maintainable</h3>
                      <p>Socket itself is built to be maintainable. Zero dependencies and a smaller code base than any other competing project.</p>
                    </div>

                    <div>
                      <h3>Lean &amp; Fast</h3>
                      <p>Uses a smaller memory footprint and creates smaller binaries than any other competing project.</p>
                    </div>
                  </div>
                </section>

                <markdown-module src="src/docs/guide-fte.md"></markdown-module>
                <markdown-module src="src/docs/guide-apple.md"></markdown-module>
                <markdown-module src="src/docs/guide-desktop.md"></markdown-module>
                <markdown-module src="src/docs/guide-mobile.md"></markdown-module>
                <markdown-module src="src/docs/guide-p2p.md"></markdown-module>
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

export default PageIndex
