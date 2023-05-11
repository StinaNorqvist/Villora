<script>
  export default {
    methods: {
      deleteFavorite(index) {
        this.$store.commit('removeFromFavorite', index)
      }
    }
  }
</script>

<template>
  <h1>HALLÅ</h1>
  <ul>
    <li
      :key="houseItems.id"
      v-for="(houseItems, index) in $store.state.favorite"
    >
      <img alt="hejehj" :src="houseItems.houseImage" />
      {{ houseItems.houseName }}, $ {{ houseItems.housePrice }}
      <input
        type="button"
        value="Remove from favories"
        @click="deleteFavorite(index)"
      />
    </li>
  </ul>
</template>
