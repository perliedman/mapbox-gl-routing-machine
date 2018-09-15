import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import svelte from 'rollup-plugin-svelte'
import url from "rollup-plugin-url"

export default {
  input: 'src/main.js',
  external: ['mapbox-gl'],
  output: {
    file: 'dist/mapbox-gl-routing-machine.js',
    format: 'umd',
    name: 'mbglrm',
    globals: {
      'mapbox-gl': 'mapboxgl'
    }
  },
  plugins: [
    json({ preferConst: true }),
    url(),
    svelte({
      css: function (css) {
        css.write('dist/mapbox-gl-routing-machine.css')
      },
    }),
    resolve({browser: true}),
    commonjs()
  ]
}
