import React from 'react'
import { storiesOf } from '@storybook/react'
import { Prototype } from 'components'

storiesOf('Prototype', module)
  .add('default', () => <Prototype />)
  .add('reverse', () => <Prototype reverse />)
