/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

export const Box = ({ variant = "base", ...props }) => (
  <Styled.div sx={{ variant: `containerStyles.${variant}` }} {...props} />
)

export const Flex = ({ variant = "base", ...props }) => (
  <Styled.div
    sx={{ variant: `containerStyles.${variant}`, display: "flex" }}
    {...props}
  />
)

export const Text = ({ children, variant = "bodyCopy", ...props }) => (
  <Styled.p sx={{ variant: `textStyles.${variant}` }} {...props}>
    {children}
  </Styled.p>
)

export const Link = ({ children, variant = "bodyCopy", ...props }) => (
  <Styled.a sx={{ variant: `textStyles.${variant}` }} {...props}>
    {children}
  </Styled.a>
)

export const Button = ({ children, variant = "primary", ...props }) => (
  <Styled.div
    as="button"
    sx={{ variant: `buttonStyles.${variant}` }}
    {...props}
  >
    <div>
      <div>{children}</div>
    </div>
  </Styled.div>
)
