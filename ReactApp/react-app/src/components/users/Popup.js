import React from "react";
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router'

const Popup = (props) => {
  
    console.log('delete3')
    const Delete = () => {
    const [status, setStatus] = useState('')
    const [errorMessage, setErrorMessage] = useState(null)
    let {_id} = useParams();
    console.log('id',_id)
      console.log('deletre')
      useEffect(() => {
      // DELETE request using axios with error handling
        axios.delete(`http://localhost:3001/api/users/delete/${_id}`, {
          headers:{
            Authorization:sessionStorage.getItem("item_key")
          }
        })
        .then(response => {
          console.log('Delete successful', response)
          setStatus('Delete successful')
          // return status
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

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;