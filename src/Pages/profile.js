import React, { useState,useEffect } from 'react'
import { Avatar } from '@material-ui/core'

import { useAuth } from '../Context/AuthContext';
const Profile = () => {
  const {currentUser} = useAuth();
  //const {name,setName} = useState('');
  let name,email,avatar;
  if (currentUser !== null) {
    currentUser.providerData.forEach((profile2) => {
      
     
      email = profile2.email;
      avatar = profile2.photoURL;
      console.log(profile2);
    })
  }
  name = currentUser.displayName;
    return (
       
      <div className='signupFrm'>
        
        <form action="" className="form" >
        <div className='Editdetails'>   
        <Avatar src = {avatar == null ? "https://publicdomainvectors.org/photos/abstract-user-flat-1.png":avatar} />
       
        <h4 className="title3">{email}</h4>
       </div>
        <div className='Editdetails'>   
            <p className="title2">{name == null ? "Yet to set username!" : name }</p>
        <a href='/edit-profile' className='editopt' >Edit</a>
        </div>
        
        
        </form>
      </div>
    );
  };

export default Profile
