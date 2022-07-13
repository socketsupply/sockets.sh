import Tonic from 'tonic-ssr'

export default class AppFooter extends Tonic {
  async render () {
    const buildDir = './build'

    let jsBundle
    if (this.props.jsBundle === true || this.props.jsBundle === 'true') {
      jsBundle = this.html`
        <bundle-js
          src="./src/index.client.js"
          dest="${buildDir}/bundle.js"
          url="/bundle.js"
          format="esm"
          keep-names=${true}
        >
        </bundle-js>
      `
    }

    return this.html`
      <footer id="primary" class='tc-footer'>
        <div class="content">
          <div class="footer-links">
            <div>
              <h4>Reference</h4>
              <ul>
                <li><a href="/config">Configuration</a></li>
                <li><a href="/api">API Documentation</a></li>
                <li><a href="/desktop">Desktop Only APIs</a></li>
                <li><a href="/compare">Framework Comparison</a></li>
              </ul>
            </div>
            <div>
              <h4>Guides</h4>
              <ul>
                <li><a href="https://github.com/socketsupply/socket-sdk-examples">Examples</a></li>
                <li><a href="/guide-mobile">Mobile</a></li>
                <li><a href="/guide-desktop">Desktop</a></li>
                <li><a href="/ios">iOS</a></li>
                <li><a href="/android">Android</a></li>
                <li><a href="/troubleshooting">Troubleshooting</a></li>
              </ul>
            </div>
            <div>
              <h4>Community</h4>
              <ul>
                <li><a href="mailto:hello@socketsupply.co" alt="Email">Email</a></li>
                <li><a href="https://twitter.com/socketsupply" rel="noopener" class="underline" alt="Twitter">Twitter</a></li>
                <li><a href="https://github.com/socketsupply/socket-sdk" rel="noopener" class="underline" alt="Github">Github</a></li>
                <li><a href="https://discord.gg/YPV32gKCsH" rel="noopener" class="underline" alt="Discord">Discord</a></li>
              </ul>
            </div>
          </div>

          <p class="copy">
            <span class="copyright">Copyright Socket Supply Co. 2022</span>
          </p>
        </div>

      </footer>

      ${jsBundle}
    `
  }
}
