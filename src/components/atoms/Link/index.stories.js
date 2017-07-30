import React from 'react'
import { storiesOf } from '@storybook/react'
import Link from '.'

storiesOf('Link', module)
  .add('default', () =>
    <Link>Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</Link>
  )
  .add('reverse', () =>
    <Link reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Link>
  )
  .add('palette', () =>
    <Link palette="primary">
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Link>
  )
  .add('palette reverse', () =>
    <Link palette="primary" reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Link>
  )
  .add('palette opaque', () =>
    <Link palette="primary" opaque>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Link>
  )
  .add('palette opaque reverse', () =>
    <Link palette="primary" opaque reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </Link>
  )
