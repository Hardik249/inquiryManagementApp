import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams
} from 'react-router-dom';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import Popup from './users/Popup';
import {ListUsers} from './users/listUsers';

// ${_id}
//63490826671639fba66f6c51 deleted:true
//632e90c0d64fc53ceafe1ea9 deleted:false

const Check = () => {
	console.log('button Check')
  const navigate = useNavigate();
  const [userData, setUserData] = useState([])
  const [error, setError] = useState(null);
  const { _id } = useParams()
  console.log('id',_id)
  useEffect(() => {
  fetch(`http://localhost:3001/api/users/edit/632db88708d3c8f7490b9bd6`, {
    headers:{
      Authorization:sessionStorage.getItem("item_key")
    }
  })  
  .then(res => res.json())
  .then(
    (result) => {
      console.log('result', result)
      console.log('result.status', result.status)
      if (result.status=='Fail!') {
      	console.log('result.status if',result.status)
       setError('user not found')
      } else {
      	console.log('result.status else',result.status)
        // navigate("/getUsers");
      }
      const data = [result.data]
      setUserData(data)
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
  console.log('Buttons Check error', error)

}

// to='/getUsers'
// to={`/getUsers/${_id}`}

const Buttons = (props) => {
  const {users} = ListUsers();
  const {_id} = useParams()
  const [error, setError] = useState(null);
  console.log('Buttons error', error)
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen);
  }

  const deleteNow = () => {
    const confirmBox = window.confirm(
      "Do you really want to delete this Crumb?"
    )
    if (confirmBox === true) {
      console.log('deleteNow')
    }
  }
  
    const Delete = () => {
    console.log('delete')
    const [status, setStatus] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate();
      useEffect(() => {
    console.log('delete api')
      // DELETE request using axios with error handling
        axios.delete(`http://localhost:3001/api/users/delete/632db88708d3c8f7490b9bd6`, {
          headers:{
            Authorization:sessionStorage.getItem("item_key")
          }
        })
        .then(response => {
          console.log('Delete successful', response)
          setStatus('Delete successful')
          // return status
          // navigate('/listUsers');
          return response
        })
        .catch(error => {
            console.error('There was an error!', error);
            setErrorMessage(error.message);
            // return error
            return error
        });
      }, []);
    }
    // 632db88708d3c8f7490b9bd6

    const ask = () => {
      console.log('ask')
    const confirmBox = window.confirm(
      "Do you really want to delete User ?"
    )
    if (confirmBox === true) {
      console.log('ask true')
      // return Delete()
      // return <Delete/>
      axios.delete(`http://localhost:3001/api/users/delete/${_id}`, {
          headers:{
            Authorization:sessionStorage.getItem("item_key")
          }
        })
        .then(response => {
          console.log('Delete successful', response)
          console.info('deleted')
          alert('deleted')
          // setStatus('Delete successful')
          // return status
          // navigate('/listUsers');
          return response
        })
        .catch(error => {
            console.error('There was an error!', error);
            // setErrorMessage(error.message);
            // return error
            return error
        });
    }
  }

// to='/getUsers'
// to={`/getUsers/${_id}`}
 
	return(
    <button 
      className="btn float-center"
      onClick={ask}><i className="material-icons">deleteit</i>
    </button>
	);
}

// export {Buttons, Check}
export default Buttons;