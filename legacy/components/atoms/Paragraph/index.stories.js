import React from 'react'
import { storiesOf } from '@storybook/react'
import Paragraph from '.'

storiesOf('Paragraph', module)
  .add('default', () => (
    <Paragraph>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Paragraph>
  ))
  .add('reverse', () => (
    <Paragraph reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Paragraph>
  ))
  .add('palette', () => (
    <Paragraph palette="primary">
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Paragraph>
  ))
  .add('palette reverse', () => (
    <Paragraph palette="primary" reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Paragraph>
  ))
  .add('palette opaque', () => (
    <Paragraph palette="primary" opaque>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Paragraph>
  ))
  .add('palette opaque reverse', () => (
    <Paragraph palette="primary" opaque reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Paragraph>
  ))
