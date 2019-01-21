import '~/assets/css/main.pcss'
import '~/assets/img/logo.svg'

import DefaultLayout from '~/layouts/Default.vue'
import Fragment from 'vue-fragment'

export default function (Vue, { head }) {
  Vue.use(Fragment.Plugin)
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
