// @ts-check
'use strict'

import Tonic from '@socketsupply/tonic'
import css from './tree.css.js'

const EXPANDED_STATE = 1
const CLOSED_STATE = 0
const NOT_SELECTED = 0
const IS_SELECTED = 1

export default class AppTree extends Tonic {
  static stylesheet () {
    return css()
  }

  /**
   * auto-sort="false"
   */
  defaults () {
    return {
      selectMode: 'leaf-only',
      autoExpand: true,
      autoSort: 'true',
      draggable: true
    }
  }

  walk (nodes, fn) {
    nodes = Array.isArray(nodes) ? nodes.slice() : [nodes]
    while (nodes.length) {
      const node = nodes.shift()
      const shouldBail = fn(node)
      if (shouldBail) {
        return shouldBail
      }

      if (node.children) {
        nodes.push(...node.children)
      }
    }
  }

  getNodeFromElement (el) {
    const { path } = el.dataset
    if (!path) {
      return null
    }

    let parent = this.state.tree

    for (const position of path.split('.')) {
      if (parent && parent.children) {
        parent = parent.children[position]
      }
    }

    return parent
  }

  resetSelectedNodeState () {
    this.walk(this.state.tree, (node) => {
      node.selected = NOT_SELECTED
    })
  }

  resetLeafNodeState () {
    this.walk(this.state.tree, (node) => {
      if (node.children.length === 0) {
        node.state = CLOSED_STATE
      }
    })
  }

  click (e) {
    const el = Tonic.match(e.target, '[data-path]')
    if (!el) return

    if (e.detail === 2) {
      return
    }

    const node = this.getNodeFromElement(el)
    if (!node) this.getNodeFromElement(el.parentElement)
    if (!node) return

    const isIcon = Tonic.match(e.target, '.toggle')
    return this.clickNode(node, isIcon)
  }

  async keydown (e) {
    if (e.keyCode === 32) {
      const focused = this.querySelector('a:focus')
      if (!focused) return

      const el = Tonic.match(focused, '[data-path]')
      if (!el) return

      const node = this.getNodeFromElement(el)
      if (!node) return

      const { x, y } = focused.getBoundingClientRect()

      await this.clickNode(node, true)

      const newElement = document.elementFromPoint(x, y)
      if (newElement) newElement.focus()
    }
  }

  async onSelection (node, isToggle) {
    node.element.scrollIntoView(true)
  }

  async connected () {
    const tree = {
      id: 'root',
      prec: 0,
      children: []
    }

    const headers = [...document.querySelector('main')
      .querySelectorAll('h1, h2, h3, h4')]

    let parent = tree
    let sibling = 0

    for (const h of headers) {
      const cls = h.tagName.toLowerCase()
      const prec = parseInt(cls.slice(1), 10)
      const method = /\.(\w+)\(/.exec(h.textContent)
      const title = method ? method[1] : h.textContent

      const node = {
        id: h.id,
        element: h,
        parent,
        prec,
        selected: 0,
        state: 0,
        label: title,
        children: []
      }

      if (node.prec === 1) {
        node.icon = 'package'
      } else {
        node.icon = 'file'
      }

      if (prec > sibling) {
        parent.children.push(node)
        parent = node
      }

      if (prec === sibling && parent.parent) {
        if (parent.prec >= sibling) {
          parent = node.parent = parent.parent
        }
        parent.children.push(node)
      }

      if (prec < sibling) {
        while (parent.prec >= prec) {
          parent = node.parent = parent.parent
        }
        parent.children.push(node)
        parent = node
      }

      sibling = prec
    }

    this.load(tree)
  }

  async clickNode (node, isIcon, forceOpen) {
    if (!node) return

    if (forceOpen) {
      node.state = CLOSED_STATE
    }

    let emitTreeChanged = false

    if (isIcon) {
      if (node.state === EXPANDED_STATE) {
        node.state = CLOSED_STATE
      } else if (node.state === CLOSED_STATE) {
        node.state = EXPANDED_STATE
      }

      if (this.onSelection) {
        this.onSelection(node, true)
        emitTreeChanged = true
      }
    } else {
      if (/* allowSelect && */ node.selected === NOT_SELECTED) {
        this.resetSelectedNodeState()
      }

      if (!node.children.length && node.state === CLOSED_STATE) {
        this.resetLeafNodeState()
      }

      if (node.state === CLOSED_STATE) {
        node.state = EXPANDED_STATE
      }

      if (this.onSelection) {
        this.onSelection(node, false)
        emitTreeChanged = true
      }

      if (!node.disabled) {
        node.selected = IS_SELECTED
        this.lastClickedNode = node
      }
    }

    await this.reRender()
    return node
  }

  load (value) {
    this.state.tree = value
    this.reRender()
  }

  renderNode (node, path) {
    if (!node) return ''
    if (!node.children) return ''

    const children = []

    const autoSort = this.props.autoSort
    if (autoSort === true || autoSort === 'true' || !autoSort) {
      node.children.sort((a, b) => a.label.localeCompare(b.label))
    }

    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i]
      const hasChildren = child.children && child.children.length

      // if (hasChildren) {
      //  children.push(this.renderNode(child.children))
      // }

      const isSelected = child.selected
      const title = (typeof child.title) === 'string' ? child.title : ''
      let icon = child.icon

      if (!icon || icon === 'folder') {
        icon = child.state === 1 ? 'folder-open' : 'folder'
      }

      const iconColor = node.iconColor || 'var(--tonic-info)'

      let dragdrop = ''
      let classes = ''
      const childPath = [...path, i].join('.')

      if (this.props.dragdrop === true || this.props.dragdrop === 'true') {
        classes = 'draggable droppable'

        if (window.process.platform === 'linux') {
          dragdrop = 'draggable=true droppable=true'
        } else {
          dragdrop = Tonic.unsafeRawString(`data-src="tree://${childPath}"`)
        }
      }

      const hasToggle = hasChildren > 0 || (icon === 'folder')
      children.push(this.html`
        <div class="item">
          <div
            class="handle ${classes}"
            ${dragdrop}
            data-dir="${String(child.type !== 'file')}"
            data-state="${String(child.state)}"
            data-selected="${String(isSelected)}"
            data-path="${childPath}"
            data-toggle="${String(hasToggle)}"
            title="${title}"
          >
            ${Tonic.unsafeRawString(hasToggle ? '<div class="toggle"></div>' : '')}
            <div class="region">
              <div class="node-data">
                <tonic-icon
                  symbol-id="${icon}"
                  fill="${iconColor}"
                  cached="${child.cached ? 'true' : 'false'}"
                  size="18px">
                </tonic-icon>
                <div class="label" ${child.disabled ? 'disabled' : ''}>
                  ${child.label}
                </div>
              </div>
            </div>
          </div>

          ${hasChildren ? this.renderNode(child, [...path, i]) : ''}
        </div>
      `)
    }

    return this.html`
      <div class="node">
        <div class="item">
          ${children}
        </div>
      </div>
    `
  }

  scroll (e) {
    this.state._scrollTop = this.scrollTop
  }

  updated () {
    this.scrollTop = this.state._scrollTop
  }

  render () {
    this.classList.add('tonic-tree')

    if (!this.state.tree) {
      return this.html`<tonic-loader></tonic-loader>`
    }

    return this.renderNode(this.state.tree, [])
  }
}
