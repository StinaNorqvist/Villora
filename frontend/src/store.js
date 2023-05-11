import { createStore } from 'vuex'

const mutations = {
    addToCart(state, houseItems) {
      state.cart.push(houseItems)
    },
    removeFromCart(state, index) {
      if (index > -1) {
        state.cart.splice(index, 1)
      }
    }
  },
  //data
  state = {
    cart: []
  }
// export default store;
export default createStore({ mutations, state, strict: true })
