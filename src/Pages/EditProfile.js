import React, { useState } from 'react'
import { useAuth } from '../Context/AuthContext'
import {updateProfile} from "firebase/auth"
import { useNavigate } from 'react-router-dom';

// import { useEffect, useState } from "react";
// import { useAuth,upload } from "../Context/AuthContext";
// export default function EditProfile() {
//   const currentUser = useAuth();
//   const [photo, setPhoto] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [photoURL, setPhotoURL] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");

//   function handleChange(e) {
//     if (e.target.files[0]) {
//       setPhoto(e.target.files[0])
//     }
//   }

//   function handleClick() {
//     upload(photo, currentUser, setLoading);
//   }

//   useEffect(() => {
//     if (currentUser?.photoURL) {
//       setPhotoURL(currentUser.photoURL);
//     }
//   }, [currentUser])

//   return (
//     <div className="fields">
//       <input type="file" onChange={handleChange} />
//       <button disabled={loading || !photo} onClick={handleClick}>Upload</button>
//       <img src={photoURL} alt="Avatar" className="avatar" />
//     </div>
//   );
// }



const EditProfile = () => {
    let navigate = useNavigate();
    const auth = useAuth();
const [name,setUsername] = useState(null);
function handleClick(e) {
    
    setUsername(e.target.value);
    
  }
  updateProfile(auth.currentUser, {
    displayName: name
  }).then(() => {
    // Profile updated!
    // ...
  
  }).catch((error) => {
    // An error occurred
    // ...
  });
    return (
        <div className="signupFrm">
        <form action="" className="form"
         onSubmit={async e => {
            e.preventDefault()
            //   console.log(email,password)
            navigate("/profile")
          }}
        >
         <a  href='/edit-profile'> <h1 className="title2">Edit-profile</h1> </a>

          <div className="inputContainer">
            <input type="text" className="input" placeholder="a" onChange={handleClick}></input>
            <label for="" className="label">UserName</label>
          </div>

          <div>
            <input type="submit" className="submitBtn" value="Submit"></input>
            <br></br>
            <hr />
            <br />
            <a href='/login'>Login</a> 
          </div>
        </form>
      </div>
    )
}

export default EditProfile
