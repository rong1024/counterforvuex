export const increments = (state,payload) => {
    state.count = state.count + payload.amount;
}

export const decrement = state => {
    state.count = state.count - 3
}

