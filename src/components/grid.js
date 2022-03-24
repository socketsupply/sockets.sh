import Tonic from '@socketsupply/tonic'

export class GridContainer extends Tonic {
  connected () {
    const {
      columns,
      rows,
      template
    } = this.props

    this.style.display = 'grid'

    if (Number(columns)) {
      this.style.gridTemplateColumns = `repeat(${columns}, 1fr)`
    } else if (columns) {
      this.style.gridTemplateColumns = columns
    }

    if (Number(rows)) {
      this.style.gridTemplateRows = `repeat(${rows}, 1fr)`
    } else if (rows) {
      this.style.gridTemplateRows = rows
    }

    if (template) {
      this.style.gridtemplate = template
    }

    this.style.gridGap = this.props.gap
  }

  render () {
    return this.html`
      ${this.elements}
    `
  }
}

export class GridCell extends Tonic {
  connected () {
    this.style.gridArea = this.props.area
  }

  render () {
    return this.html`
      ${this.elements}
    `
  }
}
