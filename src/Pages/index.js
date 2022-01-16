import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import TweetBox from "./TweetBox";
import Post from "./Post";
import { db } from "../Utils/Firebase-init";
import { collection, query, getDocs } from "firebase/firestore";
import Feed from "./Feed";
const Home = () => {
  const [details, setDetails] = useState([]);
  const userData = async () => {
    const q = query(collection(db, "posts"));

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      // doc.data() is never undefined for query doc snapshots
      ...doc.data(),
      id: doc.id,
    }));
    setDetails(data);
  };
  console.log(details);
  useEffect(() => {
    userData();
  }, [details]);
  return (
    <div className="Home">
      <TweetBox />
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
  );
};

export default Home;
