// default/base theme
import colors from "./colors"
import textStyles from "./text"
import buttonStyles from "./buttons"

export const base = {
  breakpoints: ["560px", "1024px"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Verlag, system-ui, sans-serif",
    heading: "Verlag, system-ui, sans-serif"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    bold: 600
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors,
  textStyles,
  buttonStyles,

  styles: {
    Container: {
      maxWidth: 1280
    },
    a: {
      position: "relative",
      color: "inherit",
      textDecoration: "none",
      "&:after": {
        content: "''",
        position: "absolute",
        top: "auto",
        right: 0,
        bottom: "-1px",
        left: 0,
        width: "100%",
        borderBottom: "1px solid black"
      },
      "&:hover, &:active": {
        borderBottom: `0`,
        "&:after": {
          display: "none"
        }
      },
      "&:focus": {
        border: `0`,
        outlineWidth: 1,
        outlineColor: colors.gray.accessible,
        outlineStyle: "dotted",
        outlineOffset: 1,
        "&:after": {
          display: "none"
        }
      }
    }
  },

  containerStyles: {
    base: {},
    cover: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }
  }
}

export default base
