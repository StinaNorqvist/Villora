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
          this.sortOptions = this.sortOptions.filter((o) => o !== option)
          this.priceSortOrder = 'lowToHigh'
        } else {
          this.sortOptions.push(option)
          if (option === 'price') {
            this.priceSortOrder = 'lowToHigh'
          }
        }
      },
      handleFilterOption(option) {
        if (this.filterOptions.includes(option)) {
          this.filterOptions = this.filterOptions.filter((o) => o !== option)
        } else {
          this.filterOptions.push(option)
        }
      },
      handlePriceSortOrder() {
        if (this.priceSortOrder === 'lowToHigh') {
          this.houseItemsProcessed.sort(
            (low, high) => high.housePrice - low.housePrice
          )
          this.priceSortOrder = 'highToLow'
        } else {
          this.houseItemsProcessed.sort(
            (low, high) => low.housePrice - high.housePrice
          )
          this.priceSortOrder = 'lowToHigh'
        }
      }
    },

    computed: {
      houseItemsProcessed() {
        if (!this.houseItems) return null

        let processedItems = [...this.houseItems]

        // Filtering
        if (this.filterOptions.length > 0) {
          processedItems = processedItems.filter((item) =>
            this.filterOptions.includes(`${item.houseFloors}floor`)
          )
        }

        // Sorting
        this.sortOptions.forEach((sortOption) => {
          if (sortOption === 'name') {
            processedItems.sort((a, z) =>
              a.houseName.localeCompare(z.houseName)
            )
          } else if (sortOption === 'price') {
            if (this.priceSortOrder === 'lowToHigh') {
              processedItems.sort(
                (low, high) => low.housePrice - high.housePrice
              )
            } else {
              processedItems.sort(
                (low, high) => high.housePrice - low.housePrice
              )
            }
          } else if (sortOption === 'floors') {
            processedItems.sort(
              (low, high) => low.houseFloors - high.houseFloors
            )
          } else if (sortOption === 'bedrooms') {
            processedItems.sort(
              (low, high) => low.houseBedrooms - high.houseBedrooms
            )
          } else if (sortOption === 'bathrooms') {
            processedItems.sort(
              (low, high) => low.houseBathrooms - high.houseBathrooms
            )
          }
        })

        return processedItems
      }
    }
  }
</script>

<template>
  <div class="intro">
    <h1>House Plans</h1>
    <p>
      Welcome to Our House Plans Collection - Discover Your Dream Home Design.
      Our collection of house plans features a wide variety of styles and sizes
      to suit your unique needs and preferences. Whether you're looking for a
      cozy cottage or a spacious modern home, we have a design that's perfect
      for you.
    </p>
  </div>

  <div class="container">
    <div class="filer-container">
      <div class="filter-section">
        <div class="filter-options">
          <div class="filter-buttons">
            <button
              @click="handleFilterOption('1floor')"
              :class="{ active: filterOptions.includes('1floor') }"
            >
              1 Floors
            </button>
            <button
              @click="handleFilterOption('2floor')"
              :class="{ active: filterOptions.includes('2floor') }"
            >
              2 Floors
            </button>
            <button
              @click="handleFilterOption('3floor')"
              :class="{ active: filterOptions.includes('3floor') }"
            >
              3 Floors
            </button>
          </div>
        </div>
      </div>

      <div class="sort-section">
        <div class="sort-buttons">
          <button
            @click="handleSortOption('name')"
            :class="{ active: sortOptions.includes('name') }"
          >
            Sort by Name
          </button>
          <button
            @click="handleSortOption('price')"
            :class="{ active: sortOptions.includes('price') }"
          >
            Sort by Price ({{
              sortOptions.includes('price') ? 'Low to High' : 'High to Low'
            }})
          </button>
          <button
            @click="handleSortOption('floors')"
            :class="{ active: sortOptions.includes('floors') }"
          >
            Sort by Floors ({{
              sortOptions.includes('floors') ? 'Low to High' : 'High to Low'
            }})
          </button>
          <button
            @click="handleSortOption('bedrooms')"
            :class="{ active: sortOptions.includes('bedrooms') }"
          >
            Sort by Bedrooms ({{
              sortOptions.includes('bedrooms') ? 'Low to High' : 'High to Low'
            }})
          </button>
          <button
            @click="handleSortOption('bathrooms')"
            :class="{ active: sortOptions.includes('bathrooms') }"
          >
            Sort by Bathrooms ({{
              sortOptions.includes('bathrooms') ? 'Low to High' : 'High to Low'
            }})
          </button>
        </div>
      </div>
    </div>

    <div class="houseList" v-show="houseItemsProcessed">
      <div
        class="houseItem"
        v-for="houseItem in houseItemsProcessed"
        :key="houseItem.Id"
      >
        <img id="houseImage" :src="houseItem.houseImage" alt="housePicture" />
        <h3>{{ houseItem.houseName }}</h3>
        <p>Price: {{ houseItem.housePrice }} $</p>
        <p>Floors: {{ houseItem.houseFloors }}</p>
        <p>Bedrooms: {{ houseItem.houseBedrooms }}</p>
        <p>Bathrooms: {{ houseItem.houseBathrooms }}</p>
        <input
          type="button"
          value="Add to cart"
          @click="$store.commit('addToCart', houseItem)"
        />
        <i class="bi bi-heart" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .filter-buttons {
    display: flex;
    margin-bottom: 10px;
    margin-left: 40px;
  }

  .sort-buttons {
    display: flex;
    margin-bottom: 50px;
    margin-left: 40px;
  }

  .filter-buttons button,
  .sort-buttons button {
    margin-right: 10px;
    padding: 10px;
    font-size: 20px;
    border: 1px solid #ccc;
    background-color: transparent;
    cursor: pointer;
    border-radius: 5px;
    font-weight: 200;
  }

  .filter-buttons button {
    background-color: #fafafa;
    color: #000000;
  }

  .sort-buttons button {
    background-color: #fafafa;
    color: #000000;
  }

  .filter-buttons button.active,
  .sort-buttons button.active {
    background-color: #615648;
    color: #fafafa;
  }

  .houseList {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }

  .houseItem {
    width: 260px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f7f7f7;
  }

  .intro {
    text-align: center;
    margin: 0 auto 40px;
    display: flex;
    flex-direction: column;
    width: 80%;
    align-content: center;
  }

  .intro p {
    align-items: center;
  }

  .intro h1 {
    margin: -20px;
    margin-top: 30px;
  }

  #houseImage {
    width: 95%;
    display: block;
    margin: auto;
    margin-top: 7px;
    border-radius: 5px;
    height: 200px;
  }

  /* Media queries for responsiveness */
  @media screen and (max-width: 1200px) {
    .houseItem {
      width: 260px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f7f7f7;
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

    #houseImage {
      width: 95%;
      display: block;
      margin: auto;
      margin-top: 7px;
      border-radius: 5px;
      height: 150px;
    }
  }
</style>
