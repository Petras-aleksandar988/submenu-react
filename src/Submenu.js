import React, { useState, useRef, useEffect } from 'react'

import { useGlContext } from "./context";

function Submenu() {
  const { isSubmenuOpen, location,getPage:{page,links} } = useGlContext()
  const container = useRef()
  const [columns, setColumns] = useState("col-2")  
  useEffect(() => {
    setColumns("col-2")
    const submenu = container.current;
    const { center, bottom } = location
    submenu.style.left = `${ center }px`
    submenu.style.top = `${bottom}px`
    if (links.length === 3) {
      setColumns("col-3")
    }
    if (links.length > 3) {
      setColumns("col-4")
    }
    
},[location,links])
  return <aside className={`${isSubmenuOpen ? "submenu show" : "submenu"}`} ref={container}>
    
    <h4>{page}</h4>
    <div className={`submenu-center ${columns}`}>
      {links.map((link, index) => {
        const { label, url, icon } = link
        return <a key={index} href={url}>
          {icon }
          {label }
        </a>
      }) }
    </div>
  </aside>
}

export default Submenu
