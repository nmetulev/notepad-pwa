import postcssLit from 'rollup-plugin-postcss-lit';

// https://vitejs.dev/config/
export default {
  base: "/",
  build: {
    sourcemap: true,
    assetsDir: "code",
  },
  plugins: [
    postcssLit({
      include: ['**/*.css', '**/*.css\?*']
    })
  ]
}
