import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'

import { HomePage, NotFoundPage } from 'components'
import theme from './themes/default'
injectGlobal`
  body: {
    background: '#fffefb';
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
