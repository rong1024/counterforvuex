export const increment = ({ state, commit, rootState }) => commit({
    type: 'increments',
    amount: rootState.count
})
export const decrement = ({ commit }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            commit('decrement')
            resolve(1)
        }, 1000)
    })
}

export const decrementB = ({ dispatch, commit, getters, rootGetters }) => {
    return dispatch('decrement').then((value) => {
        dispatch('decrement', null, { root: true })
        console.log(value);
    })
}