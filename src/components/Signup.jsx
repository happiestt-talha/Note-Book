import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [creds, setCreds] = useState({name: "", email: "", password: "",cpassword:""});
  const navigate=useNavigate();

  const handleSubmit =async (e) => {
    e.preventDefault();
    // console.log('Signup form submitted with values: ', creds);
    if(creds.password!==creds.cpassword){
      alert('passwords do not match')
      // console.log('passwords do not match, User cancelled signup') ;
      return
    }
    const response=await fetch('http://localhost:5000/api/auth/signup', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: creds.name, email: creds.email, password: creds.password })
    })
    const data = await response.json();

    // console.log('response: ', data);
    if (data.success) {
      localStorage.setItem('token', data.token)
      // window.location='/'
      navigate('/')
      console.log('signup success');
    }
  }

  const hanldeChange = (e) => {
    setCreds({...creds, [e.target.id]: e.target.value})
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" className="form-control" onChange={hanldeChange} value={creds.name} id="name" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control" onChange={hanldeChange} value={creds.email} id="email" />
          </div>

          <div className="mb-3">
            <label className="form-check-label" htmlFor="password">Password:</label>
            <input type="password" className="form-control" onChange={hanldeChange} value={creds.password} id="password" />
          </div>
          <div className="mb-3">
            <label className="form-check-label" htmlFor="cpassword">Confirm Password:</label>
            <input type="password" className="form-control" onChange={hanldeChange} value={creds.cpassword} id="cpassword" />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default Signup