<template>
    <div class="topBar">
        <div class="home">
            <router-link to="/">Backend</router-link>
        </div>
        <div class="nav">
             <router-link to="/db">Database</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {}
        }
    }
</script>

<style lang="less">
    @base_color: #337ab7;

    .topBar {
        display: flex;
        align-items: flex-end;
        background-color: @base_color;
        box-shadow: 0px 1px 0px #cccccc;

        a {
            text-decoration: none;
            color: #ffffff;
        }

        .home {
            margin-left: 10px;
            font-size: 30px;
            font-weight: bold;
        }

        .nav {
            margin-left: 20px;
            font-size: large;
        }
    }
</style>