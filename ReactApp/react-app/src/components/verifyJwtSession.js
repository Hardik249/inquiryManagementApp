import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Header from './header';
import Home from './home';
import Login from './login';
import CheckSession from './checkSession';
import axios from 'axios';
import  { useState, useEffect } from 'react';
import Dashboard from './dashboard'

export default function VerifyJwtSession() {
    console.log('VerifyJwtSession')
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3001/api/users/jwtVerify',    {
        headers:{
            Authorization:sessionStorage.getItem("item_key")
        }
    })
    .then(res => res.json())
    .then(
      (result) => {
        console.log('result', result)
        // console.log('result.data.docs', result.data.docs)
        console.log('result.data.name', result.data.name)
        const LoggedInUser = result.data.name
        console.log('LoggedInUser',LoggedInUser)
        setUser(LoggedInUser)
        localStorage.setItem('user', LoggedInUser)
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log('error', error)
        return error
        // return setError(error)
      }
    )

  }, [])

  return (
    <div className='VerifyJwtSession'>
        {user}
    </div>
    );


}