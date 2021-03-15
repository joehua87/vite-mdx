import pluginPrefresh from '@prefresh/vite'
import { resolve } from 'path'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [
    pluginPrefresh(),
    {
      name: 'transform-gql',
      transform(src, path) {
        if (path.endsWith('.gql')) {
          return `export default \`${src}\``
        }
      },
    },
  ],
  resolve: {
    alias: {
      '~': resolve('src'),
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
  optimizeDeps: {
    exclude: [],
    include: [],
  },
  server: { port: 3200 },
}

export default config
