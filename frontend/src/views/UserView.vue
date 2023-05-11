<script>
  import fetch from '../../../backend/fetch'
  import FavoriteList from '../components/FavoriteList.vue'

  export default {
    components: {
      FavoriteList
    },
    data() {
      return {
        users: null,
        userName: null,
        settings: false,
        editing: false
      }
    },
    async created() {
      this.userName = sessionStorage.getItem('username')
      this.users = await fetch.user(this.userName)
      console.log(this.users, 'testar usresss')
      console.log(this.userName, 'profil username')
      console.log(sessionStorage, 'getlocal')
      console.log(this.users, 'this users fetch')
    },
    methods: {
      toggleSettings() {
        this.settings = false
      },
      toggleFavorites() {
        this.settings = true
      },
      toggleEdit() {
        this.editing = !this.editing
      }
    }
  }
</script>
<template>
  <h1>Welcome {{ this.userName }}</h1>
  <div id="profileButtonsContainer">
    <button @click="toggleSettings">favorites</button>
    <button @click="toggleFavorites">settings</button>
  </div>
  <div v-if="!settings" id="userFavContainer" class="userContainer glassEffect">
    <div><FavoriteList /></div>
  </div>
  <div v-else id="userSetContainer" class="userContainer glassEffect">
    <div v-for="user in users" :key="user">
      <input
        type="text"
        name=""
        id=""
        :placeholder="user.userName"
        :disabled="!editing"
      />
      <br />
      <input
        type="mail"
        name=""
        id=""
        :placeholder="user.userMail"
        :disabled="!editing"
      />
      <br />
      <input
        type="tel"
        name=""
        id=""
        :placeholder="user.userPhone"
        :disabled="!editing"
      />
      <br />
      <input
        type="password"
        name=""
        id=""
        placeholder="*********"
        :disabled="!editing"
      />
      <br />
      <button v-if="!editing" @click="toggleEdit">edit</button>
      <button v-else @click="toggleEdit">save</button>
    </div>
  </div>

  <!-- göra användarnamn unika så man kan göra en PUT och delete WHERE username = sessionstorage
--></template>
<style>
  #profileButtonsContainer {
    margin-top: -15px;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 8px;
  }
  .userContainer {
    display: block;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 95%;
    min-height: 500px;
    background-color: green;
  }
</style>
