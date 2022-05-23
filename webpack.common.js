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
};

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

// -------------------------------

// -------------------------------
// Plugins config

const plugins = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        showErrors: true,
        template: "./src/index.html",
        chunks: ['app'],
        exclude: ['home']
    }),
    new HtmlWebpackPlugin({
        filename: 'home.html',
        showErrors: true,
        template: './src/views/home.html',
        chunks: ['home'],
        excludeChunks: ['app']
    }),
    new MiniCssExtractPlugin({
        filename: "[name][contenthash].bundle.css",
    }),
];

// -------------------------------

const rules = [rulesForSassStyles, rulesForAssets];

module.exports = {
    entry: {
        home: './src/js/Home.js',
        app: './src/js/App.js',
    },
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