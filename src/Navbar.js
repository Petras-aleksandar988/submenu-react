import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlContext } from "./context";

function Navbar() {
  const { openSidebar, closeSubmenu, openSubmenu } = useGlContext();
  function displaySubmenu(e) {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom -4
    

     openSubmenu(page, {center,bottom})
  }
  function handleSubmenuClose(e) {
   if(!e.target.classList.contains("link-btn"))
   {
     closeSubmenu()
}  }
  return (
    <nav className="nav" onMouseOver={handleSubmenuClose}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
}

export default Navbar;
