import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
} from 'react-router-dom';
import Header from './header';
import Dashboard from './home';
import Login from './login';
import verifyJwtSession from './verifyJwtSession';
import axios from 'axios';


import  { useState, useEffect } from 'react';
const LoginApp = () => {
   const navigate = useNavigate();
   const [error, setError] = useState(null);
   const [item, setItem] = useState(null);
   const [loading, setLoading] = useState(false);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   // const [count, setCount] = useState(0);
   // ...
   const Login = async (email, password) => {
     console.log(email)
     console.log(password)
      axios.post('http://localhost:3001/api/users/login', {
           email: email,
           password: password,
         })
         .then(function (response) {
            console.log('response.data.message',response.data.message)
            console.log('response.data.auth',response.data.auth)
            setLoading(false);
            setError(response.data.message)

            // Assign value to a key
            sessionStorage.setItem("item_key", response.data.auth);
            navigate("/dashboard");
            
            // window.location="/Home/Home"
            // console.log('window',window)

            // <Route exact path="/">
            //   {loggedIn ? <Redirect to="/Home" /> : <PublicHomePage />}
            // </Route>

            // <Routes>
            //    <Route path="/Home" element={<Home />} />
            // </Routes>

            // const token = sessionStorage.setItem("token",response.data.auth);
               // window.location="/Home" Component={Dashboard}
            // console.log('jwt token', token)
           return response;
         })
         .catch(function (error) {
            console.log('error.response.data.message',error.response.data.message)
            setLoading(false);
            // alert(Object.values(error.response.data) + ".");
            if (error.response.status == 404) setError(error.response.data.message);
            else setError("Something went wrong. Please try again later.");
           return error.response.data.message;
         });
   };


   const handleSubmit = (e) => {
      setError(null);
      setLoading(true);
      e.preventDefault();
      Login(email, password);
   };    

   return (
      <div className="Login container">
         <div className="add-post-container">
            <form onSubmit={handleSubmit} className="form">
            <div className="form-content">
               <h3 className="form-title">Login</h3>
                  <div className="form-group mt-3">
                     <label>
                        Enter Email:
                        <input type="text" className="form-control mt-1" value={email}
                           onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email"
                        />
                     </label>
                  </div>
                  <div className="form-group mt-3">
                     <label>
                        Enter Password:
                        <input type="password" name="" className="form-control mt-1" id="" cols="10" rows="8" 
                           value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"
                        />
                     </label>
                  </div>
                  {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                  <div className="d-grid gap-2 mt-3">
                     <button type="submit" value={loading ? 'Loading...' : 'Login'} onClick={handleSubmit} disabled={loading} >Login</button>
                  </div>
               </div>
            </form>
         </div>
         {/* 
            ...
            // <div>Page View Count is:</div>
            // {count}
         */}
      </div>
   );
};


//  Home =  () => {
//   console.log('Home')
//   const [item, setItem, getItem] = useState(null);
//   axios.get('http://localhost:3001/api/users/list/:page',
//     {
//       headers:{
//           Authentication:sessionStorage.getItem("item_value")
//         }
//    })
//   .then((response)=>{
//     console.log('response', response)
//     return response
//   })
//   .catch((error)=>{
//     console.log('error', error)
//     return error
//   })
//   .then(function () {
//     // always executed
//   });
// }


export default LoginApp;