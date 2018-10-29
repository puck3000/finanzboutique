const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: "David Kobel Finanzboutique",
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        value: 'https://davidkobel.ch/davidkobel.jpg'
      }, {
        hid: 'twitter:description',
        name: 'twitter:description',
        value: pkg.description
      }, {
        hid: 'og:title',
        name: 'og:title',
        content: 'David Kobel'
      }, {
        name: 'og:type',
        content: 'article'
      }, {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://davidkobel.ch'
      }, {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://davidkobel.ch/davidkobel.jpg'
      }, {
        hid: 'og:description',
        name: 'og:description',
        content: pkg.description
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    link: [{
      rel: 'stylesheet',
      type: 'text/css',
      charset: 'utf-8',
      href: 'https://indestructibletype-fonthosting.github.io/jost.css'
    }]

  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/tailwind.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {

    }
  }
}
