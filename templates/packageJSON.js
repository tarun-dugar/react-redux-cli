module.exports = `{
  "name": "",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "license": "ISC",
  "scripts": {
    "dev": "webpack -d --watch",
    "build": "NODE_ENV=production webpack -p",
    "start": "webpack-dev-server --config=webpack.config.js",
    "lint": "eslint src/"
  },
  "dependencies": {
    "immutable": "3.8.1",
    "react": "15.5.0",
    "react-dom": "15.5.0",
    "react-redux": "5.0.1",
    "react-router-dom": "4.1.1",
    "redux": "3.6.0"
  },
  "devDependencies": {
    "autoprefixer": "6.7.7",
    "babel-core": "6.24.0",
    "babel-loader": "6.2.10",
    "babel-preset-latest": "6.16.0",
    "babel-preset-react": "6.16.0",
    "css-loader": "0.26.1",
    "extract-text-webpack-plugin": "2.1.0",
    "file-loader": "0.10.1",
    "html-webpack-plugin": "2.28.0",
    "image-webpack-loader": "3.2.0",
    "node-sass": "4.5.0",
    "postcss-loader": "1.3.3",
    "react-hot-loader": "3.0.0-beta.6",
    "sass-loader": "6.0.3",
    "style-loader": "0.14.1",
    "webpack": "2.4.1",
    "webpack-dev-server": "2.4.2"
  }
}

`;