import React from 'react'
import { storiesOf } from '@storybook/react'
import { Thanks } from 'components'

storiesOf('Thanks', module)
  .add('default', () => <Thanks />)
  .add('reverse', () => <Thanks reverse />)
