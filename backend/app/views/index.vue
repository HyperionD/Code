<template>
    <div>
        <top-bar></top-bar>

        <router-view></router-view>
    </div>
</template>

<script>
    import topBar from "./layout/topBar.vue";
    export default {
        data: function () {
            return {}
        },
        components: {topBar}
    }
</script>

<style lang="less">

    body {
        margin: 0 0;
        padding: 0 0;
    }
</style>