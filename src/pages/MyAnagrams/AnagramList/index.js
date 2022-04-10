import { useParams } from "react-router-dom"
import AnagramList from "../../../components/AnagramList"
import useAppContext from "../../../context/useAppContext"

const AnagramListPage = () => {
  const { myAnagrams } = useAppContext()
  const { id } = useParams()
  const list = myAnagrams.find((list) => list.id === id)

  return <AnagramList list={list} />
}

export default AnagramListPage
