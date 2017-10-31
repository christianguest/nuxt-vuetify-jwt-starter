module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt Apollo Vuetify',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt Apollo Vuetify Project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Muli:300,400|Material+Icons' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/stylus/app.styl', lang: 'styl' }
  ],
  /*
  ** Customise Progress Bar
  */
  loading: {
    color: '#ff0056'
  },
  /*
  ** Router middleware - will be run before page is rendered
  */
  /*
  router: {
    middleware: ['transition'],
    scrollBehavior: function () {
      return { x: null, y: null }
    }
  },
  */
  /*
  ** Page Transitions
  */
  /*
  transition: {
    mode: 'in-out'
  },
  */
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios', 'vuetify', 'babel-polyfill'],
    extractCSS: true,
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: ['~plugins/vuetify.js'],
  modules: ['@nuxtjs/apollo'],
  apollo: {
    networkInterfaces: {
      default: '~/apollo/network-interfaces/default.js'
    }
  }
}
