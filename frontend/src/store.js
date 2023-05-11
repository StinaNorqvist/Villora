import { createStore } from 'vuex'

const mutations = {
    addToCart(state, houseItems) {
      state.cart.push(houseItems)
    },
    removeFromCart(state, index) {
      if (index > -1) {
        state.cart.splice(index, 1)
      }
    },
    addToFavorite(state, houseItems) {
      state.favorite.push(houseItems)
    },
    removeFromFavorite(state, index) {
      if (index > -1) {
        state.favorite.splice(index, 1)
      }
    },
  },
  //data
  state = {
    cart: [], 
    favorite: []
  }
// export default store;
export default createStore({ mutations, state, strict: true })
