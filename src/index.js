import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "theme-ui"
import theme from "./theme"
import Nav from "./nav"
import StyleGuide from "./style-guide"
import "./styles.css"

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Nav /> */}
      <StyleGuide />
    </ThemeProvider>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
