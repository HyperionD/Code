const path = require('path');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            test: path.resolve(__dirname, "app/test.js")
        }
    }
};