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
        houses: null,
        styles: null,
        users: null,
        materials: null
      }
    }
  }
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Heem</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">Om</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact">Kontakt</RouterLink>
      </li>
    </ul>
  </nav>
  <HelloWorld msg="Hello World!" />
  <CitiesList />
  <CounterButton />
  <main>
    <RouterView />
  </main>
</template>
