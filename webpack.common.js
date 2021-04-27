const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
          globOptions: {
            ignore: [
              '**/images/heros/**',
              '**/icons/**',
            ], // CopyWebpackPlugin mengabaikan berkas yang berada di dalam folder images
          },
        },
      ],
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/sw.js'),
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }),
    new WebpackPwaManifest({
      name: 'Resto Hunter',
      short_name: 'Resto',
      orientation: 'portrait',
      description: 'Cari restoran dimanapun dan kapanpun kamu berada dengan beragam menu yang tersedia',
      background_color: '#ffffff',
      theme_color: '#d92027',
      display: 'standalone',
      inject: true,
      ios: true,
      icons: [
        {
          src: path.resolve('src/public/icons/icon-512x512.png'),
          sizes: [72, 96, 128, 144, 152, 192, 256, 384, 512],
          purpose: 'any maskable',
          destination: path.join('icons'),
        },
        {
          src: path.resolve('src/public/icons/icon-512x512.png'),
          size: 192,
          destination: path.join('icons', 'ios'),
          ios: true,
        },
        {
          src: path.resolve('src/public/icons/icon-512x512.png'),
          size: 192,
          destination: path.join('icons', 'ios'),
          ios: 'startup',
        },
      ],
    }),
  ],
};
