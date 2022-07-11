import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { Link, useLocation, useHistory } from "react-router-dom";

export default function Naivbar(props) {
  const history = useHistory()
  const [name, setname] = useState(" ")
  const location = useLocation();
  const logouthandler = (e) => {
    e.preventDefault()
    localStorage.clear()
    setname("")
    history.push("/Signin")
  };
  useEffect(() => {
    setname(localStorage.getItem("userName"))
  }, [props.userset])
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">{props.AboutText}</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className={`dropdown-item ${location.pathname === "/Tracker" ? "active" : ""}`} to="/Tracker"> Tracker </Link></li>
                <li><Link className={`dropdown-item ${location.pathname === "/VaccineAvaliability" ? "active" : ""}`} to="/VaccineAvaliability"> Vaccine Avalibality</Link></li>
                <li><Link className={`dropdown-item ${location.pathname === "/Certificate" ? "active" : ""}`} to="/Certificate">Certificate</Link></li>
              </ul>
              </li>
          </ul>
          <form className="d-flex">
            {name ? <button type="button" className={`btn btn-${props.mode}`} onClick={logouthandler}> Logout </button> :
              <Link to="/Signin"><button type="button" className={`btn btn-${props.mode}`}> Login/Register </button></Link>}
          </form>
        </div>
      </div>
    </nav>
  )
}

Naivbar.prototype = {
  title: PropTypes.string.isRequired,
  AboutText: PropTypes.string.isRequired
}

Naivbar.defaultProps = {
  title: "Set title Here",
  AboutText: "Set About Text Here"
}
