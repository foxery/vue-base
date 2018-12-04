import Toast from '../components/toast'
import Vue from 'vue'

export default {
  install (Vue, options = {}) {
    const VueToast = Vue.extend(Toast)
    let toast = null

    function $toast (params) {
      return new Promise(resolve => {
        if (!toast) {
          toast = new VueToast()

          toast.$mount()

          document.querySelector(options.container || 'body').appendChild(toast.$el)
        }
        toast.show(params)
        resolve()
      })
    }

    Vue.prototype.$toast = $toast
  }
}