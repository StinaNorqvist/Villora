<template>
  <div class="backgroundImageContainer">
    <img
      src="../../assets/images/headerImage.jpeg"
      alt="background image"
      class="backgroundImage"
    />
    <div class="loginAccountContainer glassEffect">
      <form @submit.prevent="loginAccount" id="loginForm" action="POST">
        <div class="inputContainer">
          <div id="failedText" class="light">{{ failedText }}</div>
          <input
            v-model="userName"
            type="text"
            id="username"
            name="userName"
            placeholder="username"
            required
          /><br />

          <input
            v-model="userPassword"
            type="password"
            id="password"
            name="userPassword"
            placeholder="password"
            required
          /><br />
        </div>
        <div class="loginButtonContainer">
          <button class="loginButton light" type="submit">Login</button>
          <p class="noAccount">don't already have an account?</p>

          <button class="createAccountButton light">
            <RouterLink to="/create">create account</RouterLink>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        userName: '',
        userPassword: '',
        loginSuccess: false,
        failedText: ''
      }
    },
    methods: {
      async loginAccount() {
        console.log('loggar login function')
        const response = await fetch('http://localhost:3000/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userName: this.userName,
            userPassword: this.userPassword
          })
        })
        const data = await response.json()

        if (data.success) {
          console.log('success loggin in')
          console.log(this.userName, 'usernameeee')
          this.loginSuccess = true
          console.log(this.loginSuccess)
          sessionStorage.setItem('username', this.userName)
        } else {
          console.log('failed loggin in ')
          console.log(this.loginSuccess)
          this.failedText = 'wrong username or password, try again'
        }
      }
      // saveUsername() {
      //   sessionStorage.setItem('username', this.userName)
      //   console.log(this.userName, 'username login')
      //   console.log(sessionStorage)
      // }
    },
    watch: {
      loginSuccess(newValue) {
        if (newValue === true) {
          this.$router.push('/profile')
        }
      }
    }
  }
</script>
<style>
  .backgroundImage {
    width: 100%;
    height: 100vh;
    position: relative;
  }
  .backgroundImageContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loginAccountContainer {
    margin: auto;
    width: 30%;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    margin-top: 30px;
    padding-top: 60px;
    padding-bottom: 60px;
    position: absolute;
  }
  .inputContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
  .loginButtonContainer {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  input {
    border: 0.2px solid rgb(201, 195, 195);
    border-radius: 2px;

    font-family: 'Inter';
    font-weight: 200;
    font-size: 18px;
  }
  .loginButton {
    border: none;
    background-color: rgba(0, 0, 0, 0);
    text-transform: uppercase;
    font-family: 'Inter';
    font-weight: 200;
    font-size: 18px;
  }
  .noAccount {
    font-style: italic;
    font-size: 15px;
    text-align: center;
  }
  .createAccountButton {
    border: none;
    background-color: rgba(0, 0, 0, 0);
    text-transform: uppercase;
    font-family: 'Inter';
    font-weight: 200;
    font-size: 18px;
  }
  .createAccountButton a {
    text-decoration: none;
    color: #fafafa;
  }
  #failedText {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 20px;
    margin-top: 15px;
  }
</style>
