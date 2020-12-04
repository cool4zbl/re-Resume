import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const styles = css`
  margin-bottom: 0.8125rem;
  background-image: ${props => `url(${props.bgUrl})`};
  background-size: ${props => props.size};
  height: ${props => props.height};
  background-position: center;
  background-repeat: no-repeat;
  @media screen and (max-width: 480px) {
    background-size: contain;
    height: 40vh;
  }
`

const WithBg = styled.div`
  ${styles};
`

const Image = ({ src, bgUrl, ...props }) => {
  return src ? (
    <img {...props} src={src} />
  ) : (
    <WithBg bgUrl={bgUrl} {...props} />
  )
}

Image.propTypes = {
  src: PropTypes.string,
  height: PropTypes.string,
  size: PropTypes.string
}

Image.defaultProps = {
  height: '40vh',
  size: 'contain'
}

export default Image
