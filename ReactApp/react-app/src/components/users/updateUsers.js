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

const UpdateUsers = () => {
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

  return (
    <div className='UpdateUsers'>
      <div className='conatiner'>
        <div className='row'>
          <Sidebar className='col-sm-2'/>
          <div className='col-sm-10'>
            <p>Welcome to your UpdateUsers</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpdateUsers;