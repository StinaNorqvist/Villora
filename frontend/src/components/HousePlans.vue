<script>
  import fetch from '../../../backend/fetch.js'

  export default {
    name: 'HousePlans',
    data() {
      return {
        houseItems: null,
        sortOption: null,
        filterOption: null
      }
    },

    async created() {
      this.houseItems = await fetch.house()
      console.log(this.houseItems, 'House Fetch')
    },

    methods: {
      handleSortOption(option) {
        this.sortOption = option
      },
      handleFilterOption(option) {
        this.filterOption = option
      }
    },

    computed: {
      houseItemsSorted() {
        if (!this.houseItems || !this.sortOption) return null

        const sortedItems = [...this.houseItems]
        if (this.sortOption === 'name') {
          sortedItems.sort((a, z) => a.houseName.localeCompare(z.houseName))
        } else if (this.sortOption === 'price') {
          sortedItems.sort((low, high) => low.housePrice - high.housePrice)
        } else if (this.sortOption === 'floors') {
          sortedItems.sort((low, high) => low.houseFloors - high.houseFloors)
        } else if (this.sortOption === 'bedrooms') {
          sortedItems.sort(
            (low, high) => low.houseBedrooms - high.houseBedrooms
          )
        } else if (this.sortOption === 'bathrooms') {
          sortedItems.sort(
            (low, high) => low.houseBathrooms - high.houseBathrooms
          )
        }

        return sortedItems
      },

      houseItemsFiltered() {
        if (!this.houseItems || !this.filterOption) return null

        let filterItems = [...this.houseItems]

        if (this.filterOption === '1floor') {
          filterItems = filterItems.filter((item) => item.houseFloors === 1)
        } else if (this.filterOption === '2floor') {
          filterItems = filterItems.filter((item) => item.houseFloors === 2)
        } else if (this.filterOption === '3floor') {
          filterItems = filterItems.filter((item) => item.houseFloors === 3)
        }

        return filterItems
      }
    }
  }
</script>

<template>
  <!-- FILTER BUTTONS -->
  <button @click="handleFilterOption('1floor')">1 Floor</button>
  <button @click="handleFilterOption('2floor')">2 Floor</button>
  <button @click="handleFilterOption('3floor')">3 Floor</button>

  <!-- SORT BUTTONS -->
  <button @click="handleSortOption('name')">Sort by Name</button>
  <button @click="handleSortOption('price')">Sort by Price</button>
  <button @click="handleSortOption('floors')">Sort by Floors</button>
  <button @click="handleSortOption('bedrooms')">Sort by Bedrooms</button>
  <button @click="handleSortOption('bathrooms')">Sort by Bathrooms</button>

  <div class="houseList" v-if="houseItemsSorted">
    <div
      class="houseItem"
      v-for="houseItem in houseItemsSorted"
      :key="houseItem.Id"
    >
      <p>Name: {{ houseItem.houseName }}</p>
      <p>Price: {{ houseItem.housePrice }} $</p>
      <p>Floors: {{ houseItem.houseFloors }}</p>
      <p>Bedrooms: {{ houseItem.houseBedrooms }}</p>
      <p>Bathrooms: {{ houseItem.houseBathrooms }}</p>
    </div>
  </div>

  <div class="houseList" v-if="houseItemsFiltered">
    <div
      class="houseItem"
      v-for="houseItem in houseItemsFiltered"
      :key="houseItem.Id"
    >
      <p>Name: {{ houseItem.houseName }}</p>
      <p>Price: {{ houseItem.housePrice }} $</p>
      <p>Floors: {{ houseItem.houseFloors }}</p>
      <p>Bedrooms: {{ houseItem.houseBedrooms }}</p>
      <p>Bathrooms: {{ houseItem.houseBathrooms }}</p>
    </div>
  </div>
</template>
