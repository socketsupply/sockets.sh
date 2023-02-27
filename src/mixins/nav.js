import Tonic from '@socketsupply/tonic'

const nav = Tonic.unsafeRawString(`
  <nav>
    <a href="/">Socket Runtime</b></a>
    <span></span>
    <a href="/api">API</a>
    <a href="https://github.com/socketsupply/socket-examples">Examples</a>
    <a href="https://github.com/socketsupply">Github</a>
    <div class="menu"></div>
  </nav>
`)

export default nav
