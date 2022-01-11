import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../Components/Navbar"
import Home from "../Pages/index";
import Trending from "../Pages/Trending";
import Profile from "../Pages/profile";
import SignUp from "../Pages/sign-up";
import Login from "../Pages/Login";
import Logout from "../Pages/Logout";
import ForgotPassword from "../Pages/ForgotPassword";
import ProtectedRoute from "../Pages/ProtectedRoute";
import ProtectedRoute2 from "../Pages/ProtectedRoute2";
import ErrorPage from "./ErrorPage";

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Trending" element={<Trending />} />
                <Route element={<ProtectedRoute />}>
                    <Route exact path="/profile" element={<Profile />} />
                    <Route exact path="/logout" element={<Logout />} />
                </Route>
                <Route exact path="/sign-up" element={<SignUp />} />
                <Route element={<ProtectedRoute2 />}>
                    <Route exact path="/Login" element={<Login />} />
                </Route>
                <Route exact path="/Forgot-Password" element={<ForgotPassword />} />
                <Route exact path="*" element={<ErrorPage />} />

            </Routes>

        </Router >
    );
}

export default AppRouter


