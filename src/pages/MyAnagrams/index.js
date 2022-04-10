import { Text } from "@nextui-org/react"
import { Outlet } from "react-router-dom"
import useAppContext from "../../context/useAppContext"

const MyAnagramsPage = () => {
  const { myAnagrams } = useAppContext()

  return (
    <>
      {myAnagrams.length ? (
        <Text h2 css={{ m: 0, marginBottom: "10px", fontSize: "1.5rem" }}>
          My anagrams
        </Text>
      ) : null}
      <Outlet />
    </>
  )
}

export default MyAnagramsPage
