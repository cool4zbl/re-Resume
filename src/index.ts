// import 'react-hot-loader/patch'
// import React from 'react'
// import { render } from 'react-dom'
// import { BrowserRouter } from 'react-router-dom'

// import { basename } from 'config'
// import App from 'components/App'

// const renderApp = () =>
//   (<BrowserRouter basename={basename}>
//     <App />
//   </BrowserRouter>)

// const root = document.getElementById('app')
// render(renderApp(), root)

// if (module.hot) {
//   module.hot.accept('components/App', () => {
//     require('components/App')
//     render(renderApp(), root)
//   })
// }

export class C {
  private x = 0

  getX = () => this.x
  setX = (newVal: number) => {
    this.x = newVal
  }
}

console.log('😲 worked!')

export const x = new C()
export const y = { ...{ some: 'value' } }
