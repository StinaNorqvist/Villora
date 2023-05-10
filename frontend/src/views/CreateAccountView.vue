<template>
  <div class="backgroundImageContainer">
    <img
      src="../../assets/images/headerImage.jpeg"
      alt="background image"
      class="backgroundImage"
    />
    <div class="loginAccountContainer glassEffect">
      <form @submit.prevent="createAccount" id="createForm" action="POST">
        <div class="inputContainer">
          <input
            v-model="userName"
            type="text"
            id="username"
            name="userName"
            placeholder="username"
            required
          /><br />

          <input
            v-model="userMail"
            type="email"
            id="usermail"
            name="userMail"
            placeholder="example@email.com"
            required
          /><br />

          <input
            v-model="userPhone"
            type="tel"
            id="userphone"
            name="userPhone"
            placeholder="070-00 00 000"
            required
          /><br />

          <input
            v-model="userPassword"
            type="password"
            id="userpassword"
            name="userPassword"
            placeholder="password"
            required
          /><br />
        </div>
        <div class="loginButtonContainer">
          <button class="loginButton light" type="submit">
            Register Account
          </button>
          <p class="noAccount">already have an account?</p>

          <button class="createAccountButton light">
            <RouterLink to="/login">Login</RouterLink>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  // const createForm = document.querySelector('#createForm')
  // const createName = document.querySelector('#username')
  // const createMail = document.querySelector('#usermail')
  // const createPhone = document.querySelector('#userphone')
  // const createPassword = document.querySelector('#userpassword')

  export default {
    data() {
      return {
        userName: '',
        userMail: '',
        userPhone: '',
        userPassword: ''
      }
    },

    methods: {
      async createAccount() {
        const response = await fetch('http://localhost:3000/api/user', {
          method: 'POST',
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
        // console.log(data, 'varförrörörörör')
        const data = await response.json()
        return data
      }
    }
  }

  // function newAccount(event) {
  //   event.preventDefault()
  //   let userName = createName.value
  //   let userMail = createMail.value
  //   let userPhone = createPhone.value
  //   let userPassword = createPassword.value

  //   async function postData(url = '', data = {}) {
  //     const response = await fetch(url, {
  //       method: 'POST',
  //       mode: 'cors',
  //       cache: 'no-cache',
  //       credentials: 'same-origin',

  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       redirect: 'follow',
  //       referrerPolicy: 'no-referrer',
  //       body: JSON.stringify({
  //         userName: userName,
  //         userMail: userMail,
  //         userPhone: userPhone,
  //         userPassword: userPassword
  //       })
  //     })
  //     return response.json()
  //   }

  //   postData('http://localhost:3000/api/user').then((data) => {
  //     console.log(data, 'yaaay')
  //   })
  // }
  // createForm.addEventListener('submit', newAccount, false)
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
</style>
