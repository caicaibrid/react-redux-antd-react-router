'use strict';

var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
var InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
var WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
var getClientEnvironment = require('./env');
var paths = require('./paths');

var publicPath = '/';

var publicUrl = '';

var env = getClientEnvironment(publicUrl);

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [require.resolve('webpack-dev-server/client') + '?/',
  //require.resolve('webpack/hot/dev-server'),
  //require.resolve('react-dev-utils/webpackHotDevClient'),
  // We ship a few polyfills by default:
  require.resolve('./polyfills'), paths.appIndexJs],
  output: {
    path: paths.appBuild,
    pathinfo: true,
    filename: 'static/js/bundle.js',
    publicPath: publicPath
  },
  resolve: {
    // This allows you to set a fallback for where Webpack should look for modules.
    // We read `NODE_PATH` environment variable in `paths.js` and pass paths here.
    // We use `fallback` instead of `root` because we want `node_modules` to "win"
    // if there any conflicts. This matches Node resolution mechanism.
    // https://github.com/facebookincubator/create-react-app/issues/253
    fallback: paths.nodePaths,
    // These are the reasonable defaults supported by the Node ecosystem.
    // We also include JSX as a common component filename extension to support
    // some tools, although we do not recommend using it, see:
    // https://github.com/facebookincubator/create-react-app/issues/290
    extensions: ['.js', '.json', '.jsx', ''],
    alias: {
      // Support React Native Web
      // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
      'react-native': 'react-native-web'
    }
  },

  module: {
    // First, run the linter.
    // It's important to do this before Babel processes the JS.
    preLoaders: [{
      test: /\.(js|jsx)$/,
      loader: 'eslint',
      include: paths.appSrc
    }],
    loaders: [
    // ** ADDING/UPDATING LOADERS **
    // The "url" loader handles all assets unless explicitly excluded.
    // The `exclude` list *must* be updated with every change to loader extensions.
    // When adding a new loader, you must add its `test`
    // as a new entry in the `exclude` list for "url" loader.

    // "url" loader embeds assets smaller than specified size as data URLs to avoid requests.
    // Otherwise, it acts like the "file" loader.
    {
      exclude: [/\.html$/,
      // We have to write /\.(js|jsx)(\?.*)?$/ rather than just /\.(js|jsx)$/
      // because you might change the hot reloading server from the custom one
      // to Webpack's built-in webpack-dev-server/client?/, which would not
      // get properly excluded by /\.(js|jsx)$/ because of the query string.
      // Webpack 2 fixes this, but for now we include this hack.
      // https://github.com/facebookincubator/create-react-app/issues/1713
      /\.(js|jsx)(\?.*)?$/, /\.css$/, /\.json$/, /\.svg$/, /\.scss$/],
      loader: 'url',
      query: {
        limit: 10000,
        name: 'static/media/[name].[hash:8].[ext]'
      }
    },
    // Process JS with Babel.
    {
      test: /\.(js|jsx)$/,
      include: paths.appSrc,
      loader: 'babel',
      query: {

        // This is a feature of `babel-loader` for webpack (not Babel itself).
        // It enables caching results in ./node_modules/.cache/babel-loader/
        // directory for faster rebuilds.
        cacheDirectory: true
      }
    },
    // "postcss" loader applies autoprefixer to our CSS.
    // "css" loader resolves paths in CSS and adds assets as dependencies.
    // "style" loader turns CSS into JS modules that inject <style> tags.
    // In production, we use a plugin to extract that CSS to a file, but
    // in development "style" loader enables hot editing of CSS.
    {
      test: /\.css$/,
      loader: 'style!css?importLoaders=1!postcss'
    },
    // JSON is not enabled by default in Webpack but both Node and Browserify
    // allow it implicitly so we also enable it.
    {
      test: /\.json$/,
      loader: 'json'
    },
    // "file" loader for scss
    {
      test: /\.scss$/,
      loader: 'style!css!postcss!sass?outputStyle=expanded'

    },
    // "file" loader for svg
    {
      test: /\.svg$/,
      loader: 'file',
      query: {
        name: 'static/media/[name].[hash:8].[ext]'
      }
    }]
  },

  // We use PostCSS for autoprefixing only.
  postcss: function postcss() {
    return [autoprefixer({
      browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
    })];
  },
  plugins: [
  // Makes some environment variables available in index.html.
  // The public URL is available as %PUBLIC_URL% in index.html, e.g.:
  // <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
  // In development, this will be an empty string.
  new InterpolateHtmlPlugin(env.raw),
  // Generates an `index.html` file with the <script> injected.
  new HtmlWebpackPlugin({
    inject: true,
    template: paths.appHtml
  }),
  // Makes some environment variables available to the JS code, for example:
  // if (process.env.NODE_ENV === 'development') { ... }. See `./env.js`.
  new webpack.DefinePlugin(env.stringified),
  // This is necessary to emit hot updates (currently CSS only):
  new webpack.HotModuleReplacementPlugin(),
  // Watcher doesn't work well if you mistype casing in a path so we use
  // a plugin that prints an error when you attempt to do this.
  // See https://github.com/facebookincubator/create-react-app/issues/240
  new CaseSensitivePathsPlugin(),
  // If you require a missing module and then `npm install` it, you still have
  // to restart the development server for Webpack to discover it. This plugin
  // makes the discovery automatic so you don't have to restart.
  // See https://github.com/facebookincubator/create-react-app/issues/186
  new WatchMissingNodeModulesPlugin(paths.appNodeModules)],
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

//# sourceMappingURL=webpack.config.dev-compiled.js.map