import Tonic from '@socketsupply/tonic'
import Debug from 'debug'
import components from '@socketsupply/components'

import { GridContainer, GridCell } from './components/grid.js'
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
  Tonic.add(AppManage)
}

document.addEventListener('DOMContentLoaded', ready)
