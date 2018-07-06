import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import createLogger from 'vuex/dist/logger'
import createPersistedState from 'vuex-persistedstate'
import toast from '@/common/toast'

// Modules
import user from './user'
import films from './films'

Vue.use(Vuex)
Vue.use(VueResource)

Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    user,
    films
  },
  strict: false,
  middlewares: debug ? [createLogger()] : [],
  plugins: [
    createPersistedState({
      paths: ['user', 'films']
    })
  ]
})

export default store
