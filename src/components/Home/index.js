import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="product-container">
      <div className="product-details-container">
        <h1 className="main-heading">Clothes That Get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          className="clothes-image-small"
          alt="clothes that get you noticed"
        />
        <p className="description">
          Fashion is part of the daily air and it does not quiet that changes
          all the time. Clothes have always been a maker of the era and we are
          in a revolution. Your fashions makes you been seen heard that way you
          are. So, celebrate the seasons new and exciting fashions in your own
          way.
        </p>
        <div>
          <button type="button" className="shop-now">
            Shop Now
          </button>
        </div>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        className="clothes-image"
        alt="clothes that get you noticed"
      />
    </div>
  </div>
)

export default Home
