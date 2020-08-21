import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { Link, Heading } from 'components'

const BigName = styled(Heading)`
  font-weight: 400;
  font-size: 3.6em;
  text-align: center;
  border-bottom: 0;
`
const Span = styled.span`
  color: #fff;
  text-shadow: 1px 1px rgba(226, 44, 41, 1), 2px 2px rgba(226, 44, 41, 1),
    3px 3px rgba(226, 44, 41, 1), 4px 4px rgba(226, 44, 41, 0.99),
    5px 5px rgba(226, 44, 41, 0.98), 6px 6px rgba(226, 44, 41, 0.97),
    7px 7px rgba(226, 44, 41, 0.94), 8px 8px rgba(226, 44, 41, 0.9),
    9px 9px rgba(226, 44, 41, 0.84), 10px 10px rgba(226, 44, 41, 0.76),
    11px 11px rgba(226, 44, 41, 0.65), 12px 12px rgba(226, 44, 41, 0.5),
    13px 13px rgba(226, 44, 41, 0.31), 14px 14px rgba(226, 44, 41, 0.08);
`

const Wrapper = styled.div`
  display: inline;
  padding: 0.8rem 1.4rem;
  background: ${palette('pigeonRed', 1)};
`

// config.name
const Header = props => {
  return (
    <BigName {...props}>
      <Wrapper>
        <Link reverse href={'/'}>
          <Span> {props.name || '<ZBL />'} </Span>
        </Link>
      </Wrapper>
    </BigName>
  )
}

Header.propTypes = {
  name: PropTypes.string
}

export default Header
