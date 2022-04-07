import { Spacer } from "@nextui-org/react"
import React from "react"
import useAppContext from "../../context/useAppContext"
import { Form } from "../Form/Form"
import MyAnagrams from "../MyAnagrams/MyAnagrams"
import { MainContentWrapper } from "./style"

const MainContent = () => {
  const { showAnagrams } = useAppContext()

  return (
    <>
      <MainContentWrapper>
        {showAnagrams ? <MyAnagrams /> : <Form />}
      </MainContentWrapper>
    </>
  )
}

export default MainContent
