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
    data() {
      return {
        favoriteText: ''
      }
    },
    methods: {
      deleteFavorite(index) {
        this.$store.commit('removeFromFavorite', index)
      },
      updateText() {
        if (this.$store.state.favorite.length === 0) {
          this.favoriteText = 'You havent favorited any houses yet'
        } else {
          this.favoriteText = ''
        }
      }
    },
    mounted() {
      this.updateText()
    }
  }
</script>

<template>
  <div class="favoritesContainer">
    <h1 id="favoriteH1">Favorites</h1>
    <div class="favoriteGrid">
      {{ this.favoriteText }}
      <div
        v-for="(houseItems, index) in $store.state.favorite"
        :key="houseItems.id"
        class="favoriteItem"
      >
        <img :src="houseItems.houseImage" alt="hejehj" class="houseImage" />
        <div class="houseDetails">
          <h2>
            {{ houseItems.houseName }}
          </h2>
          <p>Price: {{ houseItems.housePrice }}$</p>
        </div>
        <div class="removeFavButton">
          <button class="heartButton" @click="deleteFavorite(index)">
            <i class="bi bi-heart-fill" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #favoriteH1 {
    margin-top: 0;
  }
  .favoritesContainer {
    margin: 40px;
    margin-top: 0;
  }

  .favoriteGrid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    gap: 10px;
  }

  .favoriteItem {
    width: 48%;
    min-height: 48%;
    max-height: 48%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  .houseImage {
    width: 100%;
    min-height: 100%;
    max-height: 100%;
    margin-bottom: 10px;
    border-radius: 5px;
  }

  .houseDetails {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fafafa;
    z-index: 300;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 5px;
    transition: opacity 0.3s ease-in-out;
    backdrop-filter: blur(15px);
  }

  .houseDetails:hover {
    opacity: 100;
  }

  .removeFavButton {
    align-self: flex-end;
    margin: 10px;
    position: absolute;
    z-index: 400;
  }
  .heartButton {
    background: none;
    border: none;
    font-size: 35px;
  }
</style>
