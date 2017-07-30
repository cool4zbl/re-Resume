import React from 'react'
import { shallow } from 'enzyme'
import Bio from '.'

const wrap = (props = {}) => shallow(<Bio {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
