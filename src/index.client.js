import Tonic from '@socketsupply/tonic'
import Debug from 'debug'
import components from '@socketsupply/components'

import AppTree from './components/tree.js'
import AppSprite from './components/sprite.js'
import { GridContainer, GridCell } from './components/grid.js'

window.localStorage.debug = 'op:*'

components(Tonic)

Tonic.add(AppTree)
Tonic.add(AppSprite)
Tonic.add(GridCell)
Tonic.add(GridContainer)

const debug = Debug('op:index')

async function ready () {
  debug('op:ready')

  const nav = document.querySelector('nav')

  window.addEventListener('scroll', e => {
    if (window.scrollY > 16) {
      nav.classList.add('shadow')
      return
    }
    nav.classList.remove('shadow')
  })
}

document.addEventListener('DOMContentLoaded', ready)
