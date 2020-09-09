const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../back/src/static'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            // jsx syntax
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            // sass
            {
                test: /\.s(a|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            // svg icons
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            // images
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                },
            },
        ],
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
}
