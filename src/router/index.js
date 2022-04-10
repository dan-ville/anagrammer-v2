import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App"
import MyAnagrams from "../components/MyAnagrams"
import CreatePage from "../pages/Create"
import MyAnagramsPage from "../pages/MyAnagrams"
import AnagramListPage from "../pages/MyAnagrams/AnagramList"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="create" element={<CreatePage />} />
          <Route path="my-anagrams" element={<MyAnagramsPage />}>
            <Route index element={<MyAnagrams />} />
            <Route path=":id" element={<AnagramListPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
