/** @jsx jsx */
import { jsx, Layout, Container, Header, useThemeUI } from "theme-ui"
import { Box, Flex, Text, Button, Link } from "./components"
import StoryPromo from "./story-promo"

function StyleGuide() {
  const {
    theme: { colors }
  } = useThemeUI()

  return (
    <Layout>
      <Container>
        <Header sx={{ mb: 5 }}>
          <Text as="h1" variant="pageHeader">
            Theme Guide
          </Text>
        </Header>

        <Text variant="subHeader" sx={{ mb: 4 }}>
          Brand Colors
        </Text>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 40,
            justifyItems: "center",
            mb: 5,
            div: { height: 120, width: "100%" }
          }}
        >
          {Object.keys(colors.brand).map(k => {
            const val = colors.brand[k]
            if (typeof val === "string") {
              return (
                <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
                  <Box sx={{ bg: `brand.${k}` }} />
                  <Text variant="smallTitle">brand.{k}</Text>
                </Flex>
              )
            }
            return Object.keys(val).map(k2 => (
              <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
                <Box sx={{ bg: `brand.${k}.${k2}` }} />
                <Text variant="smallTitle">
                  brand.{k}.{k2}
                </Text>
              </Flex>
            ))
          })}
        </Box>

        <Text variant="subHeader" sx={{ mb: 4 }}>
          Shades of gray
        </Text>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 40,
            justifyItems: "center",
            mb: 5,
            div: { height: 120, width: "100%" }
          }}
        >
          {Object.keys(colors.gray).map(k => {
            return (
              <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
                <Box sx={{ bg: `gray.${k}` }} />
                <Text variant="smallTitle">gray.{k}</Text>
              </Flex>
            )
          })}
        </Box>

        <Box sx={{ button: { mb: 3 } }}>
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="editorial">Editorial</Button>
        </Box>

        <Flex
          sx={{
            p: 3,
            my: 3,
            bg: "brand.tier1.base"
          }}
        >
          <Button variant="editorialReverse" sx={{ mr: 3 }}>
            Editorial
          </Button>
          <Button variant="editorialReverse" disabled>
            Disabled
          </Button>
        </Flex>

        <Flex
          sx={{
            justifyContent: "space-around",
            my: 4
          }}
        >
          <Button variant="tag">Tag</Button>
          <Button variant="tagPromo1">Promo Tag 1</Button>
          <Button variant="tagPromo2">Promo Tag 2</Button>
          <Button variant="tagPromo3">Promo Tag 3</Button>
          <Button variant="tagPromo4">Promo Tag 4</Button>
        </Flex>

        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "space-around",
            my: 4
          }}
        >
          <Button as="a" href="#">
            Button as link
          </Button>
          <Link href="#">Inline link</Link>
          <Link href="#" variant="smallTitle">
            Standalone link
          </Link>
        </Flex>

        <StoryPromo />
      </Container>
    </Layout>
  )
}

export default StyleGuide
