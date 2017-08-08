import React from 'react'
import { storiesOf } from '@storybook/react'
import { Articles } from 'components'

storiesOf('Articles', module)
  .add('default', () => <Articles />)
  .add('reverse', () => <Articles reverse />)
