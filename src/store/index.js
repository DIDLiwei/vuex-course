import Vue from 'vue'
import Vuex from 'vuex'
import count from './modules/count'
import todos from './modules/todos'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        count,
        todos
    }
})