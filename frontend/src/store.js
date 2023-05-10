import { createStore } from 'vuex'

const mutations = {
    addToCart(state, houseItems) {
      state.cart.push(houseItems)
    },
    removeFromCart(state, houseItems) {
      const houseCartIndex = state.cart.findIndex(
        (hou) => hou.id === houseItems.id
      )
      if (houseCartIndex > -1) {
        state.cart.splice(houseCartIndex, 1)
      }
    }
  },
  //data
  state = {
    cart: []
  }
// export default store;
export default createStore({ mutations, state, strict: true })
