import React, { useState } from 'react'
import{Navigate, json} from 'react-router-dom'

import '../App.css'
import { useContext } from 'react';
import { UserContext } from './UserContext';

function LoginPage() {
  const [password, setpassword] = useState('');
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [redirect, setredirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);

  async function login(ev) {
  ev.preventDefault();
      const response=await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({ email, password ,username}),
      headers: { 'Content-Type': 'application/json'},
      credentials:'include',
      })
    if (response.ok) {
      response.json().then(userinfo => {
        setUserInfo(userinfo)
        setredirect(true);
      })


    }
    else {
      alert( `Wrong credentials `)
    }
  };
  if (redirect) {
    return <Navigate to='/post' />
  }
  
    return (
    <>    
   <div className="container">
  <h2>Login Form</h2>
  <form id="loginForm" onSubmit={login}>
    <label>Email:</label>
            <input type="email"
              value={email}
              onChange={ev=>setemail(ev.target.value)}
              id="email" name="email" required />        
    <label>Password:</label>
            <input type="password"
              value={password}
              onChange={ev =>setpassword(ev.target.value)}
              id="password" name="password" required />
    <input type="submit" defaultValue="Login" />
  </form>
</div>

    </>        
  )
}

export default LoginPage