import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  // useParams,
  useLocation
} from 'react-router-dom';
import { useParams } from 'react-router'
import Header from './components/header';
import Topbar from './components/topbar'
import Sidebar from './components/sidebar'
import LoginApp from './components/Login';
import Buttons from './components/buttons';
import VerifyJwtSession from './components/verifyJwtSession';
import Home from './components/home';
import Dashboard from './components/dashboard';
import AddUsers from './components/users/addUsers';
import {ListUsers} from './components/users/listUsers';
import GetUsers from './components/users/getUsers';
import UpdateUsers from './components/users/updateUsers';
import DeleteUsers from './components/users/deleteUsers';
import Popup from './components/users/Popup';
import AddInquiries from './components/inquiries/addInquiries';
import ListInquiries from './components/inquiries/listInquiries';
import GetInquiries from './components/inquiries/getInquiries';
import UpdateInquiries from './components/inquiries/updateInquiries';
import ChangeStatus from './components/inquiries/changeStatus';
import DeleteInquiries from './components/inquiries/deleteInquiries';
import roles from './roles/roles';
import Admin from './roles/admin';
import Hr from './roles/hr';
import Sales from './roles/sales';
import axios from 'axios';
import jwt from 'jwt-decode' // import dependency
import  { useState, useEffect } from 'react';

// Access value associated with the key
var item_value = sessionStorage.getItem("item_key");
let isAccess = false;
const windowUrl = window.location.search;
const params = new URLSearchParams(windowUrl);
console.log('windowUrl', windowUrl)
console.log('params', params)


function App() {
  // const { pathname } = useLocation();
  let {_id} = useParams()
      {console.log('i',_id)}
  console.log('{id}',{_id})
  console.log('id',_id)
  // const location = useLocation();
  // console.log('location',location);
  console.log('App call')
  const params = useParams();
  console.log('params',params)
  if (item_value) {
    console.log('item_value if')
    const decode = jwt(item_value); // decode your token here
    console.log('isAccess if')
      return (
        <div className='App'>
          <Header/>
          <Topbar/>
          <Router>  
            <Routes>    
                <Route path="/dashboard" element={<Dashboard />} />  
                <Route path="/addUsers" element={<AddUsers />} />  
                <Route path="/listUsers" element={<ListUsers />} />  
                <Route path='/getUsers/:_id' element={<GetUsers />} />  
                <Route path="/updateUsers" element={<UpdateUsers />} />  
                <Route path="/deleteUsers/:_id" element={<Buttons />} />  
                <Route path="/addInquiries" element={<AddInquiries />} />  
                <Route path="/listInquiries" element={<ListInquiries />} />  
                <Route path="/getInquiries" element={<GetInquiries />} />  
                <Route path="/updateInquiries" element={<UpdateInquiries />} />  
                <Route path="/changeStatus" element={<ChangeStatus />} />  
                <Route path="/deleteInquiries" element={<DeleteInquiries />} />  
            </Routes>  
          </Router>  
        </div>
      )
    
    console.log('item_value end')
    return (
    <div className='App'>
      <Header/>
      <Router>  
        <Routes>    
            <Route path="/" element={<LoginApp />} />   
            <Route path="/login" element={<LoginApp />} />    
        </Routes>  
      </Router>
    </div>
    );    
  } else {
    console.log('App else')
    return(
      <div className="App">
        <Header/>
        <Router>  
          <Routes>    
              <Route path="/" element={<LoginApp />} />  
              <Route path="/login" element={<LoginApp />} />  
          </Routes>  
        </Router>  
      </div>
      );
  }
}




export default App;