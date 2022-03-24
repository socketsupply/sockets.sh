import Tonic from '@socketsupply/tonic'
import Debug from 'debug'
import components from '@socketsupply/components'

import api from './api'
import AppManage from './pages/manage/index.js'
import { GridContainer, GridCell } from './components/grid.js'
import { DownloadLinks, BetaSignup } from './components/download-links.js'
// import header from './components/header'

window.localStorage.debug = 'op:*'

components(Tonic)

Tonic.add(GridCell)
Tonic.add(GridContainer)

const debug = Debug('op:index')

function handleTheme () {
  const theme = window.localStorage.getItem('theme') || 'light'
  document.body.setAttribute('theme', theme)

  const input = document.getElementById('dark')

  if (!input) return

  input.value = theme === 'dark'

  document.addEventListener('change', e => {
    if (Tonic.match(e.target, '#dark')) {
      const theme = e.target.checked ? 'dark' : 'light'
      window.localStorage.setItem('theme', theme)
      document.body.setAttribute('theme', theme)
    }
  })
}

async function ready () {
  debug('op:ready')

  handleTheme()

  let { err, data: user } = await api.auth.getUser()
  if (err === 'not authenticated') {
    err = null
    user = null
  }

  window.localStorage.signinState = user ? 'SIGNED_IN' : 'SIGNED_OUT'
  window.user = user
  debug(user)

  Tonic.add(AppManage)
}

document.addEventListener('DOMContentLoaded', ready)
