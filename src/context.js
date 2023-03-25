import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

 export function AppProvider({children}) {
   const [isSidebarOpen, setSidebar] = useState(false)
   const [isSubmenuOpen, setSubmenu] = useState(false)
   const [location, setLocation] = useState({})
   const [getPage, setGetPage] = useState({page: "", links: []})
   
     function openSidebar() {
         setSidebar(true)
     }
     function closeSidebar() {
         setSidebar(false)
     }
     function openSubmenu(text, coordinates) {
         const page = sublinks.find((link) => link.page === text)
         console.log(page);
         setGetPage(page)
         setLocation(coordinates)
         setSubmenu(true)
     }
     function closeSubmenu() {
         setSubmenu(false)
     }

     return <AppContext.Provider value={{
         isSidebarOpen,
         isSubmenuOpen,
         openSidebar,
         openSubmenu,
         closeSidebar,
         closeSubmenu,
         location,
         getPage,
     }} >{children} </AppContext.Provider>
 }
export function useGlContext() {
    return useContext(AppContext)
}

