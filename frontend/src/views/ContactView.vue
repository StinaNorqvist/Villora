<template>
  <div class="contact-container">
    <h1 class="heading">Kontakt</h1>

    <div class="contact-list">
      <div class="contact-card" v-for="contact in topContacts" :key="contact._id">
        <div class="contact-info">
          <h2 class="contact-name">{{ contact.name }}</h2>
          <p class="contact-description">{{ contact.description }}</p>
        </div>
        <div class="contact-links">
          <a :href="contact.github" class="contact-link">GitHub</a>
          <a :href="contact.linkedin" class="contact-link">LinkedIn</a>
        </div>
      </div>
    </div>

    <div class="contact-list">
      <div class="contact-card" v-for="contact in bottomContacts" :key="contact._id">
        <div class="contact-info">
          <h2 class="contact-name">{{ contact.name }}</h2>
          <p class="contact-description">{{ contact.description }}</p>
        </div>
        <div class="contact-links">
          <a :href="contact.github" class="contact-link">GitHub</a>
          <a :href="contact.linkedin" class="contact-link">LinkedIn</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.contact-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.heading {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 40px;
}

.contact-list {
  display: flex;
  justify-content: center;
}

.contact-card {
  background-color: #f9f9f9;
  border-radius: 4px;
  padding: 20px;
  margin: 10px;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.contact-card:hover {
  transform: translateY(-5px);
}

.contact-info {
  margin-bottom: 20px;
}

.contact-name {
  font-size: 20px;
  margin-bottom: 10px;
}

.contact-description {
  font-size: 14px;
  color: #777;
  margin-bottom: 15px;
}

.contact-links {
  display: flex;
  justify-content: center;
}

.contact-link {
  display: inline-block;
  margin: 5px;
  padding: 8px 16px;
  font-size: 14px;
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  border-radius: 4px;
  transition: background-color 0.2s ease-in-out;
}

.contact-link:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  .contact-list {
    flex-wrap: wrap;
  }

  .contact-card {
    width: 100%;
  }
}
</style>

<script>
import fetch from '../../../backend/fetch'

export default {
  data() {
    return {
      topContacts: [],
      bottomContacts: []
    }
  },
  async created() {
    const contacts = await fetch.contact();
    this.topContacts = contacts.slice(0, 3);
    this.bottomContacts = contacts.slice(3);
  }
}
</script>
