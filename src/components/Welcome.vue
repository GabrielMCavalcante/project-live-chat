<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name:</label>
          <input type="text" name="name" v-model="name" @keyup="toggleFeedback($event)">
          <p class="teal darken-4 white-text feedback" v-if="feedback">{{feedback}}</p>
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    toggleFeedback(e) { this.feedback = e.key !== 'Enter' ? null : this.feedback; },
    enterChat() {
      if(this.name) 
        this.$router.push({name: 'Chat', params: { name: this.name }});
      else 
        this.feedback = 'Access denied: You must enter a name to join the live chat!';
    }
  }
}
</script>

<style>
  .welcome {
    max-width: 400px;
    margin-top: 100px;
  }

  .welcome h2 {
    font-size: 3em;
  }

  .welcome button {
    margin: 30px auto;
  }

  .welcome p.feedback {
    margin: 10px auto;
    padding: 4px;
  }
</style>
