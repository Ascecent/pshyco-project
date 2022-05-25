const path = require("path")

// Plugins import
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')

// -------------------------------
// Individual rules config

const rulesForAssets = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    exclude: "/node_modules",
    type: "asset/resource",
}

const rulesForSassStyles = {
    test: /\.(scss)$/,
    use: [{
            loader: MiniCssExtractPlugin.loader,
        },
        {
            loader: 'css-loader',
            options: {
                url: false,
            },
        },
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    plugins: [
                        ['autoprefixer'],
                    ],
                },
            },
        },
        {
            loader: 'sass-loader',
            options: {
                implementation: require('sass'),
            },
        }
    ]
};

const rulesForCssStyles = {
    test: /\.(css)$/,
    use: [{
            loader: MiniCssExtractPlugin.loader,
        },
        {
            loader: 'css-loader',
            options: {
                url: false,
            },
        },
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    plugins: [
                        ['autoprefixer'],
                    ],
                },
            }
        }
    ]
}

// -------------------------------

// -------------------------------
// Plugins config

const plugins = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        showErrors: true,
        template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
        filename: 'psychology.html',
        showErrors: true,
        template: "./src/views/psychology.html",
    }),
    new HtmlWebpackPlugin({
        filename: 'schools.html',
        showErrors: true,
        template: "./src/views/schools.html",
    }),
    new HtmlWebpackPlugin({
        filename: 'history.html',
        showErrors: true,
        template: "./src/views/history.html",
    }),
    new HtmlWebpackPlugin({
        filename: 'interviews.html',
        showErrors: true,
        template: "./src/views/interviews.html",
    }),
    new MiniCssExtractPlugin({
        filename: "[name][contenthash].bundle.css",
    }),
];

// -------------------------------

const rules = [rulesForSassStyles, rulesForAssets, rulesForCssStyles];

module.exports = {
    entry: './src/js/App.js',
    output: {
        filename: "[name][contenthash].bundle.js",
        path: path.resolve(__dirname, "build"),
        clean: true,
    },

    module: {
        rules
    },

    resolve: {
        alias: {
            Images: path.resolve(__dirname, "src/assets"),
            Styles: path.resolve(__dirname, "src/scss/app.scss"),
        },
    },

    plugins: plugins,
};