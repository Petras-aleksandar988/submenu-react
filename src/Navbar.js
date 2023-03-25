import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlContext } from "./context";


const Navbar = () => {
  const { openSidebar, closeSubmenu, openSubmenu } = useGlContext()

  function showSubenu(e) {
    const page = e.target.textContent
    const btn = e.target.getBoundingClientRect();
    const center = (btn.left + btn.right) / 2
    const bottom = btn.bottom - 5
    
   
    openSubmenu(page, {center,bottom})
  }
  function handleCloseMenu(e) {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu()
    }
  }
  return (
    <nav className="nav" onMouseOver={handleCloseMenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={showSubenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={showSubenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={showSubenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
}

export default Navbar
