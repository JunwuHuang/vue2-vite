import { createVuePlugin } from 'vite-plugin-vue2'
import babel from '@rollup/plugin-babel'
import alias from '@rollup/plugin-alias'
import path from 'path'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [
    createVuePlugin({
      jsx: true
    }),
    babel({
      babelHelpers: 'bundled'
    }),
    alias({
      entries: [
        {
          find: '/@',
          replacement: path.resolve(__dirname, 'src')
        }
      ]
    })
  ]
}
