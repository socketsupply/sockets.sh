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

        <body id="index">
          ${nav}

          <header>
            <div class="centered">
              <h1>Socket</h1>
              <p>Build apps for any OS, desktop & mobile<br/>
            </div>
          </header>

          <section>
            <div id="os-list">
              <img src="/images/android.svg">
              <img src="/images/apple.svg">
              <img src="/images/windows.svg">
              <img src="/images/linux.svg">
            </div>
            <h1 class="intro">
              <span class="large">Build Native Apps</span>
              <span class="medium">For Desktop &amp; Mobile</span>
              <span class="small">Using HTML, CSS, &amp; JavaScript</span>
            </h1>

            <p id="obviously">Use any framework...</p>
            <img id="frameworks" src="/images/frameworks.svg">

          </section>

          <main>
            <h2>Install</h2>

            <p class="hl">
              Socket is pre-release, please track and discuss issues on <a class="dotted" href="https://github.com/socketsupply/socket">GitHub</a>.
            </p>

            <br/>

            <tonic-tabs selected="tab-mac" id="get-started">
              <tonic-tab id="tab-npm" for="panel-npm">npm</tonic-tab>
              <tonic-tab id="tab-mac" for="panel-mac">macOS</tonic-tab>
              <tonic-tab id="tab-linux" for="panel-linux">Linux</tonic-tab>
              <tonic-tab id="tab-win" for="panel-win">Windows</tonic-tab>
            </tonic-tabs>

            <tonic-tab-panel id="panel-npm">
              <code>
                npx init socket-app
              </code>
            </tonic-tab-panel>

            <tonic-tab-panel id="panel-mac">
              <code>
                curl -s -o- https://sockets.sh/sh | bash -s
              </code>
            </tonic-tab-panel>

            <tonic-tab-panel id="panel-linux">
              <code>
                curl -s -o- https://sockets.sh/sh | bash -s
              </code>
            </tonic-tab-panel>

            <tonic-tab-panel id="panel-win">
              <code>
                iwr -useb https://sockets.sh/ps | iex
              </code>
            </tonic-tab-panel>

            <h2>Features</h2>
            <div id="value-props">
              <div>
                <h3>Local First</h3>
                <p>A full featured File System API &amp; Bluetooth ensure its possible to create excellent offline and local-first user experiences.</p>
              </div>

              <div>
                <h3>P2P &amp; Cloud</h3>
                <p>Built to support a new generation of apps that can connect directly to each other by providing a high performance UDP API.</p>
              </div>

              <div>
                <h3>Use any backend</h3>
                <p>Business logic can be written in any language, Python, Rust, Node.js, etc. The backend is even completely optional.</p>
              </div>

              <div>
                <h3>Use any frontend</h3>
                <p>All the standard browser APIs are supported, so you can use your favorite front end framework to create your UIs, React, Svelte, Vue for example.</p>
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

            <!-- div class="lists">
              <ul class="checklist">
                <li>UDP, file I/O &amp; Bluetooth</li>
                <li>Use any backend (ie Python, Rust, Node.js)</li>
                <li>Use any frontend (ie React, Svelte, Vue)</li>
                <li>Every major desktop &amp; mobile OS</li>
              </ul>
              <ul class="checklist">
                <li>Ideal for local-first and peer-to-peer</li>
                <li>Less than 20Mb base memory footprint</li>
                <li>Less than 1Mb base binary distributable</li>
                <li>Minimal, readable, and maintainable</li>
              </ul>
            </div -->
          </main>

          <app-footer js-bundle="true"></app-footer>
        </body>
      </html>
    `
  }
}

export default PageIndex
