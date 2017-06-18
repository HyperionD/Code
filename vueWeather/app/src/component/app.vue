<template>
    <div class="weather">
        <city-info></city-info>
        <now-weather v-bind:now_tmp="now_tmp" v-bind:now_text="now_text" v-bind:now_img="now_img" v-bind:city="city"></now-weather>
    </div>
</template>

<script>
    import cityInfo from './cityInfo.vue';
    import nowWeather from "./nowWeather.vue";
    import bus from "./eventBus";
    import { ajax } from "./ajax";
    export default {
        el: "#app",
        data: function () {
            return {
                city: "",
                now_tmp: "",
                now_txt: "",
                now_img: ""
            }
        },
        components: {
            cityInfo,
            nowWeather
        },
        mounted: function () {
            const self = this;
            bus.$on("sendCity", function (city) {
                self.city = city;
                self.getWeather();
            });
        },
        methods: {
            getWeather: function () {
                const self = this;
                const heweather_key = '4fedf88564564ae8aecd759aa79bfee9';
                const weather_url = 'https://free-api.heweather.com/v5/weather?city=' + self.city + '&key=' + heweather_key;
                ajax({ url: weather_url })
                    .then(function (data) {
                        const weather = data.HeWeather5["0"];
                        if (weather.status === "ok") {
                            console.log(data);
                            self.now_tmp = weather.now.tmp;
                            self.now_text = weather.now.cond.txt;
                            self.now_img = `./img/${weather.now.cond.code}.png`;
                        } else {
                            self.city = weather.status;
                            self.now_tmp = "";
                            self.now_text = "";
                            self.now_img = "./img/999.png";
                        }
                    });
            }
        }
    }
</script>

<style>
    .weather {
        display: flex;
        flex-direction: column;
    }
</style>