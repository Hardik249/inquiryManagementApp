import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
} from 'react-router-dom';
import Header from './header';
import Home from './home';
import LoginApp from './Login';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import  { useState, useEffect } from 'react';
import roles from '../roles/roles';
import Admin from '../roles/admin';
import Hr from '../roles/hr';
import Sales from '../roles/sales';
import Dashboard from './dashboard';




export default function CheckSession() {
    console.log('CheckSession')
    const [item, setItem] = useState(null);

    // Access value associated with the key
    var item_value = sessionStorage.getItem("item_key");
    console.log('CheckSession item_value', item_value);
    
    if (item_value) {
        console.log('item_value if')
        // const listItems = roles.map((role) =>
        //     <li key={role.toString()}>
        //       {role}
        //     </li>
        //   );
        //   console.log(listItems)
        //   const listItem = Admin.map((role) =>
        //     <li key={role.toString()}>
        //       {role}
        //     </li>
        //   );
        //   console.log(listItem)
        // return <Dashboard/>
        // return(
        //     <div className='CheckSession'>
        //         <Dashboard/>
        //     </div>
        //     );
                ReactDOM.render(
                    // <Router>
                      <Dashboard/>
                    // </Router>
                      // , document.getElementById('Home')
                    );  
        
    } else {
        console.log('item_value else')    
            ReactDOM.render(
                <Router>
                  <LoginApp/>
                </Router>
                  , document.getElementById('jwt')
                );
        
    }  
}

