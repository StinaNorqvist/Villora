<script>
  import CitiesList from './components/CitiesList.vue'
  import CounterButton from './components/CounterButton.vue'
  import HelloWorld from './components/HelloWorld.vue'
  import fetch from '../../backend/fetch.js'

  export default {
    components: {
      CitiesList,
      CounterButton,
      HelloWorld
    },

    created() {
      this.houses = fetch.house
      this.styles = fetch.style
      this.users = fetch.user
      this.materials = fetch.material
    },

    data() {
      return {
        openNav: false,
        houses: null,
        styles: null,
        users: null,
        materials: null
      }
    },
    methods: {
      toggleNav() {
        this.openNav = !this.openNav
      }
    }
  }
</script>

<template>
  <header>
    <img
      src="../assets/images/headerImage.jpeg"
      alt="header image villora"
      id="headerImage"
    />
    <p class="light" id="headerText">Villora</p>
    <div class="light" id="scrollDownContainer">
      <p>scroll down</p>
      <div id="arrowDown">
        <i class="bi bi-chevron-compact-down" />
      </div>
    </div>
  </header>
  <nav class="glassEffect">
    <div id="navBar" class="light">
      <div @click="toggleNav" class="navIcons">
        <i v-if="!openNav" class="bi bi-list" />
        <i v-else class="bi bi-x" />
      </div>
    </div>
    <ul class="light navList" :class="{ toggleNav: openNav }">
      <li class="navListItems"><RouterLink to="/">Home</RouterLink></li>
      <li class="navListItems">
        <RouterLink to="/houseplans">Plans</RouterLink>
      </li>
      <li class="navListItems">
        <RouterLink to="/contact">Contact</RouterLink>
      </li>
      <li class="navListItems">Login</li>
      <li class="navListItems">
        <RouterLink to="/cart"><i class="bi bi-cart2" /></RouterLink>
      </li>
    </ul>
  </nav>
  <main>
    <RouterView />
  </main>
  <footer class="lightbrown light">
    <div id="footerAdress">
      <p>Address:</p>
      <p>123 Main Street</p>
      <p>Anytown</p>
      <p>California 12345</p>
    </div>
    <div id="footerContact">
      <p>Contact:</p>
      <p>Phone Number: +1 (555) 123-4567</p>
      <p>Email: info@villora.com</p>
    </div>
    <div id="footerSocial">
      <p>Social media:</p>
      <i class="bi bi-instagram" />
      <i class="bi bi-facebook" />
    </div>
  </footer>
</template>

<style>
  /* header mobile version  */
  header {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #headerImage {
    width: 100%;
  }
  /* text above image  */
  #headerText {
    position: absolute;
    font-family: 'Lato', sans-serif;
    font-weight: 150;
    font-size: 70px;
    text-align: center;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }
  /* make scroll down container invisible  */
  #scrollDownContainer {
    display: none;
  }

  /* navbar mobile version  */
  nav {
    z-index: 999;
    width: 100%;
    position: sticky;
    top: 0;
    font-family: 'Inter', sans-serif;
    font-size: 25px;
    text-align: center;
    text-transform: uppercase;
    height: 50px;
  }
  /* hamburger meny and X (open and closed)  */
  .navIcons {
    font-size: 40px;
    display: flex;
  }
  /* make it invisble when closed  */
  .navList {
    background: rgba(97, 86, 72, 0.5);
    backdrop-filter: blur(15px);
    height: 0;
    margin: 0;
    padding: 0;
    overflow: hidden;
    justify-content: center;
  }
  /* show when open  */
  .navList.toggleNav {
    height: 100vh;
  }

  .navListItems {
    margin: 0;
    overflow: hidden;
    margin-bottom: 80px;
    margin-top: 20px;
  }

  .navListItems a {
    color: #fafafa;
    text-decoration: none;
  }
  .navListItems a:hover {
    font-size: 26px;
  }
  .navListItems.toggleNav {
    height: 100px;
  }

  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  footer div {
    margin-left: 1%;
    margin-right: 1%;
    padding: 0;
  }
  footer p {
    font-size: 14px;
  }
  #footerSocial i {
    font-size: 30px;
    margin: 6%;
  }
  /* tablet version  */
  @media screen and (min-width: 810px) {
    header {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #headerImage {
      width: 100%;
      height: initial;
    }
    #headerText {
      font-size: 150px;
    }
    footer div {
      margin-left: 5%;
      margin-right: 5%;
    }

    footer p {
      font-size: 16px;
    }
    #footerSocial i {
      font-size: 38px;
      margin: 6%;
    }
  }

  /* computer version  */
  @media screen and (min-width: 1000px) {
    #headerImage {
      max-width: 100%;
      height: 100vh;
    }
    #headerText {
      font-size: 190px;
    }

    /* make scroll down container visible  */
    #scrollDownContainer {
      display: initial;
      text-align: center;
      position: absolute;
      align-self: end;
    }
    #scrollDownContainer p {
      font-size: 25px;
      letter-spacing: 0.05em;
      margin-bottom: -15px;
    }
    /* setting animation for bounce effect  */
    #arrowDown {
      font-size: 60px;
      animation-name: bounce;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
    /* bounce effekt  */
    @keyframes bounce {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(-7px);
      }
    }
    /* make the hamburger and X icon invisible  */
    .navIcons {
      display: none;
    }
    nav {
      height: 70px;
      display: flex;
      align-items: center;
    }
    .navList {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      height: initial;
      background-color: initial;
    }
    .navListItems {
      margin: 0;
    }
    footer div {
      margin-left: 5%;
      margin-right: 5%;
    }

    footer p {
      font-size: 18px;
    }
    #footerSocial i {
      font-size: 40px;
      margin: 6%;
    }
  }
</style>
