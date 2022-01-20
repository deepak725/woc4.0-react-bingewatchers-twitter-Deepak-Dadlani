import { Avatar, Button } from '@material-ui/core'
import React,{ useState} from 'react'
import { db } from '../Utils/Firebase-init';
import { useAuth } from '../Context/AuthContext';
import { doc, setDoc,serverTimestamp } from "firebase/firestore"; 



function TweetBox() {
    const {currentUser} = useAuth();
    const [tweetMessage, setTweetMessage] = useState("");
    const [Error, setError] = useState("");

    let count = 0;
    let avatar;
//   //  const [tweetImage, setTweetImage] = useState("");
//     const value = "https://publicdomainvectors.org/photos/abstract-user-flat-1.png";
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
        avatar = currentUser.photoURL;
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
            avatar: currentUser.photoURL == null ? "https://publicdomainvectors.org/photos/abstract-user-flat-1.png":currentUser.photoURL,
            timestamp:serverTimestamp()
          }).then(function(){
                console.log("Successfullyy tweeted!");
          }).catch((error) => {
           alert('username is not set')
             })
       
         
          
        
        setTweetMessage("")
 //       setTweetImage("")
    }

    const Message = e => {

        if(currentUser.displayName == null)
            alert("Username is null");

            Message("Login to tweet");  
    }

    return (

        <div className = "tweetBox">
            <form >
            <p className='Error'>{Error}</p>
                <div className = "tweetBox__input">
                    <Avatar
                       src = {currentUser ? currentUser.photoURL == null ? "https://publicdomainvectors.org/photos/abstract-user-flat-1.png":currentUser.photoURL: "https://publicdomainvectors.org/photos/abstract-user-flat-1.png" }
                    />
                    <input 
                        onChange = {(e) => setTweetMessage(e.target.value)}
                        value = {tweetMessage} 
                        placeholder = "What's happening?" 
                        type = "text" 
                        required
                    />
                </div>
              
               <input type="submit"  onClick={tweetMessage == ""?Message: sendTweet} className='tweetBox__tweetButton' value={'Tweet'}></input>
            </form>
        </div>
    )
}

export default TweetBox