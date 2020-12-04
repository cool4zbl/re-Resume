import React from 'react'
import { storiesOf } from '@storybook/react'
import List from '.'

storiesOf('List', module)
  .add('default', () => (
    <List>Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</List>
  ))
  .add('reverse', () => (
    <List reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </List>
  ))
  .add('palette', () => (
    <List palette="primary">
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </List>
  ))
  .add('palette reverse', () => (
    <List palette="primary" reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </List>
  ))
  .add('palette opaque', () => (
    <List palette="primary" opaque>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </List>
  ))
  .add('palette opaque reverse', () => (
    <List palette="primary" opaque reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </List>
  ))
