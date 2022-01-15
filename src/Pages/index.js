import React,{ useEffect, useState} from 'react'
import { useAuth } from '../Context/AuthContext';
import TweetBox from './TweetBox';
import Post from './Post';
import { db } from '../Utils/Firebase-init';
import { collection, getDocs } from "firebase/firestore";

const Home = () => {
  const {currentUser} = useAuth();
  const [posts, setPosts] = useState([]);

   
      // const querySnapshot = await getDocs(collection(db, "posts"));
      // querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      // });
  return (
      <div className='Home'>

        <TweetBox />
        {/* {posts.map(post => ( */}
                <Post 
               
                displayName = "deepak"
                verified = "true"
                text = "hello"
                avatar = "https://publicdomainvectors.org/photos/abstract-user-flat-1.png"
            />
            {/* ))} */}
      </div>
    );
  };

export default Home
