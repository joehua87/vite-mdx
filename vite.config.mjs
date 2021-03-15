import { resolve } from 'path'
import xdm from 'xdm/rollup.js'

import pluginPrefresh from './prefresh/index-2.1.0.mjs'

const config = {
  plugins: [pluginPrefresh(), xdm({})],
  resolve: {
    alias: {
      '~': resolve('src'),
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
  server: { port: 3200 },
}

export default config
