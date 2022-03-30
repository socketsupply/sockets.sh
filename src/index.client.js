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

async function ready () {
  debug('op:ready')
}

document.addEventListener('DOMContentLoaded', ready)
