import React, { useState } from "react";
import '../StyleSheet/Signin.css';
import img1 from '../images/backgrounds-login.jpeg'
import { Link, useLocation } from "react-router-dom";
const axios = require('axios')

const Signin = (props) => {
  const [credentials, setcredentials] = useState({ email: "", password: "" })
  const history = useLocation()
  const handleSubmit = async (e) => {
    e.preventDefault()
    var postData = {
      email: credentials.email,
      password: credentials.password
    };
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
    };
    const response = await axios.post('login', postData, axiosConfig)
    const json = await response.data
    localStorage.setItem("userName", json.name)
    history.push("/")
    console.log(json);
  }
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <img src={img1} alt="" width={window.innerWidth} />
      <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <form className="Signin-form" onClick={handleSubmit}>
          <label htmlFor="email" className="Email">Email address</label>
          <input type="email" className="form-control1" id="email" name="email" defaultValue={credentials.email} onChange={onChange} aria-describedby="emailHelp" placeholder="name@example.com" required />
          <label htmlFor="password" className="Password">Password</label>
          <input type="password" className="form-control" id="password" name="password" defaultValue={credentials.password} onChange={onChange} placeholder="Password" required />
          <button type="submit" className="btn btn-primary">Sign in</button>
          <div className="checking">
            <p>If do not have a aaccount then <Link to="/Signup"><button type="button" className="btn btn-link">Register</button></Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signin