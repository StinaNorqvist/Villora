<template>
  <form @submit.prevent="editAccount">
    <input
      v-model="userName"
      :placeholder="fetchUserName"
      type="text"
      name="userName"
      id="userName"
      required
    />
    <br />
    <input
      v-model="userMail"
      :placeholder="fetchMail"
      type="mail"
      name="userMail"
      id="userMail"
      required
    />
    <br />
    <input
      v-model="userPhone"
      type="tel"
      name="userPhone"
      id="userPhone"
      required
    />
    <br />
    <input
      v-model="userPassword"
      type="password"
      name="userPassword"
      id="userPassword"
      required
    />
    <br />
    <div class="saveEditButtonContainer">
      <button type="submit" @click="editAccount" class="saveEditButton">
        save
      </button>
    </div>
  </form>
</template>

<script>
  import fetch from '../../../backend/fetch'
  export default {
    data() {
      return {
        userName: null,
        userMail: null,
        userPhone: null,
        userPassword: null,
        fetchUserName: null,
        users: null,
        fetchMail: null
      }
    },
    // async created() {
    //   this.fetchUserName = sessionStorage.getItem('username')
    //   this.users = await fetch.user(this.fetchUserName)
    //   this.fetchMail = this.users
    //   console.log(this.fetchMail, 'fetchmail')
    // },
    methods: {
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
<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 60%;
  }
</style>
