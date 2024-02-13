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
          src: normalizePath(path.resolve('./node_modules/@shoelace-style/shoelace/dist/assets/icons/palette.svg')),
          dest: normalizePath(path.resolve('./public/shoelace/assets/icons/'))
        },
        {
          src: normalizePath(path.resolve('./node_modules/@shoelace-style/shoelace/dist/assets/icons/fonts.svg')),
          dest: normalizePath(path.resolve('./public/shoelace/assets/icons/'))
        },
        {
          src: normalizePath(path.resolve('./node_modules/@shoelace-style/shoelace/dist/assets/icons/text-wrap.svg')),
          dest: normalizePath(path.resolve('./public/shoelace/assets/icons/'))
        },
        {
          src: normalizePath(path.resolve('./node_modules/@shoelace-style/shoelace/dist/assets/icons/sticky.svg')),
          dest: normalizePath(path.resolve('./public/shoelace/assets/icons/'))
        },
        {
          src: normalizePath(path.resolve('./node_modules/@shoelace-style/shoelace/dist/assets/icons/box-arrow-up-right.svg')),
          dest: normalizePath(path.resolve('./public/shoelace/assets/icons/'))
        },
        {
          src: normalizePath(path.resolve('./node_modules/@shoelace-style/shoelace/dist/assets/icons/chevron-up.svg')),
          dest: normalizePath(path.resolve('./public/shoelace/assets/icons/'))
        },
        {
          src: normalizePath(path.resolve('./node_modules/@shoelace-style/shoelace/dist/assets/icons/chevron-down.svg')),
          dest: normalizePath(path.resolve('./public/shoelace/assets/icons/'))
        },
        {
          src: normalizePath(path.resolve('./node_modules/@shoelace-style/shoelace/dist/assets/icons/arrow-left.svg')),
          dest: normalizePath(path.resolve('./public/shoelace/assets/icons/'))
        },
        {
          src: normalizePath(path.resolve('./node_modules/@shoelace-style/shoelace/dist/assets/icons/arrow-up.svg')),
          dest: normalizePath(path.resolve('./public/shoelace/assets/icons/'))
        },
        {
          src: normalizePath(path.resolve('./node_modules/@shoelace-style/shoelace/dist/assets/icons/arrow-down.svg')),
          dest: normalizePath(path.resolve('./public/shoelace/assets/icons/'))
        },
        {
          src: normalizePath(path.resolve('./node_modules/@shoelace-style/shoelace/dist/assets/icons/x-lg.svg')),
          dest: normalizePath(path.resolve('./public/shoelace/assets/icons/'))
        },
        {
          src: normalizePath(path.resolve('./node_modules/@shoelace-style/shoelace/dist/assets/icons/x.svg')),
          dest: normalizePath(path.resolve('./public/shoelace/assets/icons/'))
        },
        {
          src: normalizePath(path.resolve('./node_modules/@shoelace-style/shoelace/dist/assets/icons/sliders.svg')),
          dest: normalizePath(path.resolve('./public/shoelace/assets/icons/'))
        },
        {
          src: normalizePath(path.resolve('./node_modules/@shoelace-style/shoelace/dist/assets/icons/search.svg')),
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
