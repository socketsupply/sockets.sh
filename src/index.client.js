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

  let timeout = null
  const selector = '[data-id]:not([data-id="stack"], [data-id="os"])'

  const all = [...document.querySelectorAll(selector)]
  const tabs = document.querySelector('tonic-tabs#code-01')

  for (const el of all) {
    el.addEventListener('mouseenter', e => {
      clearTimeout(timeout)
      const el = Tonic.match(e.target, selector)
      if (!el) return

      if (el.dataset.id === 'js') tabs.selected = 'tab-js-01'
      if (el.dataset.id === 'css') tabs.selected = 'tab-css-01'
      if (el.dataset.id === 'html') tabs.selected = 'tab-html-01'
      if (el.dataset.id === 'subprocess') tabs.selected = 'tab-sp-01'

      for (const el of all) {
        el.classList.add('dim')
      }

      {
        const partner = document.querySelector('[data-content].show')
        if (partner) partner.classList.remove('show')
      }

      const partner = document.querySelector(`[data-content="${el.dataset.id}"]`)
      if (partner) partner.classList.add('show')

      el.classList.remove('dim')
    })

    el.addEventListener('mouseleave', e => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        for (const el of all) {
          if (el.classList.contains('dim')) el.classList.remove('dim')
        }
      }, 128)
    })
  }
}

document.addEventListener('DOMContentLoaded', ready)
