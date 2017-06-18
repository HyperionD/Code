<template>
    <div class="chat">
        <chat-frame></chat-frame>
        <chat-list></chat-list>
    </div>
</template>

<script>
    import chatFrame from "./chatFrame.vue";
    import chatList from "./chatList.vue";

    export default {
        data: function () {
            return {}
        },
        components: { chatFrame, chatList }
    }
</script>

<style>
    .chat {
        display: flex;
        align-content: stretch;
    }
</style>