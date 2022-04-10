import { createContext, useEffect, useState } from "react"

export const AppContext = createContext()

export const ContextProvider = ({ children }) => {
  const storage = localStorage.getItem("anagrams")
  const [myAnagrams, setMyAnagrams] = useState(
    storage ? JSON.parse(storage) : []
  )
  const [activeListId, setActiveListId] = useState()

  useEffect(() => {
    localStorage.setItem("myAnagrams", JSON.stringify(myAnagrams))
  }, [myAnagrams])

  const contextValue = {
    myAnagrams,
    setMyAnagrams,
    activeListId,
    setActiveListId,
  }

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}
