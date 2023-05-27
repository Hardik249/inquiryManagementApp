import Sidebar from '../sidebar';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
} from 'react-router-dom';
import Moment from 'moment';
import { format } from 'date-fns';

const AddUsers = () => {
  console.log('add user')
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [data, setData] = useState(null)
  const [formErrors, setFormErrors] = useState(null);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [roles, setRoles] = useState('');
  const [DoB, setDoB] = useState('');
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState('');
   const [displayData, setDisplayData] = useState([]);

  // const formatDate = Moment(DoB).format('YYYY/MM/DD')
  // const date = format(DoB, 'yyyy/MM/dd')
  // const date = format(DoB, 'yyyy/MM/dd kk:mm:ss')

   const element = document.body.getElementsByClassName('.error')
   
  const add = (name, email, contact, roles, DoB, address, status) => {
    console.log('add')
    const data = {
      name: name,
      email: email,
      contact: contact,
      roles: roles,
      DoB: Moment(DoB).format('YYYY/MM/DD'),
      address: address,
      status: status
    }
    console.log('data',data)
    axios.post('http://localhost:3001/api/users/add', data, {
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
         console.log('response.data.status if')
         setError(response.data.message)
         if (data.name!=response.data.type) {
            //
            console.log('data.name if')
            const para = document.createElement("span");
      const node = document.createTextNode({error});
      para.appendChild(node);

      const element = document.getElementById("name-error");
      element.appendChild(para);

            // setDisplayData.push(response.data.message)
            setDisplayData(<span className='error' id='name-error'>{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /></span>)
            setDisplayData(response.data.message)
         }
         else if (data.email!=response.data.type) {
            //
            console.log('data.email else if')
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
      add(name, email, contact, roles, DoB, address, status);
      // element.classList.remove('error')
      const boxes = document.querySelectorAll('.error');

      boxes.forEach(box => {
        box.remove();
      });

      const para = document.createElement("span");
      const node = document.createTextNode({error});
      para.appendChild(node);

      const element = document.getElementById("name-error");
      element.appendChild(para);

      const para1 = document.createElement("span");
      const node1 = document.createTextNode({error});
      para1.appendChild(node);

      const element1 = document.getElementById("email-error");
      element1.appendChild(para1);

      // const nameElement = '<span className="error" id="name-error">{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /></span>';
      // const emailElement = '<span className="error" id="email-error">{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /></span>';


      const nameError = document.querySelector("#name-error")
      // nameError.insertAdjecentHTML('<span className='error' id='name-error'>{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /></span>')
      // document.appendChild('<span className='error' id='name-error'>{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /></span>')

      const emailError = document.querySelector("#email-error")
      // emailError.insertAdjecentHTML('<span className='error' id='email-error'>{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /></span>')
      // document.appendChild('<span className='error' id='email-error'>{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /></span>')
      
      // document.body.append('name-error')
      // document.body.append('email-error')
      
      // const nameError = document.getElementById("name-error")
      // const emailError = document.getElementById("email-error")
      // document.getElementById("name-error").innerHTML="<span className='error'>{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /></span>"
      // document.getElementById("email-error").innerHTML="<span className='error'>{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /></span>"
      
      // setError({
      //   [e.target.name] : e.target.value 
      // })
      // [e.target.name] : e.target.value
      // setDisplayData(error)
      // appendData()
   }; 

   // const prependData=()=> {
   //    // displayData.unshift(<div id="display-data"><pre>{this.state.postVal}</pre></div>);
   //    displayData.unshift(<span id='name-error'>{error}</span>);
   //    displayData.unshift(<span id='email-error'>{error}</span>);
   //    // this.setState({
   //    //   showdata : this.displayData,
   //    //   postVal : ""
   //    // });
   // }

   console.log(error)

   const appendData=()=> {
      console.log('appendData')
      // displayData.push({error})
      displayData.push(<div><span id='name-error'>{error}</span></div>);
      displayData.push(<div><span id='email-error'>{error}</span></div>);
      setDisplayData(error)
   }
   console.log('displayData', displayData)
   console.log('displayData type', typeof(displayData))
   console.log('error', error)
   

  return (
    <div className='ListUsers'>
      <div className='conatiner'>
        <div className='row'>
          <Sidebar className='col-sm-2'/>
          <div className='col-sm-10'>
            <div className="container">
              <div className="add-user-container">
                <form onSubmit={handleSubmit} className="form">
                <div className="form-content">
                   <h3 className="form-title">add user</h3>
                      <div className="form-group mt-3">
                         <label>
                            Enter Name:
                            <input type="text" className="form-control mt-1" value={name} 
                               onChange={(e) => setName(e.target.value)} placeholder="Enter Name"
                            />
                         </label>
                         <div>  
                         <span className='error' id='name-error'></span>
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
                        <span className='error' id='email-error'></span>
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
                               value={DoB} onChange={(e) => setDoB(e.target.value)} placeholder="Enter DoB"
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
                      <span className='error' >{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /></span>
                      <div className="d-grid gap-2 mt-3">
                         <button type="submit" value={loading ? 'Loading...' : 'Login'} onClick={handleSubmit} disabled={loading} >Add</button>
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
export default AddUsers;