const path = require('path')

const developmentConfig = {
    mode: 'development'
}

const productionConfig = {
    mode: 'production',
    optimization: { minimize: true },
}

const config = process.env.NODE_ENV === 'production'
    ? productionConfig
    : developmentConfig

module.exports = {
    ...config,
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
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}
