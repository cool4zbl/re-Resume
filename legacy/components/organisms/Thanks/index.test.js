import React from 'react'
import { shallow } from 'enzyme'
import Thanks from '.'

const wrap = (props = {}) => shallow(<Thanks {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
