import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar"
import Home from "./Pages/index";
import Trending from "./Pages/Trending";
import Profile from "./Pages/profile";
import SignUp from "./Pages/sign-up";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import AuthContextProvider from "./Context/AuthContext";

const App = () => {
  return (
    <AuthContextProvider>
    <Router>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/Trending" element={<Trending/>}/>
      <Route exact path="/profile" element={<Profile/>}/>
      <Route exact path="/sign-up" element={<SignUp/>}/>
      <Route exact path="/Login" element={<Login/>}/>
      <Route exact path="/Forgot-Password" element={<ForgotPassword/>}/>
      </Routes>

    </Router >     
    </AuthContextProvider>
  );
}

export default App

