// @ts-check
'use strict'

import Tonic from '@socketsupply/tonic'

import env from './env'

const fetch = window.fetch
const EMAIL_LIKE_REGEX = /^\S+@\S+\.\S+$/
const HOST = window.location.host

export class Downloads extends Tonic {
  click (ev) {
    const el = Tonic.match(ev.target, '[data-event]')
    if (!el) return

    const { event } = el.dataset

    if (event === 'subscribe') {
      const input = this.querySelector('#username')
      const emailText = input.value

      if (!EMAIL_LIKE_REGEX.test(emailText)) {
        input.setInvalid('Invalid Email')
        return
      }

      input.setValid()

      const extraInput = this.querySelector('input.extra-input')
      this.sendMailChimpReq(emailText, extraInput)
    }
  }

  // https://stackoverflow.com/questions/8425701/ajax-mailchimp-signup-form-integration/50611587#50611587
  async sendMailChimpReq (emailText, extraInput) {
    const self = this
    let mailChimpUrl = 'https://gmail.us10.list-manage.com/subscribe/post-json'
    mailChimpUrl += '?u=d693deeef5703050d9c7c49d7'
    mailChimpUrl += '&id=e9dd2b46ff'

    if (extraInput.value) {
      mailChimpUrl += `&${extraInput.name}=${extraInput.value}`
    }

    mailChimpUrl += `&EMAIL=${emailText}`
    // This &c=MAIL_CHIMP_CB param is for JSONP
    mailChimpUrl += '&c=MAIL_CHIMP_CB'

    window.MAIL_CHIMP_CB = onMailchimpResponse
    const script = document.createElement('script')
    script.src = mailChimpUrl
    document.head.appendChild(script)

    function onMailchimpResponse (response) {
      const result = response.result

      if (result === 'success') {
        window.sessionStorage.mailingListEmail = emailText
        window.localStorage.hasMailingList = 'MAILING_LIST'
        self.state.submitted = true
        return self.reRender()
      }

      if (result === 'error' && response.msg &&
        /is already subscribed/.test(response.msg)
      ) {
        window.sessionStorage.mailingListEmail = emailText
        window.localStorage.hasMailingList = 'MAILING_LIST'
        self.state.submitted = true
        return self.reRender()
      }

      self.state.emailError = response.msg
      self.reRender()
    }
  }
}

export class BetaSignup extends Downloads {
  renderControls () {
    if (this.state.emailError) {
      return this.html`
        <section class="subscribe">
          <h2 class="error">Could not subscribe to newsletter.</h2>
          <p class="error">${this.state.emailError}</p>
        </section>
      `
    }

    if (this.state.submitted) {
      return this.html`
        <i>Thanks! See you soon!</i>
      `
    }

    return this.html`
      <tonic-input
        label="Email Address"
        type="email"
        class="email-input"
        width="100%"
        id="username"
        autofocus="true"
        spellcheck="false"
        error-message="Invalid Email"
      ></tonic-input>

      <div style="position: absolute; left: -5000px;" aria-hidden="true">
        <input class="extra-input" type="text" name="b_60ca16fea9002052e22a573da_8bb4f8aea2" tabindex="-1" value="">
      </div>

      <tonic-button async data-event="subscribe">
        Signup
      </tonic-button>
    `
  }

  render () {
    return this.html`
      <img src="/images/hello.png">

      <p>
        Sign up for Private Beta<br/> or
        join us in <a href="https://discord.gg/YPV32gKCsH">Discord</a>.
      </p>

      ${this.renderControls()}
    `
  }
}

export class DownloadLinks extends Downloads {
  constructor () {
    super()

    this.state = {
      visible: false,
      emailError: null,
      versionError: null,
      downloadInfo: null,
      ...this.state
    }
  }

  connected () {
    this.state.noEmail = true
    this.show()

    this.fetchVersion()
  }

  async fetchVersion () {
    const isNightly = window.location.search.includes('nightly')

    let url = `${env.API_URL}/update/get-toolbox-version`
    if (isNightly) {
      url += '?release=nightly'
    }

    let resp
    try {
      resp = await fetch(url, { method: 'GET' })
    } catch (err) {
      console.error(err)
      this.state.versionError = err.message
      this.reRender()
    }
    if (!resp) return

    let body
    let text
    try {
      if (resp.status === 200) {
        body = await resp.json()
      } else {
        text = await resp.text()
      }
    } catch (err) {
      this.state.versionError = err
      this.reRender()
      return
    }

    if (body) {
      this.state.downloadInfo = body
    } else if (text) {
      this.state.versionError = text
    }
    this.reRender()
  }

  show () {
    this.state.visible = true
    this.reRender()
  }

