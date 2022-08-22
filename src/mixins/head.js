import fs from 'node:fs'
import path from 'node:path'

import Tonic from '@socketsupply/tonic'
import dirname from '../util.js'

const __dirname = dirname(import.meta)
const pkgSrc = path.join(__dirname, '..', '..', 'package.json')
const pkg = JSON.parse(fs.readFileSync(pkgSrc, 'utf8'))

const html = async args => {
  args = {
    ...pkg.config,
    ...args
  }

  const {
    title,
    description,
    image,
    url,
    siteName
  } = args

  const globalStyles = [
    'theme.css',
    'common.css',
    'markdown.css',
    'footer.css',
    'table.css',
    'pages/api.css',
    'page-base.css',
    'nav.css',
    'tonic-overrides.css'
  ]

  const styleTags = [...globalStyles, ...(args.styles || [])]
    .map(style => `<link rel="stylesheet" href="/styles/${style}">`)
    .join('\n    ')

  return Tonic.unsafeRawString(`
    <title>${title}</title>

    <meta
      name="theme-color"
      content="var(--tonic-window)"
      media="(prefers-color-scheme: light)">

    <meta
        name="theme-color"
        content="rgba(41, 41, 41, 1)"
        media="(prefers-color-scheme: dark)">

    <link rel="preload" href="/fonts/Inter-Light.woff2" as="font" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" href="/fonts/FiraMono-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous">

    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32.png">
    <link rel="icon" type="image/svg+xml" sizes="any" href="/images/favicon.svg">
    <link rel="mask-icon" href="/images/mask-icon.svg" color="#36393d">
    <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png">

    ${styleTags}

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1 user-scalable=no">

    <meta name="description" content="${description}">

    <meta property="og:type" content="website">
    <meta property="og:url" content="${url}">
    <meta property="og:site_name" content="${siteName}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${image}">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@socketsupply">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:image" content="${image}">
    <meta name="twitter:description" content="${description}">
  `)
}

export default html
