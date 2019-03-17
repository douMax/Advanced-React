import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <div>
      <Nav />
      <div className="bar">
        <a herf="">AirCastle</a>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <div>
        Cart
      </div>
    </div>
  )
}

export default Header
