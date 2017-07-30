import React from 'react'
import { storiesOf } from '@storybook/react'
import Item from '.'

storiesOf('Item', module)
  .add('default', () =>
    <Item>Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</Item>
  )
  .add('reverse', () =>
    <Item reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Item>
  )
  .add('palette', () =>
    <Item palette="primary">
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Item>
  )
  .add('palette reverse', () =>
    <Item palette="primary" reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Item>
  )
  .add('palette opaque', () =>
    <Item palette="primary" opaque>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Item>
  )
  .add('palette opaque reverse', () =>
    <Item palette="primary" opaque reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Item>
  )
