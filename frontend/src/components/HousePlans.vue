<script>
  import fetch from '../../../backend/fetch.js'

  export default {
    name: 'HousePlans',
    data() {
      return {
        houseItems: null
      }
    },

    async created() {
      this.houseItems = await fetch.house()
      console.log(this.houseItems, 'HEJHEJEHEJEJE')
    }
  }
</script>

<template>
  <div class="houseList" v-if="houseItems">
    <div class="houseItem" v-for="houseItem in houseItems" :key="houseItem.Id">
      <p>{{ houseItem }}</p>
    </div>
  </div>
</template>
