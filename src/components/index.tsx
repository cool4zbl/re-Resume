/**
 * exports all components wherever they are automatically
 * @see https://webpack.js.org/guides/dependency-management/
 */

const req = require.context('.', true, /\.js$/)

const exportAll = req => {
  req.keys().forEach(key => {
    console.log('export key: ', key)
    // const componentName = key.replace()
  })
}

exportAll(req)
