import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App"
import Create from "../components/Create"
import MyAnagramsPage from "../pages/MyAnagrams"
import AnagramListPage from "../pages/MyAnagrams/AnagramList"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="create" element={<Create />} />
          <Route path="my-anagrams" element={<MyAnagramsPage />} />
          <Route path="my-anagrams/:id" element={<AnagramListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
