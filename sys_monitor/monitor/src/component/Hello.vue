<template>
    <p>{{ greeting }} World!</p>
</template>

<script>
    export default {
        data: function () {
            return {
                greeting: "hello"
            }
        }
    }
</script>

<style>
    p {
        color: blue;
    }
</style>