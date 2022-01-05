
import { Nav,NavBtn,NavMenu,NavLink,NavLink2,NavMenu2 } from './NavElements'
const Navbar = () => {
    return(
        <>
    <Nav>
        <NavMenu>
            
          <NavLink to='/' activeStyle> BingeWatcher </NavLink> 
          <NavLink to='/Trending' activeStyle> Trending </NavLink>
          <NavLink to='/profile' activeStyle> Profile </NavLink>   
          <NavLink2 to='/sign-up' activeStyle> Sign Up  </NavLink2>  
        
         </NavMenu> 
      
    </Nav>
        
        </>
    )
}

export default Navbar
