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

  //
  // Dynamically generate a toc if this is an api page with an aside.
  //
  if (document.body.classList.contains('api')) {
    const aside = document.querySelector('aside')
    if (!aside) return

    const toc = [...document.querySelector('main')
      .querySelectorAll('h1, h2, h3, h4')].map(el => {
      const cls = el.tagName.toLowerCase()
      const method = /\.(\w+)\(/.exec(el.textContent)
      const title = method ? method[1] : el.textContent
      return `<a class="${cls}" href="#${el.id}">${title}</a>`
    })

    aside.innerHTML = toc.join('\n')
  }
}

document.addEventListener('DOMContentLoaded', ready)
