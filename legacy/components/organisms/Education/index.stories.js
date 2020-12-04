import React from 'react'
import { storiesOf } from '@storybook/react'
import { Education } from 'components'

storiesOf('Education', module)
  .add('default', () => <Education />)
  .add('reverse', () => <Education reverse />)
