import React, { useState,useEffect } from 'react'
import { useAuth } from '../Context/AuthContext';
const Profile = () => {
  const {currentUser} = useAuth();
  //const {name,setName} = useState('');
  let name;
  if (currentUser !== null) {
    currentUser.providerData.forEach((profile2) => {
      
      name = profile2.displayName;
     
    })
  }
 
    return (
       
      <div className='profile'>
        
       <p>{name}</p>
        <a href='/edit-profile'>Edit</a>
      </div>
    );
  };

export default Profile
