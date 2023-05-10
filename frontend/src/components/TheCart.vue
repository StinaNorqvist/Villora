<script>
  export default {}
</script>

<template>
  <h1>Cart page</h1>

  Number of houses in cart:
  {{ $store.state.cart.length }}

  <ul>
    <li :key="houseItems.id" v-for="houseItems in $store.state.cart">
      <img alt="" :src="houseItems.houseImage" />
      {{ houseItems.houseName }}, $ {{ houseItems.housePrice }}, Product id:
      {{ houseItems.id }}
      <input
        type="button"
        value="Remove from cart"
        @click="$store.commit('removeFromCart', houseItems)"
      />
    </li>
  </ul>
</template>
