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
