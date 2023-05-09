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
        this.sortOption = this.sortOption === option ? null : option
      },
      handleFilterOption(option) {
        this.filterOption = this.filterOption === option ? null : option
      }
    },

    computed: {
      houseItemsProcessed() {
        if (!this.houseItems) return null

        let processedItems = [...this.houseItems]

        // Filtering
        if (this.filterOption) {
          if (this.filterOption === '1floor') {
            processedItems = processedItems.filter(
              (item) => item.houseFloors === 1
            )
          } else if (this.filterOption === '2floor') {
            processedItems = processedItems.filter(
              (item) => item.houseFloors === 2
            )
          } else if (this.filterOption === '3floor') {
            processedItems = processedItems.filter(
              (item) => item.houseFloors === 3
            )
          }
        }

        // Sorting
        if (this.sortOption) {
          if (this.sortOption === 'name') {
            processedItems.sort((a, z) =>
              a.houseName.localeCompare(z.houseName)
            )
          } else if (this.sortOption === 'price') {
            processedItems.sort((low, high) => low.housePrice - high.housePrice)
          } else if (this.sortOption === 'floors') {
            processedItems.sort(
              (low, high) => low.houseFloors - high.houseFloors
            )
          } else if (this.sortOption === 'bedrooms') {
            processedItems.sort(
              (low, high) => low.houseBedrooms - high.houseBedrooms
            )
          } else if (this.sortOption === 'bathrooms') {
            processedItems.sort(
              (low, high) => low.houseBathrooms - high.houseBathrooms
            )
          }
        }

        return processedItems
      }
    }
  }
</script>

<template>
  <!-- FILTER BUTTONS -->
  <div class="filter-buttons">
    <button
      @click="handleFilterOption('1floor')"
      :class="{ active: filterOption === '1floor' }"
    >
      1 Floor
    </button>
    <button
      @click="handleFilterOption('2floor')"
      :class="{ active: filterOption === '2floor' }"
    >
      2 Floor
    </button>
    <button
      @click="handleFilterOption('3floor')"
      :class="{ active: filterOption === '3floor' }"
    >
      3 Floor
    </button>
  </div>

  <!-- SORT BUTTONS -->
  <div class="sort-buttons">
    <button
      @click="handleSortOption('name')"
      :class="{ active: sortOption === 'name' }"
    >
      Sort by Name
    </button>
    <button
      @click="handleSortOption('price')"
      :class="{ active: sortOption === 'price' }"
    >
      Sort by Price
    </button>
    <button
      @click="handleSortOption('floors')"
      :class="{ active: sortOption === 'floors' }"
    >
      Sort by Floors
    </button>
    <button
      @click="handleSortOption('bedrooms')"
      :class="{ active: sortOption === 'bedrooms' }"
    >
      Sort by Bedrooms
    </button>
    <button
      @click="handleSortOption('bathrooms')"
      :class="{ active: sortOption === 'bathrooms' }"
    >
      Sort by Bathrooms
    </button>
  </div>

  <div class="houseList" v-show="houseItemsProcessed">
    <div
      class="houseItem"
      v-for="houseItem in houseItemsProcessed"
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

<style scoped>
  .filter-buttons {
    display: flex;
    margin-bottom: 10px;
  }

  .sort-buttons {
    display: flex;
    margin-bottom: 20px;
  }

  .filter-buttons button,
  .sort-buttons button {
    margin-right: 10px;
    padding: 8px 12px;
    font-size: 14px;
    border: 1px solid #ccc;
    background-color: transparent;
    cursor: pointer;
  }

  .filter-buttons button {
    background-color: #2c3e50;
    color: #fff;
  }

  .sort-buttons button {
    background-color: #34495e;
    color: #fff;
  }

  .filter-buttons button.active,
  .sort-buttons button.active {
    background-color: #e74c3c;
  }

  .houseList {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .houseItem {
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f7f7f7;
  }
</style>
