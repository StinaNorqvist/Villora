<template>
  <div class="backgroundImageContainer">
    <img
      src="../../assets/images/headerImage.jpeg"
      alt="background image"
      class="backgroundImage"
    />
    <div class="loginAccountContainer glassEffect">
      <form id="loginForm" action="/auth" method="POST">
        <div class="inputContainer">
          <input
            type="text"
            id="username"
            name="userName"
            placeholder="username"
            required
          /><br />

          <input
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
