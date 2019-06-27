/** @jsx jsx */
import { jsx } from "theme-ui"
import { Box, Flex, Text, Button, Link } from "./components"

function StoryPromo(props) {
  return (
    <Flex
      sx={{
        flexDirection: ["column", "column", "row"],
        alignItems: "stretch"
      }}
    >
      <Box
        sx={{
          flex: "1 1 0",
          minHeight: [400, 400, 300],
          bg: "gray.warm",
          order: [0, 0, 1]
        }}
      />

      <Flex
        sx={{
          flex: ["none", "none", "1 1 0"],
          flexDirection: "column",
          height: [240, 280, "auto"],
          p: 4,
          bg: "brand.tier2.base"
        }}
      >
        <Box sx={{ flex: "1 1 0" }}>
          <Text variant="subHeader">Sub-title text</Text>
          <Text variant="storyTitle">30% off promo</Text>
        </Box>
        <Flex sx={{ alignItems: "center" }}>
          <Button variant="editorial" sx={{ mr: 4 }}>
            CTA here
          </Button>
          <Link variant="smallTitle">Link text</Link>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default StoryPromo
