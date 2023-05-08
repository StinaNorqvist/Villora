<script>
  import fetch from '../../../backend/fetch'

  export default {
    data() {
      return {
        users: null
      }
    },
    async created() {
      this.users = await fetch.user()
      console.log(this.user, 'testar usresss')
    }
  }
</script>
<template>
  <h1>profile</h1>
  <div v-for="user in users" :key="user">
    <h2>{{ user.userName }}</h2>
    <p>{{ '0' + user.userPhone }}</p>
    <p>{{ user }}</p>
  </div>
</template>
