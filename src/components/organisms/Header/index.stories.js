import React from 'react'
import { storiesOf } from '@storybook/react'
import { Header } from 'components'

storiesOf('Header', module)
  .add('default', () => <Header />)
  .add('reverse', () => <Header reverse />)
