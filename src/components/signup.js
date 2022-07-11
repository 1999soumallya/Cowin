import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../StyleSheet/Signup.css'
import img1 from '../images/backgrounds-login.jpeg'
const axios = require('axios')

const Signup = (props) => {
    const [registercredentials, setregistercredentials] = useState({ name: "", email: "", password: "", address: "", city: "", state: "", zip: "" })
    const history = useHistory()
    const handleSubmit = async (e) => {
        e.preventDefault()
        var postData = {
            name: registercredentials.name,
            email: registercredentials.email,
            password: registercredentials.password,
            address: registercredentials.address,
            city: registercredentials.city,
            state: registercredentials.state,
            zip: registercredentials.zip
        };
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };
        const response = await axios.post('createuser', postData, axiosConfig)
        const json = await response.data
        localStorage.setItem("userName", json.name)
        history.push("/")
        console.log(json);
    }
    const onChange1 = (e) => {
        setregistercredentials({ ...registercredentials, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <img src={img1} alt="" width={window.innerWidth} />
            <form className={`row g-3 text-${props.mode === 'light' ? 'dark' : 'light'}`} onSubmit={handleSubmit}>
                <div className="container1">
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label1"> Name </label>
                        <input type="text" className="form-control2" id="email" name="email" defaultValue={registercredentials.name} onChange={onChange1} placeholder='Enter your name' required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="email1">Email address/Phone Number</label>
                        <input type="text" className="form-control3" id="email" name="email" defaultValue={registercredentials.email} onChange={onChange1} aria-describedby="emailHelp" placeholder="name@example.com" required />
                    </div>
                    <div className="col-md-7">
                        <label htmlFor="inputPassword4" className="Password1">Password</label>
                        <input type="password" className="form-control4" id="inputPassword4" name="password" defaultValue={registercredentials.password} onChange={onChange1} placeholder="Pleace Enter your password" required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label4">Address</label>
                        <input type="address" className="form-control5" id="inputAddress" name="Address" defaultValue={registercredentials.address} onChange={onChange1} placeholder="Pleace Enter your Address" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label5">City</label>
                        <input type="text" className="form-control6" id="inputCity" defaultValue={registercredentials.city} onChange={onChange1} placeholder="Pleace Enter your city" required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label6">State</label>
                        <input type="text" className="form-control8" id="inputState" defaultValue={registercredentials.state} onChange={onChange1} placeholder="Pleace Enter your state" required />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label7">Zip</label>
                        <input type="text" className="form-control7" id="inputZip" defaultValue={registercredentials.zip} onChange={onChange1} placeholder="Enter your zip code" required />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </div>
                    <p>If do not have a aaccount then <Link to="/Signin"><button type="button" className="btn btn-link">LogIn</button></Link></p>
                </div>
            </form >
        </div >
    )
}
export default Signup
