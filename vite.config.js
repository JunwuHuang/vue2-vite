import { createVuePlugin } from 'vite-plugin-vue2'
import babel from '@rollup/plugin-babel'

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
    })
  ]
}
