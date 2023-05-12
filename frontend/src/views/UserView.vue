<script>
  import fetch from '../../../backend/fetch'
  import FavoriteList from '../components/FavoriteList.vue'
  import EditUser from '../components/EditUser.vue'

  export default {
    components: {
      FavoriteList,
      EditUser
    },
    data() {
      return {
        settings: false,
        editing: false,
        userNameSession: null
      }
    },
    async created() {
      this.userNameSession = sessionStorage.getItem('username')
      this.users = await fetch.user(this.userNameSession)
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
      },

      async editAccount() {
        console.log('HEJEHEJEHEHJEHEHEHEHEH')
        const response = await fetch('http://localhost:3000/api/user', {
          method: 'PUT',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',

          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
          body: JSON.stringify({
            userName: this.userName,
            userMail: this.userMail,
            userPhone: this.userPhone,
            userPassword: this.userPassword
          })
        })
        const data = await response.json()

        if (data.success) {
          console.log('Edit konto: success')
        } else {
          console.log('Edit konto: no')
        }
      }
    }
  }
</script>
<template>
  <h1>Welcome {{ this.userNameSession }}</h1>
  <div id="profileButtonsContainer">
    <button @click="toggleSettings">favorites</button>
    <button @click="toggleFavorites">settings</button>
  </div>
  <div v-if="!settings" id="userFavContainer" class="userContainer glassEffect">
    <div><FavoriteList /></div>
  </div>
  <div
    v-else
    id="userSetContainer"
    class="userContainer glassEffect userContainerSettings"
  >
    <div v-for="user in users" :key="user" class="userInputContainer">
      <div id="userInput">
        <p>Your profile settings:</p>
        <EditUser />
      </div>
    </div>
    <div class="userLogoContainer">
      <img
        src="../../assets/logos/iconBigDark.png"
        alt="villora logo"
        id="villoraUserLogo"
      />
      <p id="userLogoText">Villora</p>
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
  }
  .userContainerSettings {
    display: flex;
  }
  .userInputContainer {
    width: 50%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  #userInput {
    width: 60%;
  }
  .saveEditButtonContainer {
    display: flex;
    justify-content: end;
  }
  .userLogoContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 50%;
  }
  #villoraUserLogo {
    width: 50%;
    height: 50%;
  }
  #userLogoText {
    font-family: 'Lato', sans-serif;
    font-weight: 150;
    text-transform: uppercase;
    font-size: 50px;
    text-align: center;
    letter-spacing: 0.3em;
    margin: 0;
    padding: 0;
  }
</style>
