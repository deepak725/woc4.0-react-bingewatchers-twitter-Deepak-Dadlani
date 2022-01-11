import React from 'react'
import { useAuth } from '../Context/AuthContext';
const Profile = () => {
  const {currentUser} = useAuth();
    return (
       
      <div className='profile'>
        
        <br/>
        <p>{JSON.stringify(currentUser,null,2)}</p>
      </div>
    );
  };

export default Profile
