<template>
  <h1>Kontakt</h1>
  <p>test</p>

  <div>
    <h1>Contact List</h1>
    <ul>
      <li v-for="contact in contacts" :key="contact._id">
        <h2>{{ contact.name }}</h2>
        <p>{{ contact.description }}</p>
        <a :href="contact.github">{{ contact.github }}</a>
        <a :href="contact.linkedin">{{ contact.linkedin }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import fetch from '../../../backend/fetch'

  export default {
    data() {
      return {
        contacts: []
      }
    },
    async created() {
      this.contact = await fetch.contact()
      console.log(this.contact, 'testar contact')
    }
  }
</script>
