import { Spacer } from "@nextui-org/react"
import React from "react"
import useAppContext from "../../context/useAppContext"
import { Form } from "../Form/Form"
import { Header } from "../Header"
import { List } from "../List/List"
import MyAnagrams from "../MyAnagrams/MyAnagrams"
import { MainContentWrapper } from "./style"

const MainContent = () => {
  const { showAnagrams } = useAppContext()

  return (
    <>
      <Header />
      <Spacer y={2} />
      <MainContentWrapper>
        {showAnagrams ? <MyAnagrams /> : <Form />}
      </MainContentWrapper>
    </>
  )
}

export default MainContent
