import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import { db } from "../Utils/Firebase-init";
import Post from "./Post";
import {
  collection,
  query,
  getDocs,
  orderBy,
  Timestamp,
  onSnapshot,
  where,
} from "firebase/firestore";

import { useAuth } from "../Context/AuthContext";
const Profile = () => {
  const { currentUser } = useAuth();

  const uid = currentUser.uid;
  //const {name,setName} = useState('');
  let name, email, avatar;
  if (currentUser !== null) {
    currentUser.providerData.forEach((profile2) => {
      email = profile2.email;
      avatar = profile2.photoURL;
      console.log(profile2);
    });
  }
  name = currentUser.displayName;

  const [details, setDetails] = useState([]);
  useEffect(() => {
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, where("uid", "==", uid));

    const unsub = onSnapshot(q, (snapshot) =>
      setDetails(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );

    return unsub;
  }, []);

  console.log(details);
  return (
    <>
      <div>
        <div class="card">
        <Avatar
            src={
              avatar == null
                ? "https://publicdomainvectors.org/photos/abstract-user-flat-1.png"
                : avatar
            } className="avatar2"
          />
        
          <h1 className="title4">
            {name == null ? "Yet to set username!" : name}
          </h1> <h4 className="title3">{email}</h4>
          <a href="/edit-profile" className="editopt">
            Edit</a>
        </div>

        <h2 className="title4">Your tweets!</h2>

        <div className="activities">
        {details.map((post, id) => {
          return (
            <Post
              key={post.text}
              displayName={post.displayName}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
            />
          );
        })}
        </div>
      </div>
    </>
  );
};

export default Profile;
