<template>
    <div>
        <p v-on:click="show_table"> {{ database }}</p>
        <div v-if="show">
            <p v-for="table in tables">{{ table }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                database: "base",
                tables: ["user", "role"],
                show: false
            }
        },
        methods: {
            show_table: function () {
                this.show = true;
            }
        }
    }
</script>

<style>

</style>