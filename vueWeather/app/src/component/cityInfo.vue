<template>
    <div>
        <input placeholder="更改城市" ref="city" v-on:keyup.enter="setCity"/>
    </div>
</template>

<script>
    import { ajax } from "./ajax";
    import bus from "./eventBus";
    export default {
        data: function () {
            return {
                city: "....."
            };
        },
        mounted: function () {
            this.initCity();
        },
        methods: {
            initCity: function () {
                const self = this;
                const ip_url = 'http://ip-api.com/json';
                ajax({ url: ip_url })
                    .then(function (data) {
                        self.city = data.city;
                        bus.$emit("sendCity", self.city);
                    });
            },
            setCity: function () {
                if (this.$refs.city.value !== "") {
                    this.city = this.$refs.city.value;
                    bus.$emit("sendCity", this.city);
                } else {
                    this.initCity();
                }
            }
        }
    }
</script>

<style>
    input {
        border: 0 none;
        border-bottom: solid 1px #12aaeb;
        outline: none;
    }
</style>