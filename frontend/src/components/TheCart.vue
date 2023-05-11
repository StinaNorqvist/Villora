<script>
  export default {
    methods: {
      deleteCart(index) {
        this.$store.commit('removeFromCart', index)
      }
    }
  }
</script>

<template>
  <h1>Cart page</h1>

  Number of houses in cart:
  {{ $store.state.cart.length }}

  <ul>
    <li :key="houseItems.id" v-for="(houseItems, index) in $store.state.cart">
      <img alt="" :src="houseItems.houseImage" />
      {{ houseItems.houseName }}, $ {{ houseItems.housePrice }}, Product id:
      {{ houseItems.id }}
      <input
        type="button"
        value="Remove from cart"
        @click="deleteCart(index)"
      />
    </li>
  </ul>
</template>
