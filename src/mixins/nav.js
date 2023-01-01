import Tonic from '@socketsupply/tonic'

const nav = Tonic.unsafeRawString(`
  <nav>
    <a href="/"><img src="/images/waves.svg" class="hypno" alt="Waves" /> <b id="name-brand">Socket Runtime</b></a>
    <span></span>
    <a href="/api">API</a>
    <a href="/guides">Guides</a>
    <a href="https://github.com/socketsupply">Github</a>
  </nav>
`)

export default nav
