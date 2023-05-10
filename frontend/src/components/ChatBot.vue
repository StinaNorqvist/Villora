<template>
    <div class="chatbot-container">
      <div id="chatbot" :class="{ 'chatbot-container-hidden': isChatbotHidden }">
        <div id="header">Chatbot</div>
        <div id="conversation" ref="chatMessages">
          <div class="message" v-for="message in messages" :key="message.id" :class="message.type">
            <img v-if="message.type === 'chatbot-message'" class="profile-image" src="/assets/images/robot.png" alt="Chatbot Profile" />
            <p class="chatbot-text">{{ message.text }}</p>
          </div>
        </div>
        <form id="input-form" @submit.prevent="sendMessage">
          <div class="input-container">
            <input id="input-field" v-model="userInput" type="text" placeholder="Type your message here" />
            <button id="submit-button" type="submit">
              <img class="send-icon" src="/assets/images/send-message.png" alt="" />
            </button>
          </div>
        </form>
      </div>
      <div class="chatbot-icon" @click="toggleChatbot">
        <img src="/assets/images/chatbot.png" alt="Chatbot Icon" />
      </div>
    </div>
  </template>
  
  

<script>
import { queryBerriAPI } from "../chatapi.js";

export default {
  name: "ChatBot",
  data() {
    return {
      isChatbotHidden: true,
      userInput: "",
      messages: [],
    };
  },
  methods: {
    async sendMessage() {
      const userQuery = this.userInput.trim();
      if (userQuery) {
        this.addMessage(userQuery, "user-message");
        this.userInput = "";

        const systemResponse = await queryBerriAPI(userQuery);
        this.addMessage(systemResponse, "chatbot-message");
      }
    },
    addMessage(text, type) {
      const id = Date.now().toString();
      const message = { id, text, type };
      this.messages.push(message);
      this.scrollToBottom();
    },
    scrollToBottom() {
      this.$nextTick(() => {
        const chatMessages = this.$refs.chatMessages;
        chatMessages.scrollTop = chatMessages.scrollHeight;
      });
    },
    toggleChatbot() {
      this.isChatbotHidden = !this.isChatbotHidden;
    },
  },
};
</script>

<style>
body {
  display: flex;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
}
.message.chatbot-message {
  display: flex;
  
}

.message.user-message {
  display: flex;
  
  justify-content: flex-end;
}

.profile-image {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
  align-self: center;
}


.chatbot-icon {
  position: fixed;
  bottom: -90px;
  right: 20px;
  z-index: 100;
  cursor: pointer;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.chatbot-icon img {
  max-width: 80px;
  max-height: 80px;
  border-radius: 50%;
}

.chatbot-container {
  position: fixed;
  bottom: 100px;
  right: 20px;
  width: 500px;
  z-index: 99;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.chatbot-container-hidden {
  display: none;
}


#header {
  background-color: rgba(255, 255, 255, 0.8);
  color: #333;
  padding: 10px;
  font-size: 1.1em;
  font-weight: bold;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  backdrop-filter: blur(10px);
}

#conversation {
  height: 400px;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.chatbot-message {
  background-color: rgb(244, 244, 245);
  color: #333;
  border-radius: 10px;
  padding: 10px;
  font-size: 1em;
  backdrop-filter: blur(5px);
}

.user-message {
  background-color: rgba(0, 115, 230, 0.7);
  color: #fff;
  border-radius: 10px;
  padding: 5px;
  font-size: 1rem;
  text-align: center;
  backdrop-filter: blur(5px);
}

.input-container {
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(238, 241, 245, 0.5);
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
}
#input-field {
  flex: 1;
  height: 60px;
  border: none;
  outline: none;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 14px;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  margin: 10px;
}

#submit-button {
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
}

.send-icon {
  max-width: 30px;
  max-height: 30px;
}

.message {
  max-width: 70%;
}

.user-message {
  align-self: flex-end;
  margin-bottom: 2px;
}

.chatbot-message {
  align-self: flex-start;
  margin-top: 2px;
}
</style>
