<template>
    <div class="dbInfo">
        <select v-model="selected">
            <option>sqlite</option>
            <option>mysql</option>
        </select>
        <div v-if="selected === 'sqlite'" class="sqlite">
            <p>数据库目录 {{ sqlite_path }}</p>
        </div>
        <div v-else-if="selected === 'mysql'" class="mysql">
            <input v-model="username" placeholder="Username" />
            <input v-model="password" placeholder="Password" />
            <input v-model="host"  placeholder="Host" />
            <input v-model="port" placeholder="Port" />
        </div>
        <button v-on:click="sqlite_conn">Connect</button>
    </div>
</template>

<script>
    import bus from "../../envetBus";
    export default {
        data: function () {
            return {
                selected: "sqlite",
                username: "",
                password: "",
                host: "",
                port: "3306",
                sqlite_path: "../../service/db/backend/db"
            }
        },
        methods: {
            sqlite_conn: function () {
                bus.$emit("send_sqlite_path", this.sqlite_path);
            }
        }
    }
</script>

<style lang="less">
    @base_color: #337ab7;

    .dbInfo {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 10px 10px;

        select {
            display: flex;
            border: none;
            outline: none;
        }

        div {
            margin-left: 20px;
            input {
                border: none;
                border-bottom: solid 1px @base_color;
                outline: none;
                margin:auto 10px;
            }
        }

        .sqlite {
            display: flex;

            p {
                margin: 0 auto;
            }
        }

        .mysql {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
        }
    }
</style>