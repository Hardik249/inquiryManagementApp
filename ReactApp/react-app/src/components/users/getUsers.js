import * as React from "react";
import Sidebar from '../sidebar';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  // useParams,
  useSearchParams
} from 'react-router-dom';
import Moment from 'moment';
import { format } from 'date-fns';
import {
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import { useParams } from 'react-router'
import {ListUsers} from './listUsers';

const GetUsers = () => {
  console.log('Get user')

  const [items, setItems] = useState([]);
  // const [item, setItem] = useState(0);
  // const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [id, setId] = useState("");

  const navigate = useNavigate();
  // const [error, setError] = useState(null);
  const [data, setData] = useState(null)
  const [formErrors, setFormErrors] = useState(null);
  // const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [roles, setRoles] = useState('');
  const [DoB, setDoB] = useState(Moment('').format('YYYY/MM/DD'));
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState('');

  const [userData, setUserData] = useState([])
  const [displayData, setDisplayData] = useState([]);

  // const [id, setId] = useState({_id:{}})
  const [error, setError] = useState(null);
  const [item, setItem] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log('searchParams',searchParams)
  console.log('searchParams e',searchParams.entries)
  let {_id} = useParams();
  // console.log('params', params)
  console.log('useParams', useParams())
  console.log('_id',_id)
  console.log('{_id}',{_id})

  // function handleSubmitt(event) {
  //   event.preventDefault();
  //   // The serialize function here would be responsible for
  //   // creating an object of { key: value } pairs from the
  //   // fields in the form that make up the query.
  //   let params = serializeFormQuery(event.target);
  //   setSearchParams(params);
  // }

  // ${_id}
  // 63490826671639fba66f6c51 deleted:false
  // 632dc28acb0495b3a3a2e499 deleted:false
  // 632e90c0d64fc53ceafe1ea9 deleted:true
  // 632dc28acb0495b3a3a2e499
  // ${id}
  // http://localhost:3001/api/users/edit/${id}
  // https://gorest.co.in/public/v2/user/4083


  useEffect(() => {
    fetch(`http://localhost:3001/api/users/edit/${_id}`, {
      headers:{
        Authorization:sessionStorage.getItem("item_key")
      }
    })  
    .then(res => res.json())
    .then(
      (result) => {
      console.log('result', result)
      console.log('result.status', result.status)
        const data = [result.data]
        setUserData(data)
        setName(result.data.name)
        setEmail(result.data.email)
        setContact(result.data.contact)
        setRoles(result.data.roles)
        console.log('date', result.data.DoB)
        setDoB(Moment(result.data.DoB).format('YYYY/MM/DD'))
        setAddress(result.data.address)
        setStatus(result.data.status)
        // setSearchParams(result.data._id)
        setId(result.data._id)
        // setSearchParams()
        // const fields = ['name','email','contact', 'roles','DoB','address','status']
        // fields.forEach(field=>setFieldsValue(field, user[field], false))
        // setUserData(user)
        // console.log('result.data.docs', result.data.docs)
        // console.log('result.data.totalDocs', result.data.totalDocs)
        // const users = result.data.docs
        // setItems(users)
        // const totalDocs = result.data.totalDocs
        // setItem(totalDocs)
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

    console.log('data', userData)
    console.log('data type', typeof(userData))
    // return response
    // return setItem(response)
  }, [])

  const update = (name, email, contact, roles, DoB, address, status) => {
    console.log('update')
    const data = {
      name: name,
      email: email,
      contact: contact,
      roles: roles,
      DoB: Moment(DoB).format('YYYY/MM/DD'),
      address: address,
      status: status
    }

  //${_id}
   //63490826671639fba66f6c51 deleted:false
   //632e90c0d64fc53ceafe1ea9 deleted:true

    console.log('data',data)
    axios.put(`http://localhost:3001/api/users/update/${_id}`, data, {
      headers: {
        Authorization:sessionStorage.getItem("item_key")
      },
    }) 
    .then(function (response) {
      console.log('data',data)
      console.log('data.name',data.name)
      console.log('response.data.type',response.data.type)
      console.log('match',data.name==response.data.type)
      console.log('match',data.name!=response.data.type)
      console.log('response',response)
      console.log('response.request',response.request)
      console.log('response.request.response',response.request.response)
      console.log('response.status', response.status)
      console.log('response.data.message',response.data.message)
      console.log('response.data',response.data)
      console.log('response.data.path',response.data.path)
      setLoading(false);

      // displayData = response.data.message
      
      if (response.data.status == "Add User Validation fail") {
         //
         setError(response.data.message)
         if (data.name!=response.data.type) {
            //
            // setDisplayData.push(response.data.message)
            setDisplayData(<span className='error' id='name-error'>{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /></span>)
            setDisplayData(response.data.message)
         }
         else if (data.email!=response.data.type) {
            //
            // setDisplayData.push(response.data.message)
            setDisplayData(<span className='error' id='email-error'>{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /></span>)
            setDisplayData(response.data.message)
         }
         else if(data.contact!=response.data.type) {
            //
            // setDisplayData.push(response.data.message)
            setDisplayData(<span>{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /></span>)
            setDisplayData(response.data.message)
         }
         else if(data.roles!=response.data.type) {
            //
            // setDisplayData.push(response.data.message)
            setDisplayData(<span>{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /></span>)
            setDisplayData(response.data.message)
         }
         else if(data.DoB!=response.data.type) {
            //
            // setDisplayData.push(response.data.message)
            setDisplayData(<span>{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /></span>)
            setDisplayData(response.data.message)
         }
         else if(data.address!=response.data.type) {
            //
            // setDisplayData.push(response.data.message)
            setDisplayData(<span>{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /></span>)
            setDisplayData(response.data.message)
         }
         else if(data.status!=response.data.type) {
            //
            // setDisplayData.push(response.data.message)
            setDisplayData(<span>{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /></span>)
            setDisplayData(response.data.message)
         }
      } else {
         navigate("/listUsers");
      }
      
      // if (response.data.status == "Add User Validation fail") setError(response.data.message);
      // else navigate("/listUsers");
      
      // // Assign value to a key
      // sessionStorage.setItem("item_key", response.data.auth);
  
      
      
     return response;
   })
   .catch(function (error) {
      console.log('update error',error)
      console.log('error.response.data.message',error.response.data.message)
      console.log('error.response.data',error.response.data)
      console.log('error.response.data.status',error.response.data.status)
      setLoading(false);
      // alert(Object.values(error.response.data) + ".");
      if (error.response.status == 404) setError(error.response.data.message);
      else if (error.response.status == 401) setError(error.response.data.message);
      else if (error.response.status == 500) setError(error.response.data.message);
      // else if(error.response.data.status=='access denied!') 
      else setError("Something went wrong. Please try again later.");
     return error.response.data.message;
   });
  }

  const handleSubmit = (e) => {
      setError(null);
      setLoading(true);
      e.preventDefault();
      update(name, email, contact, roles, DoB, address, status);
      // element.classList.remove('error')
      const boxes = document.querySelectorAll('.error');

      boxes.forEach(box => {
        box.remove();
      });
      // document.body.append('name-error')
      // document.body.append('email-error')
      const nameError = document.getElementById("name-error")
      const emailError = document.getElementById("email-error")
      document.getElementById("name-error").innerHTML="<span className='error'>{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /></span>"
      document.getElementById("email-error").innerHTML="<span className='error'>{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /></span>"
      // setError({
      //   [e.target.name] : e.target.value 
      // })
      // [e.target.name] : e.target.value
      // setDisplayData(error)
      // appendData()
   }; 
   // {id}

  return (
    <div className='GetUsers'>
      <div className='conatiner'>
        <div className='row'>
          <Sidebar className='col-sm-2'/>
          <div className='col-sm-10'>
            <p className='text-center'>Welcome to your GetUsers  {_id}</p>
            <div className="container">
              <div className="add-user-container">
                <form onSubmit={handleSubmit} className="form" autoComplete='off'>
                <div className="form-content">
                   <h3 className="form-title">edit user</h3>
                      <div className="form-group mt-3">
                         <label>
                            Enter Name:
                            <input type="text" className="form-control mt-1" value={name} autoComplete='off'
                               onChange={(e) => setName(e.target.value)} placeholder="Enter Name"
                            />
                         </label>
                         <div>
                        <span>{displayData}</span>
                           </div>  
                      </div>
                      <div className="form-group mt-3">
                         <label>
                            Enter Email:
                            <input type="text" className="form-control mt-1" value={email}
                               onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email"
                            />
                         </label>
                         <div>
                        <span>{displayData}</span>
                           </div>
                        
                      </div>
                      <div className="form-group mt-3">
                         <label>
                            Enter Contact:
                            <input type="number" name="" className="form-control mt-1" id="" cols="10" rows="8" 
                               value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Enter Contact"
                            />
                         </label>
                      </div>
                      <div className="form-group mt-3">
                         <label>
                            Enter Roles:
                            <input type="number" name="" className="form-control mt-1" id="" cols="10" rows="8" 
                               value={roles} onChange={(e) => setRoles(e.target.value)} placeholder="Enter Roles"
                            />
                         </label>
                      </div>
                      <div className="form-group mt-3">
                         <label>
                            Enter DoB:
                            <input type="date" name="" className="form-control mt-1" id="" cols="10" rows="8" 
                               value={DoB} onChange={(e) => setDoB(Moment(e.target.value).format('YYYY-mm-dd'))} placeholder="Enter DoB"
                            />
                         </label>
                      </div>
                      <div className="form-group mt-3">
                         <label>
                            Enter address:
                            <input type="text" name="" className="form-control mt-1" id="" cols="10" rows="8" 
                               value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter address"
                            />
                         </label>
                      </div>
                      <div className="form-group mt-3">
                         <label>
                            Enter status:
                            <input type="number" name="" className="form-control mt-1" id="" cols="10" rows="8" 
                               value={status} onChange={(e) => setStatus(e.target.value)} placeholder="Enter status"
                            />
                         </label>
                      </div>
                      <span>{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /></span>
                      <div className="d-grid gap-2 mt-3">
                         <button type="submit" value={loading ? 'Loading...' : 'Login'} onClick={handleSubmit} disabled={loading} >Update</button>
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default GetUsers;