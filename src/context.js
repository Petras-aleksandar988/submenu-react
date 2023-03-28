import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({})
  const [pageAndLinks, setPageAndLinks] = useState({page:"", links:[]})

  function openSidebar() {
    setIsSidebarOpen(false);
  }
  function closeSidebar() {
    setIsSidebarOpen(false);
  }
  function openSubmenu(text, coordinates) {
    const pageLinks = sublinks.find(link => link.page === text)
    setPageAndLinks(pageLinks)
   setLocation(coordinates)
    setIsSubmenuOpen(true);
  }
  function closeSubmenu() {
    setIsSubmenuOpen(false);
  }
  return (
    <AppContext.Provider
      value={{
        closeSidebar,
        openSidebar,
        closeSubmenu,
        openSubmenu,
        isSidebarOpen,
        isSubmenuOpen,
        location,
        pageAndLinks
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlContext() {
  return useContext(AppContext);
}
