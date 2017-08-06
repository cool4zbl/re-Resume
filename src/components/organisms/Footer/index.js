import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { palette } from 'styled-theme'
import { ifProp } from 'styled-tools'
import { Icon, Paragraph, Link } from 'components'

const Wrapper = styled.div`
  padding: 2rem;
  text-align: center;
`

const Credits = styled(Paragraph)`
  vertical-align: middle;
  text-align: center;
  margin: 0;
`

const heartbeat = keyframes`
  from {
    transform: scale(.5);
  }
  23%, 77% {
    transform: scale(.8);
  }
  54% {
    transform: scale(1);
  }
  to {
    transform: scale(.5);
  }
`
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const StyledIcon = styled(Icon)`
  animation: ${ifProp('rotate', rotate360, heartbeat)} ${ifProp(
  'rotate',
  '3s',
  '1s'
)} linear infinite;
  vertical-align: text-bottom;
  margin: 0 5px;
`

const Footer = props => {
  return (
    <Wrapper {...props}>
      Fake it till you make it. 💪
      <Credits>
        Made with
        <StyledIcon icon="heart" />
        &
        <StyledIcon icon="react" rotate />
        by <Link href="http://zhangbinliu.me">ZBL</Link>
      </Credits>
    </Wrapper>
  )
}

Footer.propTypes = {
  reverse: PropTypes.bool,
}

export default Footer
