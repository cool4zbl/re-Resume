const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000
const sourceDir = process.env.SOURCE || 'src'
const publicPath = `/${process.env.PUBLIC_PATH || ''}/`.replace('//', '/')
const sourcePath = path.join(process.cwd(), sourceDir)
const outputPath = path.resolve(__dirname, 'dist')

// const config = createConfig([
//   entryPoint({
//     app: sourcePath,
//   }),
//   setOutput({
//     filename: '[name].js',
//     path: outputPath,
//     publicPath,
//   }),
//   defineConstants({
//     'process.env.NODE_ENV': process.env.NODE_ENV,
//     'process.env.PUBLIC_PATH': publicPath.replace(/\/$/, ''),
//   }),
//   addPlugins([
//     new HtmlWebpackPlugin({
//       filename: 'index.html',
//       template: path.join(process.cwd(), 'public/index.html'),
//     }),
//   ]),
//   happypack([
//     babel(),
//   ]),
//   assets(),
//   resolveModules(sourceDir),

//   env('development', [
//     devServer({
//       contentBase: 'public',
//       stats: 'errors-only',
//       historyApiFallback: { index: publicPath },
//       headers: { 'Access-Control-Allow-Origin': '*' },
//       host,
//       port,
//     }),
//     sourceMaps(),
//     addPlugins([
//       new webpack.NamedModulesPlugin(),
//     ]),
//   ]),

//   env('production', [
//     splitVendor(),
//     addPlugins([
//     ]),
//   ]),
// ])

module.exports = {
  // new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
  entry: sourcePath,
  output: {
    filename: 'app.[name].js',
    publicPath,
    path: outputPath,
  },
  devServer: {
    contentBase: 'public',
    stats: 'errors-only',
    historyApiFallback: { index: publicPath },
    headers: { 'Access-Control-Allow-Origin': '*' },
    host,
    port,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // assets
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      { test: /\.(png|jpe?g|svg|gif|woff2?|ttf|eot)$/, loader: 'url-loader?limit=8192' },
    ],
  },
}

