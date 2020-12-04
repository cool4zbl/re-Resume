import React from 'react'
import { shallow } from 'enzyme'
import Skills from '.'

const wrap = (props = {}) => shallow(<Skills {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
