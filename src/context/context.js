import { createContext, useEffect, useState } from "react"

export const AppContext = createContext()

export const ContextProvider = ({ children }) => {
  const storage = localStorage.getItem("anagrams")
  const [anagrams, setAnagrams] = useState(storage ? JSON.parse(storage) : [])
  const [showAnagrams, setShowAnagrams] = useState(false)
  const [activeListId, setActiveListId] = useState()
  console.log(anagrams.length)

  useEffect(() => {
    localStorage.setItem("anagrams", JSON.stringify(anagrams))
  }, [anagrams])

  const contextValue = {
    anagrams,
    setAnagrams,
    activeListId,
    setActiveListId,
    showAnagrams,
    setShowAnagrams,
  }

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}
