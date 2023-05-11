<script>
  import fetch from '../../../backend/fetch'

  export default {
    data() {
      return {
        users: null,
        userName: null
      }
    },
    async created() {
      this.users = await fetch.user()
      console.log(this.users, 'testar usresss')
      this.userName = sessionStorage.getItem('username')
      console.log(this.userName, 'profil username')
      console.log(sessionStorage, 'getlocal')
    }
  }
</script>
<template>
  <div>
    <h1>Welcome {{ this.userName }}</h1>
    <div><p>favorithus här</p></div>
    <div>
      <p>inställningar? typ göra PUT och ändra användarnamn, lösen osv?</p>
    </div>
  </div>
  <!-- göra användarnamn unika så man kan göra en PUT och delete WHERE username = sessionstorage
-->

  <!-- <div v-for="user in users" :key="user">
    <h2>{{ user.userName }}</h2>
    <p>{{ '0' + user.userPhone }}</p>
    <p>{{ user }}</p>
  </div> -->
</template>
