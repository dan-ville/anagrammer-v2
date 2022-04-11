import { Text } from "@nextui-org/react"
import { Outlet } from "react-router-dom"
import useAppContext from "../../context/useAppContext"

const MyAnagramsPage = () => {
  const { myAnagrams } = useAppContext()

  return (
    <div>
      {myAnagrams.length ? (
        <Text h2 css={{ m: 0, fontSize: "1.25rem" }}>
          My anagrams
        </Text>
      ) : null}
      <Outlet />
    </div>
  )
}

export default MyAnagramsPage
