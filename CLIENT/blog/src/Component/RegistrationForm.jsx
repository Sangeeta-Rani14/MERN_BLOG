import React, { useState } from 'react'
import './Rs.css'

function RegistrationForm() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');

async function register (ev){
  ev.preventDefault();

    const response =await fetch('http://localhost:4000/register',{
      method:'POST',
      body: JSON.stringify({ username, email, password }),
      headers:{'Content-Type':'application/json'},
    })
 
  if (response.status === 200) {
      alert('registration successful');
    } else {
      alert('registration failed');
    }
  }

  return (
      <>
<div className='container'>
  <h2>Registration Form</h2>
  <form id="registrationForm" onSubmit={register}>
    <label>Name:</label>
          <input type="text"
            placeholder='username'
            value={username}
            onChange={e=>setusername(e.target.value)} />
    <label>Email:</label>
          <input type="email"
            placeholder="email id"
            value={email}
            onChange={e => setemail(e.target.value)} />
    <label>Password:</label>
          <input type="password"
            placeholder='password'
            value={password}
            onChange={e => setpassword(e.target.value)} />
    <input type="submit" defaultValue="Register" />
  </form>
</div>

    </>
  )
}

export default RegistrationForm