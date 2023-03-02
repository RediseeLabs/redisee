const path = require('path');
const HtmLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, './build'),
    },
    port: 8080,
    // proxy: {
    //   '/': 'http://localhost:3000',
    // },
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              [
                '@babel/preset-env',
                {
                  targets: {
                    node: 'current',
                  },
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.(png|jpg)/,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|mp4)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmLWebpackPlugin({
      template: path.join(__dirname, 'client/index.html'),
    }),
  ],
  resolve: {
    extensions: ['.jsx', '.js'],
  },
};
