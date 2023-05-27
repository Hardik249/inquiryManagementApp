import Sidebar from '../sidebar';
import React, { useState } from 'react';
import Popup from './Popup';
// import Popup from 'reactjs-popup';
// import React from 'react';
// import { useState, useEffect } from 'react';
// import Popup from './Popup';
import 'reactjs-popup/dist/index.css';
// import Popup from 'reactjs-popup';

const DeleteUsers = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen);
  }

  return (
    <div className='DeleteUsers'>
      <div className='conatiner'>
        <div className='row'>
          <Sidebar className='col-sm-2'/>
          <div className='col-sm-10 float-center'>
          <input className='float-center'
            type="button"
            value="Click to Open Popup"
            onClick={togglePopup}
          />
          <button type="button" className="btn float-center" onClick={togglePopup}>Link</button>
            <p>Welcome to your deleteUsers</p>
            {isOpen && <Popup
              content={<>
                <b>Design your Popup</b>
                <p>Welcome to your deleteUsers</p>
                <button>Test button</button>
              </>}
              handleClose={togglePopup}
            />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeleteUsers;