export default params => `
  app-tree {
    user-select: none;
    content-visibility: auto;
    -webkit-user-select: none;
    padding: 28px;
    display: block;
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }

  body.mobile app-tree {
    transition: all .2s ease;
    top: 40px;
    bottom: 40px;
    left: 20%;
    transform: translateX(100%);
  }

  body[sidebar="true"] app-tree {
    transform: translateX(0%);
  }

  app-tree * {
    user-select: none;
    -webkit-user-select: none;
  }

  app-tree:hover {
    overflow-y: overlay;
  }

  app-tree .children {
    display: block;
  }

  app-tree .node-data {
    display: flex;
    padding: 2 4px 0;
    width: 100%;
  }

  app-tree .region {
    text-overflow: ellipsis;
    overflow: hidden;
    padding-right: 20px;
  }

  app-tree .item .node-data .label {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-left: 8px;
    text-indent: 28px;
    text-decoration: none;
    text-underline-offset: 2px;
    line-height: 22px;
    letter-spacing: 0.8px;
  }

  app-tree .item .handle:hover {
    background: var(--tonic-border);
    cursor: pointer;
  }

  app-tree .item .handle[data-selected="1"] .node-data .label {
    color: var(--tonic-accent);
    text-decoration: underline;
  }

  app-tree .item .node-data .label[disabled] {
    color: var(--tonic-disabled);
  }

  app-tree .item .node-data .label[disabled]:hover {
    border-bottom: 1px solid transparent;
  }

  app-tree .node[data-id="root"] {
    margin: 30px 40px;
  }

  app-tree .node[data-state="0"] .children {
    /* display: none; */
  }

  app-tree .node {
    position: relative;
    list-style: none;
    padding: 0;
    padding-left: 20px;
  }

  app-tree > .node,
  app-tree main > .node {
    padding-left: 0px;
  }

  app-tree .item .handle {
    user-select: none;
    text-decoration: none;
    font-size: 14px;
    color: var(--tonic-primary);
    background: var(--tonic-window);
    border-radius: 4px;
    margin-left: 24px;
    position: relative;
    display: flex;
    padding: 4px 0px;
    min-height: 28px;
  }

  app-tree[draggable="false"] .item .handle a {
    -webkit-user-drag: none;
  }

  app-tree .item .handle[data-state="0"] + .node {
    display: none;
  }

  app-tree .item .handle[data-state="1"] + .node {
    display: block;
  }

  app-tree .toggle {
    position: absolute;
    top: 8px;
    left: -14px;
    width: 14px;
    height: 14px;
  }

  app-tree .item .handle[data-state="0"][data-toggle="false"] .toggle {
    display: none;
  }

  app-tree .item .handle[data-dir="true"] .toggle:before,
  app-tree .item .handle[data-state="0"][data-toggle="true"] .toggle:before,
  app-tree .item .handle[data-state="1"][data-toggle="true"] .toggle:before {
    content: ' ';
    position: absolute;
    top: 4px;
    left: -4px;
    border-top: 1px solid var(--tonic-primary);
    border-right: 1px solid var(--tonic-primary);
    transform: rotate(45deg);
    width: 6px;
    height: 6px;
    cursor: pointer;
  }

  app-tree .item .handle[data-state="1"][data-toggle="true"] .toggle:before {
    left: -2px;
    top: 2px;
    transform: rotate(135deg);
  }

  /* the vertical bars on each item */
  app-tree .item {
    /* background:
      repeating-linear-gradient(
        90deg,
        var(--tonic-border),
        var(--tonic-border) 1px,
        transparent 1px,
        transparent 32px
      ); */
    background-size: 32px;
    position: relative;
  }

  app-tree .item::before {
    /* position: absolute;
    width: 12px;
    height: 1px;
    content: ' ';
    top: 15px;
    border-top: 1px solid var(--tonic-border); */
  }

  app-tree .item:last-child {
    background: var(--tonic-window);
  }

  /* the L shape at the end of each node */
  app-tree .item:last-child::before {
    /* width: 12px;
    height: 15px;
    border: 1px solid var(--tonic-border);
    content: ' ';
    position: absolute;
    top: 0px;
    left: 0px;
    border-right: none;
    border-top: none; */
  }

  app-tree tonic-icon {
    position: absolute;
    cursor: pointer;
    top: 6px;
    left: 8px;
  }

  app-tree tonic-icon[cached="true"]:after {
    content: ' ';
    border-radius: 128px;
    border: 1px solid var(--tonic-window);
    background: var(--tonic-warning);
    position: absolute;
    bottom: -2px;
    right: -2px;
    height: 6px;
    width: 6px;
  }
`
