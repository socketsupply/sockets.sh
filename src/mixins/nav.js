import Tonic from '@socketsupply/tonic'

const nav = Tonic.unsafeRawString(`
  <nav>
    <a href="/" class="logo tc-logo" alt="Socket Supply Co.">
      <img src="/images/horizontal.svg">
      <div class="hover">
        <span>Deploy Everywhere</span>
      </div>
    </a>
    <div class="right auth-link hidden">
      <a href="/manage" class="text-button auth tc-sign-in">Sign in</a>
    </div>
  </nav>
  <script>
    (function _nav () {
      const nav = document.currentScript.previousElementSibling

      const HOST = window.location.host
      const PATHNAME = window.location.pathname
      if (HOST !== 'socketsupply.co') {
        nav.querySelector('.auth-link').classList.remove('hidden')
      }
      if (PATHNAME === '/manage/') {
        nav.querySelector('.auth-link').classList.remove('hidden')
      }

      function onScroll() {
        const pos = document.documentElement.scrollTop || document.body.scrollTop
        const alpha = Math.min(pos / 100, 1)
        const bg = \`rgba(255,255,255,\${alpha})\`
        nav.style.backgroundColor = bg
        const delta = Math.min(alpha, 0.35)
        if (alpha > 0) {
          nav.classList.add('scrolling')
        } else {
          nav.classList.remove('scrolling')
        }

        nav.style.boxShadow = \`0px -15px 35px 0px rgba(0,0,0,\${delta})\`
      }

      onScroll()
      window.addEventListener('scroll', onScroll)

      if (window.localStorage.signinState === 'SIGNED_IN') {
        const authLink = nav.querySelector('.tc-sign-in')
        authLink.textContent = 'Sign out'
        authLink.setAttribute('href', '/manage/?signout=true')

        const accountLink = document.createElement('a')
        accountLink.textContent = 'Account'
        accountLink.setAttribute('href', '/manage')
        accountLink.setAttribute('class', 'text-button auth tc-account')
        authLink.parentNode.appendChild(accountLink)
      }
    })()
  </script>
`)

export default nav
