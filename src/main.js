import '~/assets/css/main.pcss'
import '~/assets/img/logo.svg'

import Fragment from 'vue-fragment'
import VueMasonry from 'vue-masonry-css'

import DefaultLayout from '~/layouts/Default.vue'

import store from '~/store'

export default function (Vue, { appOptions, head }) {
  Vue.use(Fragment.Plugin)
  Vue.use(VueMasonry)

  Vue.component('Layout', DefaultLayout)

  Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  })

  appOptions.store = store

  head.meta = [
    { charset: 'utf-8' },
    { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ...head.meta
  ]

  head.bodyAttrs = {
    ...head.bodyAttrs,
    class: 'flex min-h-screen text-black text-base leading-normal font-sans'
  }
}
