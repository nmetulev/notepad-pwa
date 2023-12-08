import postcssLit from 'rollup-plugin-postcss-lit';
import * as path from "node:path";
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { normalizePath } from 'vite'

// https://vitejs.dev/config/
export default {
  base: "/",
  build: {
    sourcemap: true,
    assetsDir: "code"
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: normalizePath(path.resolve('./node_modules/@shoelace-style/shoelace/dist/assets/icons/gear.svg')),
          dest: normalizePath(path.resolve('./public/shoelace/assets/icons/'))
        },
        {
          src: normalizePath(path.resolve('./node_modules/@shoelace-style/shoelace/dist/assets/icons/dot.svg')),
          dest: normalizePath(path.resolve('./public/shoelace/assets/icons/'))
        }
      ]
    })
    // postcssLit({
    //   include: ['**/*.css', '**/*.css\?*']
    // })
  ]
}
