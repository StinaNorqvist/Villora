<!-- <script>
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
</template> -->

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
  <div class="favoritesContainer">
    <h1>Favorites</h1>
    <p>Your Saved Favorite Villora House Plans</p>
    <div class="favoriteGrid">
      <div v-for="(houseItems, index) in $store.state.favorite" :key="houseItems.id" class="favoriteItem">
        <img :src="houseItems.houseImage" alt="hejehj" class="houseImage" />
        <div class="houseDetails">
        
          
          <input
            type="button"
            value="Remove"
            @click="deleteFavorite(index)"
            class="removeFavButton"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .favoritesContainer {
    margin: 40px;
  }

  .favoriteGrid {

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    gap: 2px;
    
  
  }

  .favoriteItem {
    width: 48%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: end;
   
  }


  .houseImage {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    border-radius: 5px;
  }

  .houseDetails {
    width: 100%;
    
  }

  .removeFavButton{
    position: absolute;
    z-index: 400;
    margin-top: -50px;
   margin-left: 20px;
   
    
  }
</style>