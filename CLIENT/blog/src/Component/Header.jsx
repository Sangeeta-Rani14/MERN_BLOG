import { Link } from 'react-router-dom'
import '../App.css'
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from './UserContext';

function Header() {
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials:'include'
    }).then(res => {
      res.json().then(userInfo => {
        setUserInfo(userInfo);
      })
    })

  }, []);
  
  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }


    const username = userInfo?.email;

return (
    <>
    <header>
        <Link to="/post" className="logo">Anime Verse</Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create New Post</Link>
            <a onClick={logout}> Logout</a>

          </>
        )}
        {!username && (
          <>
            <Link to="/home">HOME</Link>
            <Link to="/registration">Registration</Link>
            <Link to="/login">LogIN</Link>
          </>
        )}
        </nav>
    </header>
    </>
)
}

export default Header