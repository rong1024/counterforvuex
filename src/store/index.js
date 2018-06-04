import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

// const state = {
//     count: 0
// }

const moduleB = {
    namespaced: true,
    state:{
        count: 10
    },
    getters,
    actions,
    mutations
}

const moduleA = {
    namespaced: true,
    state:{
        count: 0
    },
    getters,
    actions,
    mutations
}



const store = new Vuex.Store({
    state:{
        count:100
    },
    mutations:{
        decrement (state) {
            state.count = state.count - 3
        }
    },
    actions:{
        decrement ({ commit }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('decrement')
                    resolve('index.js里面&根')
                }, 1000)
            })
        }
    },
    modules: {
        a: moduleA,
        b: moduleB,

    }
})

export default store