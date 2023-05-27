import Sidebar from './sidebar';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import React, {Component} from 'react';

const Dashboard = () => {
  const [users, setUsers] = useState(0);
  const [inquiries, setInquiries] = useState(0);

  React.useEffect(() => {
    fetch('http://localhost:3001/api/inquire/inquiryList', {
      headers:{
        Authorization:sessionStorage.getItem("item_key")
      },
    })
    .then(res => res.json())
    .then(
      (result) => {
        // console.log('result', result)
        console.log('result.data', result.data)
        console.log('result.data.length', result.data.length)
        const totalDocs = result.data.length
        setInquiries(totalDocs)
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

    fetch('http://localhost:3001/api/users/list/1', {
      headers:{
        Authorization:sessionStorage.getItem("item_key")
      }
    })
    .then(res => res.json())
    .then(
      (result) => {
        // console.log('result', result)
        // console.log('result.data.docs', result.data.docs)
        console.log('result.data.totalDocs', result.data.totalDocs)
        const totalDocs = result.data.totalDocs
        setUsers(totalDocs)
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
    <div className='Dashboard'>
      <div className='conainer'>
        <div className='row'>
          <Sidebar className='col-sm-2 row'/>
          <div className='col-sm-5 row'>
            <p className='text-end'>No. of Users<br/>{users}</p>
          </div>
          <div className='col-sm-5 row'>
            <p className='text-end'>No. of Inquiries<br/>{inquiries}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;