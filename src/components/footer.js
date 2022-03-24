import Tonic from 'tonic-ssr'

export default class AppFooter extends Tonic {
  async render () {
    const buildDir = './build'

    let jsBundle
    if (this.props.jsBundle === true || this.props.jsBundle === "true") {
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
          <div class="flex">
            <div>
              <h4>Products</h4>
              <ul>
                <li><a href="/data" alt="Data App">Data App</a></li>
                <li><a href="/files" alt="Files App">Files App</a></li>
                <li><a href="/functions" alt="Functions App">Functions App</a></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="/pricing" alt="Pricing">Pricing</a></li>
                <li><a href="/blog/hello-world" alt="Blog">Blog</a></li>
                <li><a href="/faq" alt="Frequently Asked Questions">FAQ</a></li>
                <li><a href="/jobs" alt="Jobs">Jobs</a></li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:hello@optool.co" alt="Email">Email</a></li>
                <li><a href="https://twitter.com/socketsupply" rel="noopener" class="underline" alt="Twitter">Twitter</a></li>
                <li><a href="https://github.com/socketsupply" rel="noopener" class="underline" alt="Github">Github</a></li>
                <li><a href="https://discord.gg/YPV32gKCsH" rel="noopener" class="underline" alt="Discord">Discord</a></li>
              </ul>
            </div>
          </div>

          <p class="copy">
            <a href="/terms" alt="Terms of Service">Terms of Service</a>
            <span>&nbsp;&verbar;&nbsp;</span>
            <a href="/privacy" alt="Privacy Policy">Privacy</a>
            <span>&nbsp;&verbar;&nbsp;</span>
            <span class="copyright">&copy; Copyright Socket Supply Co. 2022</span>
          </p>
        </div>

      </footer>

      ${jsBundle}
    `
  }
}
