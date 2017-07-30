import 'react-hot-loader/patch'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { basename } from 'config'
import App from 'components/App'
import { Typography } from 'components'

const renderApp = () =>
  <BrowserRouter basename={basename}>
    <App style={Typography} />
  </BrowserRouter>

const root = document.getElementById('app')
render(renderApp(), root)

if (module.hot) {
  module.hot.accept('components/App', () => {
    require('components/App')
    render(renderApp(), root)
  })
}
