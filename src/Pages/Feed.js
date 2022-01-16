import React,{useEffect,useState} from 'react'
import { db } from '../Utils/Firebase-init';
import { collection,query ,getDocs,orderBy, Timestamp,onSnapshot } from "firebase/firestore";
import Post from './Post';
const  Feed = () => {
//     const timestamp = Date.now();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        const collectionRef = collection(db, "posts");
        const q = query(collectionRef, orderBy("timestamp", "desc"));
    
        const unsub = onSnapshot(q, (snapshot) =>
          setDetails(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        );
    
        return unsub;
      }, []);

      console.log(details);
    
//      const userData = async () => {
//     const q = query(collection(db, "posts"),orderBy(Date.now()));

//     const querySnapshot = await getDocs(q);
//     const data = querySnapshot.docs.map((doc) => ({
//       // doc.data() is never undefined for query doc snapshots
//       ...doc.data(),
//         id:doc.id
//     }));
//     setDetails(data);
//   };
//   console.log(details);

// useEffect(() => {
//     userData();
//   }, []);
    return (
        <div>
             {details.map((post,id) => {
            return( 
                <Post
                key = {post.text}
                displayName = {post.displayName}
                
                verified = {post.verified}
                text = {post.text}
                avatar = {post.avatar}

                />    
                  
            );
          })}
        </div>
    )
}

export default Feed
