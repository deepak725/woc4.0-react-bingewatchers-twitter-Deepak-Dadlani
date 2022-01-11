
import { useAuth } from "../Context/AuthContext"
const Navbar = () => {
    const { logout, currentUser } = useAuth()
    return (
        <>
            <div className="topnav">
                <a  href="/">Home</a>
                <a href="/Trending">Trending</a>
                {currentUser &&  <a href="/Profile">Profile</a> }
                <div className="topnav-right">
                 {!currentUser &&   <a href="/sign-up">Sign-up</a> }
                 {currentUser &&   <a href='/logout' class='logout'>logout</a> }
                  
                </div>
            </div>

        </>
    )
}

export default Navbar
