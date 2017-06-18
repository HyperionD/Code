import config from "./config.js";

export default {
    entry: config.entry,
    output: {
        filename: config.dist_js_filename,
        path: config.dist_dir
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
};
