<script>
  import fetch from '../../../backend/fetch'

  export default {
    created() {
      this.users = fetch.user
    },
    data() {
      return {
        users: null
      }
    }
  }
</script>
<template>
  <h1>profile</h1>
  {{ users }}
</template>
