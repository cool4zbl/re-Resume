import React from 'react'
import { storiesOf } from '@storybook/react'
import Image from '.'

storiesOf('Image', module)
  .add('default', () => (
    <Image>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Image>
  ))
  .add('reverse', () => (
    <Image reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Image>
  ))
  .add('palette', () => (
    <Image palette="primary">
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Image>
  ))
  .add('palette reverse', () => (
    <Image palette="primary" reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Image>
  ))
  .add('palette opaque', () => (
    <Image palette="primary" opaque>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Image>
  ))
  .add('palette opaque reverse', () => (
    <Image palette="primary" opaque reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Image>
  ))
