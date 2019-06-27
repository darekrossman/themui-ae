const textBase = {
  fontFamily: "body",
  textTransform: "none",
  letterSpacing: 0
}

const textStyles = {
  promoTitle: {
    ...textBase,
    fontSize: ["60px", "72px", "80px"],
    lineHeight: ["64px", "80px", "90px"],
    fontWeight: "body"
  },

  storyTitle: {
    ...textBase,
    fontSize: ["36px", "48px", "56px"],
    lineHeight: ["42px", "52px", "64px"],
    fontWeight: "body"
  },

  heroTitle: {
    ...textBase,
    fontSize: ["28px", "40px", "48px"],
    lineHeight: ["32px", "44px", "52px"],
    fontWeight: "body",
    letterSpacing: [0, 0.34, 0.41]
  },

  pageHeader: {
    ...textBase,
    fontSize: ["20px", "24px", "28px"],
    lineHeight: ["28px", "32px", "36px"],
    fontWeight: "body",
    letterSpacing: [0.2, 0.24, 0.24]
  },

  subHeader: {
    ...textBase,
    fontSize: ["18px", "20px", "24px"],
    lineHeight: ["24px", "28px", "32px"],
    fontWeight: "body",
    letterSpacing: [0, 0.2, 0]
  },

  bodyCopy: {
    ...textBase,
    fontSize: ["16px", "18px"],
    lineHeight: ["24px", "26px"],
    fontWeight: "body",
    letterSpacing: 0.37
  },

  smallTitle: {
    ...textBase,
    fontSize: ["14px", "14px", "14px"],
    lineHeight: ["24px", "24px", "20px"],
    fontWeight: "body",
    letterSpacing: 0.3
  },

  eyebrow: {
    ...textBase,
    fontSize: "11px",
    lineHeight: "16px",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 0.6
  },

  tiny: {
    ...textBase,
    fontSize: "12px",
    lineHeight: "18px",
    fontWeight: "body",
    textTransform: "uppercase",
    letterSpacing: 0.17
  }
}

export default textStyles
