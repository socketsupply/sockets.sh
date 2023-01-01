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
              <p>A Cross Platform Runtime for Web Apps<br/>
            </div>
          </header>

          <section>
            <h1 class="intro">
              <span class="large">Build Native Apps</span>
              <span class="medium">For Desktop &amp; Mobile</span>
              <span class="small">Using HTML, CSS, &amp; JavaScript</span>
            </h1>

            <div class="lists">
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
            </div>
          </section>

          <main>

            <h2>Install</h2>

            <p class="hl">
              Socket is pre-release. Read the install script before running it. Join us in the <b>Relay App</b> p2p app using
              <a href="relay://channel=11E39280-8FF1-41B4-9170-EE5F306F969F">this link</a> (if your
              browser complains, it means you don't have the app installed), or join our <a href="https://discord.gg/YPV32gKCsH">discord</a>.
            </p>

            <br/>

            <tonic-tabs selected="tab-mac" id="get-started">
              <tonic-tab id="tab-mac" for="panel-mac">Mac</tonic-tab>
              <tonic-tab id="tab-linux" for="panel-linux">Linux</tonic-tab>
              <tonic-tab id="tab-win" for="panel-win">Windows</tonic-tab>
            </tonic-tabs>

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

            <h2>Getting Started</h2>
            <p>
              Running the above install script from your terminal will create the <code>ssc</code>
              cli program for you. In a new directory run <code>ssc init</code>. This will create
              an <code>ssc.config</code> file, and create a <code>src</code> directory with an a
              <code>index.html</code> file in it. You can edit the file with your favorite editor.
            </p>
            <p>
              Running <code>ssc build -r .</code> will build and run your program.
              That's it! You just built a native application! Click one of the links below to move
              onto more advanced use cases.
            </p>
          </main>

          <app-footer js-bundle="true"></app-footer>
        </body>
      </html>
    `
  }
}

export default PageIndex
