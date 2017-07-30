import React from 'react'
import { storiesOf } from '@storybook/react'
import { SocialMedia } from 'components'

storiesOf('SocialMedia', module)
  .add('default', () => <SocialMedia />)
  .add('reverse', () => <SocialMedia reverse />)
