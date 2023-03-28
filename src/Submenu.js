import React, { useState, useRef, useEffect } from "react";

import { useGlContext } from "./context";

function Submenu() {
  const {
    isSubmenuOpen,
    location,
    pageAndLinks: { page, links },
  } = useGlContext();
  const { center, bottom } = location;
  const container = useRef();
  const [columns, setColumns]  =useState("col-2")
  useEffect(() => {
    setColumns("col-2")
    const submenu = container.current;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) {
      setColumns("col-3")
    }
    if (links.length > 3) {
      setColumns("col-4")
    }
  }, [location,links]);

  return (
    <aside
      ref={container}
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
    >
      <h4> {page} </h4>
      <div className={`submenu-center ${columns}` }>
        {links.map((link, index) => {
          const { label, url, icon } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
}

export default Submenu;
