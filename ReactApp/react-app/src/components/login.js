// import  { useState, useEffect } from 'react';
// const App = () => {
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// // ...
// const Login = async (email, password) => {
//    await fetch('http://localhost:3001/api/users/login', {
//       method: 'POST',
//       body: JSON.stringify({
//          email: email,
//          password: password,
//       }),
//       headers: {
//         "cache-control": "no-cache",
//         "postman-token": "eccea671-bc3a-4f0e-8608-45722c9d3990",
//         "Content-Type":"application/x-www-form-urlencoded",
//         "Content-Length":"<calculated when request is sent>",
//         "host": "localhost:3001",
//         "user-agent": "PostmanRuntime/7.29.2",
//         "accept": "*/*",
//         "accept-encoding": "gzip, deflate, br",
//         "connection": "keep-alive",
//         // 'Content-type': 'application/x-www-form-urlencoded',
//         'Access-Control-Allow-Origin':'*',
//       },
//    })
//       .then((response) => response.json())
//       .then((data) => {
//          // setPosts((posts) => [data, ...posts]);
//          setEmail('');
//          setPassword('');
//       })
//       .catch((err) => {
//          console.log(err.message);
//       });
// };

// const handleSubmit = (e) => {
//    e.preventDefault();
//    Login(email, password);
// };    

// return (
//    <div className="App">
//       <div className="add-post-container">
//          <form onSubmit={handleSubmit}>
//             <input type="text" className="form-control" value={email}
//                onChange={(e) => setEmail(e.target.value)}
//             />
//             <input name="" className="form-control" id="" cols="10" rows="8" 
//                value={password} onChange={(e) => setPassword(e.target.value)} 
//             />
//             <button type="submit">Login</button>
//          </form>
//       </div>
//       {/* ... */}
//    </div>
// );
// };




// import React, { Component } from "react";
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Link
// } from 'react-router-dom';

// function Login() {
//   return (
//     <div className="Login">
//       <form>
//         <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//           <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//           <input type="password" className="form-control" id="exampleInputPassword1"/>
//         </div>
//         <div className="mb-3 form-check">
//           <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//           <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//         </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// }
//     console.log('hi Login')
// export default Login;
