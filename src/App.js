import { NextUIProvider } from "@nextui-org/react"
import { ContextProvider } from "./context/context.js"
import { darkTheme, lightRetroTheme } from "./theme.js"
import MainContent from "./components/ MainContent/MainContent.jsx"
import { LayoutWrapper } from "./layout/LayoutWrapper.jsx"

function App() {
  return (
    <ContextProvider>
      <NextUIProvider theme={darkTheme}>
        <LayoutWrapper>
          <MainContent />
        </LayoutWrapper>
      </NextUIProvider>
    </ContextProvider>
  )
}

export default App
