# babel & webpack 설치 및 세팅
```
$ npm init
$ npm install --save-dev @babel/core @babel/cli
$ npm install --save-dev @babel/preset-env
$ npm install --save-dev @babel/plugin-proposal-class-properties
$ npm install --save-dev webpack webpack-cli
$ npm install --save-dev babel-loader
$ npm install @babel/polyfill
$ npm install --save-dev node-sass style-loader css-loader sass-loader
$ npm install --save-dev html-webpack-plugin
$ npm install --save-dev mini-css-extract-plugin
```
```
yarn init
yarn add --dev @babel/core @babel/cli
yarn add --dev @babel/preset-env
yarn add --dev @babel/plugin-proposal-class-properties
yarn add --dev webpack webpack-cli
yarn add --dev babel-loader
yarn add @babel/polyfill
yarn add --dev node-sass style-loader css-loader sass-loader
yarn add --dev mini-css-extract-plugin
```


## package.json
### -babel만 설치 시
```
 "scripts": {
    "build": "babel src/js -w -d dist/js"
  },
```
### -webpack 설치 시
```
 "scripts": {
    "build": "webpack -w"
  },
```
## .babelrc 생성
```
{
  "presets": ["@babel/preset-env"],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

## webpack.config.js 생성
```
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // entry files
  entry: ['@babel/polyfill', './src/js/main.js', './src/sass/main.scss'],
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  plugins: [
    // 컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
    new MiniCssExtractPlugin({ filename: 'css/style.css' })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/js')
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map',
  // https://webpack.js.org/concepts/mode/#mode-development
  mode: 'development'
};
```

# server 설치 및 세팅

yarn add express
yarn add ejs