import React from 'react'
import { storiesOf } from '@storybook/react'
import Subtitle from '.'

storiesOf('Subtitle', module)
  .add('default', () => (
    <Subtitle>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Subtitle>
  ))
  .add('reverse', () => (
    <Subtitle reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Subtitle>
  ))
  .add('palette', () => (
    <Subtitle palette="primary">
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Subtitle>
  ))
  .add('palette reverse', () => (
    <Subtitle palette="primary" reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Subtitle>
  ))
  .add('palette opaque', () => (
    <Subtitle palette="primary" opaque>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Subtitle>
  ))
  .add('palette opaque reverse', () => (
    <Subtitle palette="primary" opaque reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Subtitle>
  ))
