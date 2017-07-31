import React from 'react'
import PropTypes from 'prop-types'
import NavLink from 'react-router-dom/NavLink'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

const styles = css`
  a {
    text-decoration: none;
    &:hover {
      text-decoration: normal;
    }
  }
`

const Anchor = styled.a`${styles};`

const StyledNavLink = styled(({ theme, palette, to, ...props }) => {
  return <NavLink to={to} {...props} />
})`${styles}`

const Link = ({ children, ...props }) => {
  if (props.to) {
    return (
      <StyledNavLink {...props}>
        {children}
      </StyledNavLink>
    )
  }
  return (
    <Anchor {...props}>
      {children}
    </Anchor>
  )
}

Link.propTypes = {
  palette: PropTypes.string,
  theme: PropTypes.string,
  to: PropTypes.string,
}

Link.defaultProps = {
  palette: 'grayscale',
}

export default Link
