import React from 'react'
import { storiesOf } from '@storybook/react'
import { Projects } from 'components'

storiesOf('Projects', module)
  .add('default', () => <Projects />)
  .add('reverse', () => <Projects reverse />)
