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
          <header>
            <div class="centered">
              <img src="images/illustrations.svg" alt="A Laptop" />
              <div class="title" alt="A Web Owned & Operated By Everyone">
                <img src="images/title.svg" class="mark" alt="Socket SDK" />
              </div>
            </div>
          </header>

          <main>
            <section>
              <p class="intro">
                Build lean, fast, cross-platform apps for
                desktop and mobile, using the web technologies you already know.
              </p>

              <div class="lists">
                <ul class="checklist">
                  <li>Use any "backend", ie Python, Rust, Node.js</li>
                  <li>Bring your own framework, ie React, Svelte</li>
                  <li>Windows, Linux, MacOS, iOS, Android</li>
                  <li>UDP, TCP &amp; File I/O in JS on Mobile</li>
                </ul>
                <ul class="checklist">
                  <li>Less than 20Mb base memory footprint</li>
                  <li>Less than 1Mb base binary distributable</li>
                  <li>Uniform DX across platforms</li>
                  <li>Minimal, readable and maintainable</li>
                </ul>
              </div>
            </section>

            <h2>Install</h2>
            <tonic-tabs selected="tab-mac" id="get-started">
              <tonic-tab id="tab-mac" for="panel-mac">Mac</tonic-tab>
              <tonic-tab id="tab-linux" for="panel-linux">Linux</tonic-tab>
              <tonic-tab id="tab-win" for="panel-win">Windows</tonic-tab>
            </tonic-tabs>

            <tonic-tab-panel id="panel-mac">
              <code>
                brew install ssc
              </code>
            </tonic-tab-panel>

            <tonic-tab-panel id="panel-linux">
              <code>
                sudo apt-get install ssc
              </code>
            </tonic-tab-panel>

            <tonic-tab-panel id="panel-win">
              <code>
                nuget install ssc
              </code>
            </tonic-tab-panel>

            <h2>Getting Started</h2>
            <p>
              In a new directory run <code>ssc init</code>. This will create
              an <code>ssc.config</code> file, and create a <code>src</code>
              directory with an a <code>index.html</code> file in it.
            </p>
            <p>
              Running <code>ssc -r .</code> will create <code>build</code> directory
              and place the built artifacts in it. The <code>-r</code> flag will
              find and run the binary for you. This is it! Click one of the links
              below to move onto some more advanced features.
            </p>
          </main>

          <app-footer js-bundle="true"></app-footer>
        </body>
      </html>
    `
  }
}

export default PageIndex
