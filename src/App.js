import { NextUIProvider } from "@nextui-org/react"
import { ContextProvider } from "./context/context.js"
import { darkTheme } from "./theme.js"
import MainContent from "./components/ MainContent/MainContent.jsx"
import { LayoutWrapper } from "./layout/LayoutWrapper.jsx"
import { Header } from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Menu from "./components/Menu/Menu.jsx"

function App() {
  return (
    <ContextProvider>
      <NextUIProvider theme={darkTheme}>
        <LayoutWrapper>
          <Header />
          <MainContent />
          <Footer />
          <Menu />
        </LayoutWrapper>
      </NextUIProvider>
    </ContextProvider>
  )
}

export default App
