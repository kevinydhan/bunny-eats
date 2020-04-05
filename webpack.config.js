const path = require('path')

const mode =
    process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
    mode,
    entry: './src',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
}
