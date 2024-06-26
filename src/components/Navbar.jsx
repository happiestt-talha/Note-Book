import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Navbar = () => {
  const location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem('token')
  }

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navToggler">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navToggler">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/home" ? "active" : ""}`} to="/home">Home</Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
              </li>
            </ul>

            <div className="d-flex">
              {localStorage.getItem('token')
                ?<Link className="btn btn-outline-light mx-1" onClick={handleLogout} to="/login">Logout</Link>
                :<>
                  <Link className="btn btn-outline-light mx-1" to="/login">Login</Link>
                  <Link className="btn btn-outline-light mx-1" to="/signup">Signup</Link>
                </>
              }
            </div>
          </div>

        </div>
      </nav>
    </>
  )
}
export default Navbar