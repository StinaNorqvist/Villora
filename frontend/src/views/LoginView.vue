<template>
  <h1>Login</h1>
  <form id="loginForm" action="/auth" method="POST">
    <label for="username">Username:</label>
    <input type="text" id="username" name="userName" required /><br />

    <label for="password">Password:</label>
    <input type="password" id="password" name="userPassword" required /><br />

    <button type="submit">Logga in</button>
  </form>
</template>
