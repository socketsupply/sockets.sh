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

          <main>
            <h1>Operator Framework</h1>
            <p>
              Build lean, fast, cross-platform applications for desktop and
              mobile using web technologies.
            </p>

            <ul class="checklist">
              <li>Use any "backend", ie node.js, zig or rust.</li>
              <li>Exposes full UDP and TCP on Mobile.</li>
              <li>Vanilla JavaScript (bring your own framework)</li>
              <li>Less than 20Mb base memory footprint</li>
              <li>Less than 1Mb base binary distributable</li>
              <li>Windows, Linux, MacOS, iOS, Android</li>
              <li>Only native dependencies (No 3rd pary)</li>
            </ul>

            <br/>

            <h2>Install</h2>
            <tonic-tabs selected="tab-mac" id="get-started">
              <tonic-tab id="tab-mac" for="panel-mac">Mac</tonic-tab>
              <tonic-tab id="tab-linux" for="panel-linux">Linux</tonic-tab>
              <tonic-tab id="tab-win" for="panel-win">Windows</tonic-tab>
            </tonic-tabs>

            <tonic-tab-panel id="panel-mac">
              <code>
                brew install op
              </code>
            </tonic-tab-panel>

            <tonic-tab-panel id="panel-linux">
              <code>
                sudo apt-get install op
              </code>
            </tonic-tab-panel>

            <tonic-tab-panel id="panel-win">
              <code>
                nuget install op
              </code>
            </tonic-tab-panel>

            <h2>Getting Started</h2>
            <p>
              Software is built and packaged for distribution using the
              <code>op</code> CLI program.
            </p>
            <p>
              In a new directory, run <code>op --init</code>. This will create
              a <code>src</code> directory with <code>operator.config</code> and
              <code>index.html</code> files.
            </p>
          </main>
          <app-footer js-bundle="true"></app-footer>
        </body>
      </html>
    `
  }
}

export default PageIndex
