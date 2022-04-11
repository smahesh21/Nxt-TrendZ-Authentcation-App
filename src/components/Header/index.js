import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      className="website-logo"
      alt="website logo"
    />
    <ul className="text-container">
      <Link to="/" className="nav-link">
        <li className="header-text">Home</li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          className="home-icon"
          alt="nav home"
        />
      </Link>
      <Link to="/product" className="nav-link">
        <li className="header-text">Products</li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          className="product-icon"
          alt="nav product"
        />
      </Link>
      <Link to="/cart" className="nav-link">
        <li className="header-text">Cart</li>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          className="cart-icon"
          alt="nav cart"
        />
      </Link>

      <div>
        <button type="button" className="logout-button">
          Logout
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        className="logout-icon"
        alt="nav logout"
      />
    </ul>
  </nav>
)

export default Header
