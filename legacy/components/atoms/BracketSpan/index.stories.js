import React from 'react'
import { storiesOf } from '@storybook/react'
import BracketSpan from '.'

storiesOf('BracketSpan', module)
  .add('default', () => (
    <BracketSpan>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </BracketSpan>
  ))
  .add('reverse', () => (
    <BracketSpan reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </BracketSpan>
  ))
  .add('palette', () => (
    <BracketSpan palette="primary">
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </BracketSpan>
  ))
  .add('palette reverse', () => (
    <BracketSpan palette="primary" reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </BracketSpan>
  ))
  .add('palette opaque', () => (
    <BracketSpan palette="primary" opaque>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </BracketSpan>
  ))
  .add('palette opaque reverse', () => (
    <BracketSpan palette="primary" opaque reverse>
      Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.
    </BracketSpan>
  ))
