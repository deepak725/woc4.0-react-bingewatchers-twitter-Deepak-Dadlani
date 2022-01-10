
import { Nav, NavBtn, NavMenu, NavLink, NavLink2, NavMenu2 } from './NavElements'
const Navbar = () => {
    return (
        <>
            <div className="topnav">
                <a  href="/">Home</a>
                <a href="/Trending">Trending</a>
                <a href="/Profile">Profile</a>
                <div className="topnav-right">
                    <a href="/sign-up">Sign-up</a>
                </div>
            </div>

        </>
    )
}

export default Navbar
