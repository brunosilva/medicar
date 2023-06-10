import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#444444',

      green300 : ' #49B4BB',
      gray: ' #A8A8A8'
    }
  }
})