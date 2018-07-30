//Craga los modulos
module.exports = {
    entry: "./src/app.js", //carga el js
    output: {
        path: __dirname + "/public",
        filename: "bundle.js" // pone el codigo del app.js dentro de bundle.js
    },
    devServer: {
        contentBase: __dirname + "/public", //especifica folder para cargar archivos en el servidor
        port: 3000 // Cargue el servidor en este puerto por default siempre es localhost:8080
    }, 
    module: {
        rules: [
            {
                loader: "babel-loader",
                test: /\.js/
            },
            {
                test: /\.s?css/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)/i,
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                        options: {
                            gifsicle: {
                                interlanced: false
                            },
                            optipng: {
                                optimizationLevel: 7
                            },
                            pngquant: {
                                quality: "65-90",
                                speed: 4
                            },
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            //este lo pongo por si algo
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            }
        ]
    }
};