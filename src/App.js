import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar"
import Home from "./Pages";
import Trending from "./Pages/Trending";
import Profile from "./Pages/profile";
import SignUp from "./Pages/sign-up";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      <Route exact path="/Trending" element={<Trending/>}/>
      <Route exact path="/profile" element={<Profile/>}/>
      <Route exact path="/sign-up" element={<SignUp/>}/>
      </Routes>
    </Router >     

  );
}

export default App

