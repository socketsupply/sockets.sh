// @ts-check

import { TonicDialog } from '@socketsupply/components/dialog'

export default class DialogConfirm extends TonicDialog {
  static stylesheet () {
    return /* css */`
      dialog-confirm.tonic--dialog .tonic--dialog--content .tonic--dialog--content-container > main {
        padding: 32px;
      }

      dialog-confirm .message {
        font-size: 16px;
        margin-bottom: 10px;
      }
    `
  }

  click (ev) {
    super.click(ev)

    const el = ev.target
    if (el.tagName === 'BUTTON') {
      const buts = [...this.querySelectorAll('tonic-button')]
      for (const but of buts) {
        but.disabled = 'true'
      }
    }
  }

  /**
   * @param {{
   *    message: string,
   *    title: string,
   *    checkboxLabel?: string,
   *    buttons?: object[],
   *    noHide: boolean,
   *    type: string
   * }} opts
   * @returns
   */
  async prompt (opts) {
    this.state = opts
    await this.reRender()
    await this.show()
    const result = await this.event('click')
    if (opts.noHide !== true) {
      await this.hide()
    }
    return result
  }

  renderCheckbox () {
    if (this.state.checkboxLabel) {
      return this.html`
        <tonic-checkbox
          label="${this.state.checkboxLabel}",
          id="T${Math.random()}"
        ></tonic-checkbox>
      `
    }
  }

  renderButtons () {
    if (!this.state.buttons) {
      return this.html`
        <tonic-button async="true" value="ok">OK</tonic-button>
      `
    }

    return this.state.buttons.map(button => {
      const isAsync = button.isAsync === true ? 'true' : 'false'

      return this.html`
        <tonic-button
          value="${button.value}"
          async="${isAsync}"
        >${button.label}</tonic-button>`
    })
  }

  render () {
    const {
      message,
      title = 'Confirm',
      type
    } = this.state

    return this.html`
      <header>${title}</header>
      <main>
        <tonic-icon
          symbol-id="${type}"
          size="24px"
        ></tonic-icon>
        <div class="message">
          ${message}
        </div>
        ${this.renderCheckbox()}
      </main>
      <footer>
        ${this.renderButtons()}
      </footer>
    `
  }
}
