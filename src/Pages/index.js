import React from 'react'
import { useAuth } from '../Context/AuthContext';

const Home = () => {
  const {currentUser} = useAuth();  
  return (
      <div className='Home'>

    
        <h1 >Home Page</h1>
      <p> {`The curret user is : ${currentUser}`} </p>

      </div>
    );
  };

export default Home
