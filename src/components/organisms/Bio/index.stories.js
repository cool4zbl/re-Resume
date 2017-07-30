import React from 'react'
import { storiesOf } from '@storybook/react'
import { Bio } from 'components'

storiesOf('Bio', module)
  .add('default', () => <Bio />)
  .add('reverse', () => <Bio reverse />)
