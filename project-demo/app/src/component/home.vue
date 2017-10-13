<template>
    <div class="home">
        <p>Home Page Hello</p>
        <p>
            <router-link to="/foo">Click to Foo Page</router-link>
            <router-link to="/bar">Click to Bar Page</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {};
        }
    };
</script>

<style>

</style>
