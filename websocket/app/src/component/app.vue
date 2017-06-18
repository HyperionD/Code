<template>
    <div>
        <chat></chat>
    </div>
</template>

<script>
    import chat from "./chat.vue";

    export default {
        el: "#app",
        data: function () {
            return {}
        },
        components: { chat }
    }
</script>

<style>

</style>