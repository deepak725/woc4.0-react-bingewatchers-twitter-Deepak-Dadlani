import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar"
import Home from "./Pages";
import About from "./Pages/about";
import Profile from "./Pages/profile";
import SignUp from "./Pages/sign-up";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/profile" element={<Profile/>}/>
      <Route exact path="/sign-up" element={<SignUp/>}/>
      </Routes>
    </Router >     

  );
}

export default App

