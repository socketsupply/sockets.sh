import path from 'node:path'

export default meta => path.dirname(new URL(meta.url).pathname)
