const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const config = (env, options) => {
    // scss loader based on production or development mode
    const scssLoader = () => {
        if (options.mode === 'production') {
            return {
                loader: MiniCssExtractPlugin.loader
            };
        } else {
            return {
                loader: 'style-loader'
            };
        }
    };

    // Load the webpack plugins based on production or development mode
    const plugins = () => {
        if (options.mode === 'production') {
            return [
                new MiniCssExtractPlugin({
                    filename: 'styles/[name].min.css'
                })
            ];
        } else {
            return [
                new BrowserSyncPlugin({
                    host: 'localhost',
                    port: 8080,
                    injectChanges: true,
                    watch: true,
                    reloadOnRestart: true,
                    files: ['./**/*.html', './**/*.php'],
                    watchEvents: ['change', 'add', 'unlink', 'addDir', 'unlinkDir'],
                    proxy: 'http://localhost:63342/developer-test-project/index.html?_ijt=vu3a0nj4d3efkoeidsal9dif7a'
                })
            ];
        }
    };

    return {
        entry: path.resolve(__dirname, 'src/index.tsx'),
        output: {
            path: path.resolve(__dirname, 'build'),
            publicPath: '/',
            filename: 'index.js'
        },
        mode: options.mode,
        devtool: options.mode === 'development' && 'inline-source-map',
        watch: options.mode === 'development' && true,
        watchOptions: {
            ignored: ['node_modules/**']
        },
        resolve: {
            extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
        },
        externals: {
            react: 'React',
            'react-dom': 'ReactDOM'
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    '@babel/preset-env',
                                    '@babel/preset-react',
                                    '@babel/preset-typescript'
                                ]
                            }
                        }
                    ]
                },
                {
                    test: /\.(scss|css)$/,
                    use: [
                        scssLoader(),
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                url: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [['postcss-preset-env']]
                                }
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                },
                {
                    test: /\.svg/,
                    use: {
                        loader: 'svg-url-loader',
                        options: {
                            // make all svg images to work in IE
                            iesafe: true
                        }
                    }
                }
            ]
        },
        plugins: plugins()
    };
};

module.exports = config;
