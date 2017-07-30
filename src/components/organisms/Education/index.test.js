import React from 'react'
import { shallow } from 'enzyme'
import Education from '.'

const wrap = (props = {}) => shallow(<Education {...props} />)

it('renders props when passed in', () => {
  const wrapper = wrap({ id: 'foo' })
  expect(wrapper.find({ id: 'foo' })).toHaveLength(1)
})
