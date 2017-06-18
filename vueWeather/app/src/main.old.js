import vue from "../../node_modules/vue/dist/vue";
import { ajax } from "./component/ajax";

const app = new vue({
    el: "#app",
    data: {
        city: "",
        weather: {},
        now_tmp: {},
        now_img_src: ""
    },
    mounted: function () {
        this.initData();
    },
    methods: {
        initData: function () {
            self = this;
            const ip_url = 'http://ip-api.com/json';
            const heweather_key = '4fedf88564564ae8aecd759aa79bfee9';
            ajax({ url: ip_url }).then(function bind_city_data(data) {
                    self.city = data.city;
                    const weather_url = 'https://free-api.heweather.com/v5/weather?city=' + self.city + '&key=' + heweather_key;
                    return ajax({ url: weather_url })
                })
                .then(function bind_weather_data(data) {
                    const weather = data.HeWeather5["0"];
                    if (weather.status === "ok") {
                        self.now_tmp = weather.now;
                        self.now_img_src = `./img/${weather.now.cond.code}.png`;
                        console.log(self.now_img_src);
                        console.log(weather);
                    } else {
                        self.city = weather.status;
                    }
                })
        },
        getWeather: function () {
            self = this;
            const heweather_key = '4fedf88564564ae8aecd759aa79bfee9';
            const weather_url = 'https://free-api.heweather.com/v5/weather?city=' + self.city + '&key=' + heweather_key;
            ajax({ url: weather_url })
                .then(function bind_weather_data(data) {
                    const weather = data.HeWeather5["0"];
                    if (weather.status === "ok") {
                        self.now_tmp = weather.now;
                        self.now_img_src = `./img/${weather.now.cond.code}.png`;
                        console.log(self.now_img_src);
                        console.log(data.HeWeather5["0"]);
                    } else {
                        self.city = weather.status;
                    }
                });
        },
        setCity: function () {
            self = this;
            if (self.$refs.city.value) {
                self.city = self.$refs.city.value;
            } else {
                self.city = self.initData();
            }
        },
        changeCity: function () {
            this.setCity();
            this.getWeather();
        }
    }
});

