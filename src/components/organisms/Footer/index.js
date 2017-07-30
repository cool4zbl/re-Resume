import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
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

const IconHeart = styled(Icon)`
  vertical-align: top;
`

const Footer = props => {
  return (
    <Wrapper {...props}>
      Fake it till you make it. 💪
      <Credits>
        Made with <IconHeart icon="heart" /> by{' '}
        <Link href="http://zhangbinliu.me">ZBL</Link>
      </Credits>
    </Wrapper>
  )
}

Footer.propTypes = {
  reverse: PropTypes.bool,
}

export default Footer
