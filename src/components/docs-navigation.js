import Tonic from '@socketsupply/tonic'
import scrollToY from 'scrolltoy'

export default class DocsNavigation extends Tonic {
  connected () {
    console.log('DocsNavigation connected()')

    //
    // Docs
    //
    const tabs = document.querySelector('#docs-tabs')

    if (tabs) {
      // let t = null
      // ;[...document.querySelectorAll('h1, h2, h3, h4')].forEach(el => {
      //   el.addEventListener('click', e => {
      //     const id = e.target.id

      //     e.target.classList.add('copied')
      //     e.target.addEventListener('transitionend', () => {
      //       clearTimeout(t)

      //       t = setTimeout(() => {
      //         e.target.classList.remove('copied')
      //       }, 512)
      //     })

      //     const tab = tabs.value.replace('tab-', '')
      //     const text = `https://optool.co/docs/?${tab}/${id}`
      //     const input = document.createElement('input')
      //     input.setAttribute('value', text)
      //     document.body.appendChild(input)
      //     input.select()
      //     const result = document.execCommand('copy')
      //     document.body.removeChild(input)
      //     return result
      //   })
      // })

      const h = window.location.search.slice(1).split('/')

      if (h.length) {
        const section = h.shift()
        const id = h.shift()

        setTimeout(() => {
          tabs.selected = `tab-${section}` || 'tab-get-started'

          if (id) {
            const el = document.getElementById(id)
            scrollToY(window, el.offsetTop - el.offsetHeight - 100, 200)
          }
        }, 128)
      }
    }
  }

  render () {
    return ''
  }
}
