import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const styles = css`
  margin-bottom: 0.8125rem;
  height: ${props => props.height};
  background-image: ${props => `url(${props.bgUrl})`};
  background-size: ${props => props.size};
  background-position: center;
  background-repeat: no-repeat;
`
const WithBg = styled.div`${styles};`

const Image = ({ src, bgUrl, ...props }) => {
  return src
    ? <img {...props} src={src} />
    : <WithBg bgUrl={bgUrl} {...props} />
}

Image.propTypes = {
  src: PropTypes.string,
  height: PropTypes.string,
  size: PropTypes.string,
}

Image.defaultProps = {
  height: '40vh',
  size: 'contain',
}

export default Image
