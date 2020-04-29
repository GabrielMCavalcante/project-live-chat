<template>
    <div class="chat container">
        <h2 class="center teal-text">Live Chat</h2>
        <div class="card">
            <div class="card-content">
                <ul class="messages" v-chat-scroll>
                    <li :key="message.id" v-for="message in messages">
                        <span class="teal-text">{{message.name}}</span>
                        <span class="grey-text text-darken-3">{{message.content}}</span>
                        <span class="grey-text time">{{message.timestamp}}</span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <NewMessage :name="name"></NewMessage>
            </div>
        </div>
    </div>
</template>

<script>
import NewMessage from './NewMessage.vue';
import db from '@/firebase/init.js';
import moment from 'moment';
export default {
    name: 'Chat',
    components: { NewMessage },
    data() { return { messages: new Array() } },
    props: ['name'],
    created() {
        db.collection('messages').orderBy('timestamp').onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change=>{
                if(change.type === 'added')
                    this.messages.push({
                        content: change.doc.data().content,
                        name: change.doc.data().name,
                        timestamp: moment(change.doc.data().timestamp).format('lll')
                    });
            });
        })
    }
}
</script>

<style>
    .chat h2 {
        font-size: 2.6em;
        margin-bottom: 40px;
    }
    .chat span {
        font-size: 1.4em;
    }
    .chat .time {
        display: block;
        font-size: .9em;
    }
    .messages {
        max-height: 300px;
        overflow: auto;
    }
    .messages::-webkit-scrollbar {
        width: 3px;
    }
    .messages::-webkit-scrollbar-track {
        background: #ddd;
    }
    .messages::-webkit-scrollbar-thumb {
        background: #aaa;
    }
</style>