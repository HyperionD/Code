<template>
    <div class="now">
        <div class="img">
            <img v-bind:src="now_img"/>
        </div>
        <div class="text">
            <p>{{ city }} {{ now_text }}</p>
            <p>{{ now_tmp }} &deg;C</p>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {}
        },
        props: ["now_tmp", "now_text", "now_img", "city"]
    }
</script>

<style>
    .now {
        display: flex;
    }
</style>