  /**
   * Subscription email input
   *
   *  - [x] persist email (localStorage)
   *  - [x] persist whether user has an activation code (localStorage)
   *  - [x] prompt user if no activation code
   *  - [x] pre-fill email in signup form
   *  - [x] If signed in then allow downloads.
   */
  render () {
    if (!this.state.visible) {
      return ''
    }

    const isNightly = window.location.search.includes('nightly')
    if (HOST === 'socketsupply.co' && !isNightly) {
      return this.html`
        <section class="subscribe">
          <h2>Downloads</h2>
          <p>
            Our downloads are currently coming soon.
        </section>
      `
    }

    const isLoggedIn = window.localStorage.signinState === 'SIGNED_IN'
    const hasSignedUp = window.localStorage.hasSignedUp === 'SIGNED_UP'
    const hasMailingList = window.localStorage.hasMailingList === 'MAILING_LIST'

    if (this.state.noEmail || isLoggedIn || hasSignedUp || hasMailingList) {
      return this.renderDownloads()
    }

    if (this.state.emailError) {
      return this.html`
        <section class="subscribe">
          <h2 class="error">Could not subscribe to newsletter.</h2>
          <p class="error">${this.state.emailError}</p>
        </section>
      `
    }

    /**
     * The input extra-input with name b_60ca... is there for bots.
     *
     * real people should not fill this in and expect good things -
     * do not remove this or risk form bot signups
     */

    return this.html`
      <section class="subscribe">
        <p>
          We want to hear your ideas and get your feedback.
        <p class="small">
          We value your time and privacy, so we won't spam you or
          share your email with any third parties.
        </p>
        <tonic-input
          label="Your Email"
          type="email"
          class="email-input"
          width="100%"
          id="username"
          autofocus="true"
          spellcheck="false"
          error-message="Invalid Email"
        ></tonic-input>
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input class="extra-input" type="text" name="b_60ca16fea9002052e22a573da_8bb4f8aea2" tabindex="-1" value="">
        </div>
        <tonic-button async data-event="subscribe">
          Subscribe
        </tonic-button>
      </section>
    `
  }

  renderDownloads () {
    if (this.state.versionError) {
      return this.html`
        <section class="version-error">
          <h2 class="error">Could not find latest version of Operator app.</h2>
          <p class="error">${this.state.versionError}</p>
        </section>
      `
    }

    const hasActivationKey =
      window.localStorage.hasActivationKey === 'HAS_ACTIVATION_KEY'

    return this.html`
      <tonic-tabs id="select-os" selected="${hasActivationKey ? 'tab-os-linux' : 'tab-none'}">
        <tonic-tab id="tab-none" for="tab-panel-none">
        </tonic-tab>

        <tonic-tab id="tab-os-linux" for="tab-panel-os-linux">
          <img src="/images/icons/linux.svg">
        </tonic-tab>

        <tonic-tab id="tab-os-macos" for="tab-panel-os-macos">
          <img src="/images/icons/apple.svg">
        </tonic-tab>

        <tonic-tab id="tab-os-windows" for="tab-panel-os-windows">
          <img src="/images/icons/windows.svg">
        </tonic-tab>
      </div>

      <tonic-tab-panel id="tab-panel-none">
        <p>
          Select an OS
        </p>
      </tonic-tab-panel>

      <tonic-tab-panel id="tab-panel-os-linux">
        ${this.renderLinks('linux')}
      </tonic-tab-panel>

      <tonic-tab-panel id="tab-panel-os-macos">
        ${this.renderLinks('darwin-zip')}
      </tonic-tab-panel>

      <tonic-tab-panel id="tab-panel-os-windows">
        Coming Soon
      </tonic-tab-panel>
    `
  }

  renderLinks (os) {
    const versionError = this.state.versionError
    if (versionError) {
      return this.html`
        <section class="version-error">
          <h2 class="error">Could not find latest version of Operator app.</h2>
          <p class="error">${this.state.versionError}</p>
        </section>
      `
    }

    const isLoading = this.state.downloadInfo === null
    if (isLoading) {
      return this.html`<div>STILL LOADING</div>`
    }

    const anchors = []

    anchors.push(this.renderDownloadLink('data', os))
    anchors.push(this.renderDownloadLink('files', os))
    anchors.push(this.renderDownloadLink('functions', os))

    return this.html`${anchors}`
  }

  renderDownloadLink (appName, os) {
    const downloadInfo = this.state.downloadInfo


    const anchors = []

    const info = downloadInfo[appName]
    for (const link of info.links) {
      if (link.platformId !== os) {
        continue
      }

      if (link.href.includes('undefined')) {
        continue
      }

      anchors.push(this.html`
        <a alt="Download for ${link.platform}" download href="${link.href}">
          <div class="download">
            <p>
              <span class="app-name">${link.appName} app</span>
              <span>${link.osName}</span>
              <span>${link.versionDescription}</span>
            </p>
            <div class="download-icon">
              <span>${link.fileExtension}</span>
              <img src="/images/icons/download.svg" />
            </div>
          </div>
        </a>
      `)
    }

    return this.html`${anchors}`
  }
}
