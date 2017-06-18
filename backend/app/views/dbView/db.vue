<template>
    <div class="db">
        <db-info></db-info>
        <div class="list_window">
            <db-list></db-list>
        </div>
    </div>
</template>

<script>
    import dbList from "./dbList.vue";
    import dbInfo from "./dbInfo.vue";
    import bus from "../../envetBus";
    import axios from "../../../node_modules/axios/dist/axios";
    export default {
        data: function () {
            return {}
        },
        components: {dbList, dbInfo},
        mounted: function () {
            this.wathc_sqlite_conn();
            this.test();
        },
        methods: {
            wathc_sqlite_conn: function () {
                bus.$on("send_sqlite_path", function (path) {
                    alert(path);
                })
            },
            test: function () {
                axios.get("http://ip-api.com/json").then(function (data) {
                    console.log(data);
                })
            }
        }
    }
</script>

<style lang="less">
    .db {
        display: flex;
        flex-direction: column;
    }
</style>