import '~/assets/css/main.pcss'
import '~/assets/img/logo.svg'

import Fragment from 'vue-fragment'
import VueFeather from 'vue-feather'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { head }) {
  Vue.use(Fragment.Plugin)
  Vue.use(VueFeather)

  Vue.component('Layout', DefaultLayout)

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
