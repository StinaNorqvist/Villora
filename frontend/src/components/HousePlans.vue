<script>
  import fetch from '../../../backend/fetch.js'

  export default {
    name: 'HousePlans',
    data() {
      return {
        houseItems: null,
        sortOptions: [],
        filterOptions: [],
        priceSortOrder: 'lowToHigh'
      }
    },

    async created() {
      this.houseItems = await fetch.house()
      console.log(this.houseItems, 'House Fetch')
    },

    methods: {
      handleSortOption(option) {
        if (this.sortOptions.includes(option)) {
          this.sortOptions = this.sortOptions.filter(o => o !== option);
          this.priceSortOrder = 'lowToHigh';
        } else {
          this.sortOptions.push(option);
          if (option === 'price') {
            this.priceSortOrder = 'lowToHigh';
          }
        }
      },
      handleFilterOption(option) {
        if (this.filterOptions.includes(option)) {
          this.filterOptions = this.filterOptions.filter(o => o !== option);
        } else {
          this.filterOptions.push(option);
        }
      },
      handlePriceSortOrder() {
        if (this.priceSortOrder === 'lowToHigh') {
          this.houseItemsProcessed.sort((low, high) => high.housePrice - low.housePrice);
          this.priceSortOrder = 'highToLow';
        } else {
          this.houseItemsProcessed.sort((low, high) => low.housePrice - high.housePrice);
          this.priceSortOrder = 'lowToHigh';
        }
      }
    },

    computed: {
      houseItemsProcessed() {
        if (!this.houseItems) return null

        let processedItems = [...this.houseItems]

        // Filtering
        if (this.filterOptions.length > 0) {
          processedItems = processedItems.filter(item => this.filterOptions.includes(`${item.houseFloors}floor`));
        }

        // Sorting
        this.sortOptions.forEach(sortOption => {
          if (sortOption === 'name') {
            processedItems.sort((a, z) => a.houseName.localeCompare(z.houseName))
          } else if (sortOption === 'price') {
            if (this.priceSortOrder === 'lowToHigh') {
              processedItems.sort((low, high) => low.housePrice - high.housePrice)
            } else {
              processedItems.sort((low, high) => high.housePrice - low.housePrice)
            }
          } else if (sortOption === 'floors') {
            processedItems.sort((low, high) => low.houseFloors - high.houseFloors)
          } else if (sortOption === 'bedrooms') {
            processedItems.sort((low, high) => low.houseBedrooms - high.houseBedrooms)
          } else if (sortOption === 'bathrooms') {
            processedItems.sort((low, high) => low.houseBathrooms - high.houseBathrooms)
          }
        });

        return processedItems;
      }
    }
  }
</script>


<template>
  <div class="container">

    <div class="filer-container">
      <div class="filter-section">
      <h2>Filter</h2>
      <div class="filter-options">
        
        <div class="filter-buttons">
          <button @click="handleFilterOption('1floor')" :class="{ active: filterOptions.includes('1floor') }">
            1 Floor
          </button>
          <button @click="handleFilterOption('2floor')" :class="{ active: filterOptions.includes('2floor') }">
            2 Floors
          </button>
          <button @click="handleFilterOption('3floor')" :class="{ active: filterOptions.includes('3floor') }">
            3 Floors
          </button>
        </div>
      </div>
    </div>

    <div class="sort-section">
      <h2>Sort</h2>
      <div class="sort-buttons">
        <button @click="handleSortOption('name')" :class="{ active: sortOptions.includes('name') }">
          Sort by Name
        </button>
        <button @click="handleSortOption('price')" :class="{ active: sortOptions.includes('price') }">
          Sort by Price ({{ sortOptions.includes('price') ? 'Low to High' : 'High to Low' }})
        </button>
        <button @click="handleSortOption('floors')" :class="{ active: sortOptions.includes('floors') }">
          Sort by Floors ({{ sortOptions.includes('floors') ? 'Low to High' : 'High to Low' }})
        </button>
        <button @click="handleSortOption('bedrooms')" :class="{ active: sortOptions.includes('bedrooms') }">
          Sort by Bedrooms ({{ sortOptions.includes('bedrooms') ? 'Low to High' : 'High to Low' }})
        </button>
        <button @click="handleSortOption('bathrooms')" :class="{ active: sortOptions.includes('bathrooms') }">
          Sort by Bathrooms ({{ sortOptions.includes('bathrooms') ? 'Low to High' : 'High to Low' }})
        </button>
      </div>
    </div>
    </div>
 

    <div class="houseList">
      <div
        class="houseItem"
        v-for="houseItem in houseItemsProcessed"
        :key="houseItem.Id"
      >
        <h3>{{ houseItem.houseName }}</h3>
        <p>Price: {{ houseItem.housePrice }} $</p>
        <p>Floors: {{ houseItem.houseFloors }}</p>
        <p>Bedrooms: {{ houseItem.houseBedrooms }}</p>
        <p>Bathrooms: {{ houseItem.houseBathrooms }}</p>
      </div>
    </div>
  </div>
</template>



<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.filer-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h2 {
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size: 22px;
}

h3 {
  margin-bottom: 5px;
  font-size: 18px;
}

.filter-section,
.sort-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.filter-buttons,
.sort-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
}
.filter-options {
  display: flex;
}
.filter-buttons button,
.sort-buttons button {
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 5px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  outline: none;
  transition: all 0.2s;
}

.filter-buttons button.active,
.sort-buttons button.active {
  background: rgba(0, 150, 255, 0.8);
  color: white;
  border-color: rgba(0, 150, 255, 0.8);
}

.houseList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.houseItem {
  box-sizing: border-box;
  flex-basis: calc(25% - 20px);
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  text-align: center;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

/* Media queries for responsiveness */
@media screen and (max-width: 1200px) {
  .houseItem {
    flex-basis: calc(33.33% - 20px);
  }
}

@media screen and (max-width: 992px) {
  .houseItem {
    flex-basis: calc(50% - 20px);
  }
}

@media screen and (max-width: 576px) {
  .houseItem {
    flex-basis: calc(100% - 20px);
  }
}
</style>



