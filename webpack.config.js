const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const glob = require('glob-all');
const PurgecssPlugin = require('purgecss-webpack-plugin');

const PATHS = {
    scripts: path.join(__dirname, 'src/scripts'),
    reactScripts: path.join(__dirname, 'lib'),
    html: __dirname
};

/**
 * Webpack configuration function
 * @param {any} env
 * @param {any} options
 * @returns {any}
 */
const config = (env, options) => {
    /**
     * Scss loader for webpack
     * @returns {{loader: string}}
     */
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

    /**
     * Required plugins for webpack
     * @returns {[MiniCssExtractPlugin]|[BrowserSyncPlugin]}
     */
    const plugins = () => {
        if (options.mode === 'production') {
            return [
                new PurgecssPlugin({
                    paths: glob.sync(
                        [`${PATHS.scripts}/**/*`, `${PATHS.reactScripts}/**/*`, `${PATHS.html}/**/*.html`],
                        { nodir: true }
                    )
                }),
                new MiniCssExtractPlugin({
                    filename: 'styles/[name].min.css'
                })
            ];
        } else {
            return [
                new BrowserSyncPlugin({
                    host: 'localhost',
                    port: 4040,
                    injectChanges: true,
                    watch: true,
                    reloadDelay: 300,
                    reloadOnRestart: true,
                    files: ['./**/*.html', "'./**/*.scss'", "'./**/*.css'"],
                    watchEvents: ['change', 'add', 'unlink', 'addDir', 'unlinkDir']
                    // Proxy: 'http://localhost:63342/developer-test-project/index.html?_ijt=vu3a0nj4d3efkoeidsal9dif7a'
                })
            ];
        }
    };

    return {
        mode: options.mode,
        entry: {
            main: {
                import: path.resolve(__dirname, 'src/scripts/index.ts'),
                filename: 'scripts/[name].min.js'
            }
        },
        output: {
            path: path.resolve(__dirname, 'build/')
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env']
                            }
                        }
                    ]
                },
                {
                    test: /.s?css$/,
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
                }
            ]
        },
        plugins: plugins(),
        devtool: options.mode !== 'production' && 'source-map',
        watch: options.mode === 'development' && true,
        watchOptions: {
            ignored: ['node_modules/**']
        }
    };
};

module.exports = config;
