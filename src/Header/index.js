import {Link} from 'react-router-dom'
import { IoPersonSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

import './index.css'

const websiteLogo = 'https://assets.ccbp.in/frontend/react-js/logo-img.png'

const Header = props => {
  
  return (
    <nav className="nav-container">
      <ul className="header-ul-container">
        <li className="logo-container">
          <Link className="link" to="/">
            <h1 className='title'>Karo Abhayaas</h1>
          </Link>
        </li>
        <li className="home-jobs-container">
        <button type="button" className="btn-logout" >
           JOIN US
          </button>
          <Link className="link" to="/">
            
            <h1 className="nav-text">Classes</h1>
          </Link>
          <Link className="link" to="/product">
            <h1 className="nav-text">Prodects</h1>
          </Link>
          <Link className="link" to="/about">
            <h1 className="nav-text">About Us</h1>
          </Link>
          <Link className="link" to="/login">
          <h1 className="nav-text"><IoPersonSharp /></h1>
          </Link>
          <Link className="link" to="/jobs">
          <h1 className="nav-text"><FaCartShopping /></h1>
          </Link>
        </li>
        
      </ul>
    </nav>
  )
}

export default Header