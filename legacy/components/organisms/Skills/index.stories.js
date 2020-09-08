import React from 'react'
import { storiesOf } from '@storybook/react'
import { Skills } from 'components'

storiesOf('Skills', module)
  .add('default', () => <Skills />)
  .add('reverse', () => <Skills reverse />)
