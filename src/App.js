import { NextUIProvider } from "@nextui-org/react"
import { ContextProvider } from "./context/context.js"
import { darkTheme } from "./theme.js"
import { LayoutWrapper } from "./layout/LayoutWrapper.jsx"
import { MainContentWrapper } from "./layout/MainContentWrapper.jsx"
import { Header } from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Menu from "./components/Menu/Menu.jsx"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <ContextProvider>
      <NextUIProvider theme={darkTheme}>
        <LayoutWrapper>
          <Header />
          <MainContentWrapper>
            <Outlet />
          </MainContentWrapper>
          <Footer />
          <Menu />
        </LayoutWrapper>
      </NextUIProvider>
    </ContextProvider>
  )
}

export default App
