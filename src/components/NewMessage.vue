<template>
    <div class='new-message'>
        <form @submit.prevent="addMessage">
            <label for="new-message">New Message (enter to send)</label>
            <input name="new-message" v-model="message" @keyup="toggleFeedback($event)">
        </form>
        <p class="center teal darken-4 white-text feedback" 
            v-if="feedback">{{feedback}}
        </p>
    </div>
</template>

<script>
import db from '@/firebase/init.js';
export default {
    name: 'NewMessage',
    props: ['name'],
    data() {
        return {
            message: null,
            feedback: null
        }
    },
    methods: {
        toggleFeedback(e) { this.feedback = e.key !== 'Enter' ? null : this.feedback; },
        addMessage() {
            if(this.message) {
                this.feedback = null;
                db.collection('messages').add({
                    content: this.message,
                    name: this.name,
                    timestamp: Date.now() 
                }).then(()=>this.message = null)
                .catch(err=>{
                    this.feedback = `An error ocurred while sending 
                    the message (more info on browser's console log)`;
                    setTimeout(()=>this.feedback=null, 3000);
                    console.log('There has been an error while sending the message: ', err);
                });
            }
        }
    }
}
</script>

<style>
    .new-message p.feedback {
        margin: 10px auto;
        padding: 4px;
    }
</style>