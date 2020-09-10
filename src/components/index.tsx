/**
 * exports all components wherever they are automatically
 * @see https://webpack.js.org/guides/dependency-management/
 */

// NOTE: The arguments passed to require.context must be literals!
const req = require.context('.', true, /\.(ts|js)x?$/)

const exportAll = req => {
  req.keys().forEach(key => {
    const componentName = key.replace(/^.+\/([^/]+)\/index\.(ts|js)x?$/, '$1')
    module.exports[componentName] = req(key).default
  })
}

exportAll(req)
