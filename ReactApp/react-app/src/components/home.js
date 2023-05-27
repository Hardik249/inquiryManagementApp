import React from 'react'  
import axios from 'axios';
import  { useState, useEffect } from 'react';
import LoginApp from './Login';


// class Home extends React.Component {  
//   render() {  
//     return <h1>Home</h1>  
//   }  
// }  
console.log('home')

function Home () {
  console.log('Home')
  return (
    <div className="Home">
      Hi Home      
    </div>
  );

}


export default Home


/// export function callGetUser(_id = ""){
//   const token = localStorage.getItem("token") || "";
//   const url = `http://localhost:3001/api/users/${_id}`;    
//   const headers = 
//   {      
//       "authorization": token,      
//   };       
//   axios.get(url, { headers: headers })        
//       .then((response) => {          
//             return response.data;  
//         })        
//       .catch((error) => {          
//             console.log(error);               
//        });    
// }