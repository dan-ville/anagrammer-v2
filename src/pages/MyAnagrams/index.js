import { Text } from "@nextui-org/react"
import { Outlet } from "react-router-dom"

const MyAnagramsPage = () => {
  return (
    <>
      <Text h2 css={{ m: 0, marginBottom: "10px", fontSize: "1.5rem" }}>
        My anagrams
      </Text>
      <Outlet />
    </>
  )
}

export default MyAnagramsPage
