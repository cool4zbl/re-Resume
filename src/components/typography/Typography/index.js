import Typography from 'typography'
import theme from 'typography-theme-github'
// import theme from 'typography-theme-stow-lake'
import CodePlugin from 'typography-plugin-code'

// theme.scaleRatio = 1.56

theme.plugins = [new CodePlugin()]
theme.overrideThemeStyles = ({ rhythm }) => ({
})

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
