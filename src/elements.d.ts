// Must have dead import to allow declare global.
import * as fs from "fs"

import PageSettings from './pages/manage/settings/index'
import DialogConfirm from './components/dialog-confirm'
import DialogLoading from './components/dialog-loading'

declare global {
  interface Window {
    user?: {
      email: string,
      emailVerified: string
    }
  }

  interface HTMLElementTagNameMap {
    "page-settings": PageSettings;
    "dialog-confirm": DialogConfirm;
    "dialog-loading": DialogLoading;
  }
}
