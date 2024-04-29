import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  let navigate = useNavigate();

  const [creds, setCreds] = useState({ email: "", password: "" })

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    console.log('creds: ', creds);
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: creds.email, password: creds.password })
    })
    const data = await response.json()
    console.log('response: ', data);
    if (data.success) {
      localStorage.setItem('token', data.token)
      // window.location='/'
      navigate('/')
      console.log('login success');
    }
    else {
      alert('invalid credentials')
    }

  }
  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.id]: e.target.value })
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" onChange={handleChange} className="form-control" id="email" />
          {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" onChange={handleChange} className="form-control" id="password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default Login