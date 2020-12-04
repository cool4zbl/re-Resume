import React from 'react'
import { storiesOf } from '@storybook/react'
import { Work } from 'components'

storiesOf('Work', module)
  .add('default', () => <Work />)
  .add('reverse', () => <Work reverse />)
