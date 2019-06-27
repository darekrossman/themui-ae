import colors from "./colors"
import textStyles from "./text"

const base = {
  display: "block",
  minWidth: 0,
  border: 0,
  height: 55,
  m: 0,
  py: 0,
  "&:focus": {
    outlineWidth: 1,
    outlineColor: colors.gray.accessible,
    outlineStyle: "dotted",
    outlineOffset: 1
  },
  "& > div": {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > div": {
      textAlign: "center",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  },
  "&:link, &:visited": {
    textDecoration: "none"
  }
}

const buttonStyles = {}

buttonStyles.primary = {
  ...base,
  ...textStyles.eyebrow,
  minWidth: 250,
  bg: "black",
  color: "white",
  "&:hover, &:active, &:focus": {
    bg: "#404040"
  },
  "&[disabled]": {
    bg: "#ccc"
  }
}

buttonStyles.secondary = {
  ...base,
  ...textStyles.eyebrow,
  minWidth: 250,
  bg: "transparent",
  color: "black",
  border: "1px solid rgba(0,0,0,0.2)",
  "&:hover, &:active, &:focus": {
    border: "1px solid black"
  },
  "&[disabled]": {
    color: colors.gray.accessible,
    border: "1px solid rgba(0,0,0,0.2)"
  }
}

buttonStyles.editorial = {
  ...base,
  ...buttonStyles.secondary,
  ...textStyles.bodyCopy,
  minWidth: "auto",
  height: [45, 55, 55],
  px: 4
}

buttonStyles.editorialReverse = {
  ...base,
  ...buttonStyles.editorial,
  height: [45, 55, 55],
  px: 4,
  bg: "transparent",
  color: "white",
  border: "1px solid rgba(255,255,255,0.2)",
  "&:hover, &:active, &:focus": {
    border: "1px solid white"
  },
  "&:focus": {
    ...base["&:focus"],
    outlineColor: "white"
  },
  "&[disabled]": {
    color: "rgba(255,255,255,0.2)",
    border: "1px solid rgba(255,255,255,0.2)"
  }
}

buttonStyles.tag = {
  ...base,
  ...textStyles.smallTitle,
  position: "relative",
  bg: "gray.base",
  color: "black",
  height: 36,
  px: "20px",
  borderRadius: 26,
  "&:hover, &:active, &:focus": {
    boxShadow: "inset 0px 0px 0px 1px black"
  },
  "&:focus": {
    outline: "none",
    "&:before": {
      content: "''",
      display: "block",
      position: "absolute",
      zIndex: 1,
      top: "-2px",
      bottom: "-2px",
      left: "-2px",
      right: "-2px",
      borderRadius: 26,
      border: `1px dotted`,
      borderColor: colors.gray.accessible
    }
  }
}

buttonStyles.tagPromo1 = {
  ...buttonStyles.tag,
  bg: "brand.lastChance.base",
  color: "white",
  "&:hover, &:active, &:focus": {
    boxShadow: "none",
    bg: "brand.lastChance.contrast"
  }
}
buttonStyles.tagPromo2 = {
  ...buttonStyles.tag,
  bg: "brand.tier1.priority",
  color: "white",
  "&:hover, &:active, &:focus": {
    boxShadow: "none",
    bg: "brand.tier1.priorityContrast"
  }
}
buttonStyles.tagPromo3 = {
  ...buttonStyles.tag,
  bg: "brand.tier1.base",
  color: "white",
  "&:hover, &:active, &:focus": {
    boxShadow: "none",
    bg: "brand.tier1.contrast"
  }
}
buttonStyles.tagPromo4 = {
  ...buttonStyles.tag,
  bg: "brand.tier2.base",
  "&:hover, &:active, &:focus": {
    boxShadow: "none",
    bg: "brand.tier2.contrast"
  }
}

export default buttonStyles
