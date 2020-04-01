import React from 'react'

const Header = () => (
  <div className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className={`nav-item ${window.location.pathname === "/" && "active"}`}>
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className={`nav-item ${window.location.pathname === "/episodes" && "active"}`}>
          <a className="nav-link" href="/episodes">Episodes <span className="sr-only">(current)</span></a>
        </li>
      </ul>
    </div>
  </div>
)

export default Header;