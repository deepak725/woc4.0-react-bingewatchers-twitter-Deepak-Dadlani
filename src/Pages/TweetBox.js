import { Avatar, Button } from '@material-ui/core'
import React,{ useState} from 'react'
import { db } from '../Utils/Firebase-init';
import { useAuth } from '../Context/AuthContext';
import { doc, setDoc,serverTimestamp } from "firebase/firestore"; 



function TweetBox() {
    const {currentUser} = useAuth();
    const [tweetMessage, setTweetMessage] = useState("");
    let count = 0;
   
  //  const [tweetImage, setTweetImage] = useState("");
    const value = "https://publicdomainvectors.org/photos/abstract-user-flat-1.png";
    // if(currentUser.emailVerified)
    // {
    //     value = currentUser.photoURL;
    // }
    const sendTweet = e => {
        e.preventDefault();
       count++;
       const timestamp = Date.now();
        let displayname = currentUser.displayName+timestamp;
        console.log(displayname);
        // db.collection('posts').add({
        //     displayName : currentUser.displayName,
        //     verified: currentUser.emailVerified,
        //     text: tweetMessage,
        //     avatar: value
        // })
        // db.collection("posts").doc("frank").set({
        //     displayName : currentUser.displayName,
        //     verified: currentUser.emailVerified,
        //     text: tweetMessage,
        //     avatar: value
        //   }).then(function() {
        //     console.log("data inserted!");
        //   });
         setDoc(doc(db, "posts", displayname), {
            displayName : currentUser.displayName,
            verified: currentUser.emailVerified,
            text: tweetMessage,
            avatar: value,
            timestamp:serverTimestamp()
          });
         
          
        
        setTweetMessage("")
 //       setTweetImage("")
    }

    return (

        <div className = "tweetBox">
            <form>
                <div className = "tweetBox__input">
                    <Avatar
                        src = "https://pbs.twimg.com/profile_images/1266938830608875520/f-eajIjB_400x400.jpg"
                    />
                    <input 
                        onChange = {(e) => setTweetMessage(e.target.value)}
                        value = {tweetMessage} 
                        placeholder = "What's happening?" 
                        type = "text" 
                    />
                </div>
              
               <input type="submit" onClick={sendTweet} className='tweetBox__tweetButton' value={'Tweet'}></input>
            </form>
        </div>
    )
}

export default TweetBox