import Typography from 'typography'
import theme from 'typography-theme-github'
// import theme from 'typography-theme-stow-lake'
import CodePlugin from 'typography-plugin-code'

// theme.scaleRatio = 1.56

theme.plugins = [new CodePlugin()]
theme.overrideThemeStyles = ({ rhythm }) => ({
  /*
  "li > p": {
    marginBottom: rhythm(1 / 2),
  },
  "p code": {
    fontSize: "75%",
  },
  "tt,code": {
    fontSize: "85%",
  },
  pre: {
    lineHeight: 1.22,
  },
*/
})

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
