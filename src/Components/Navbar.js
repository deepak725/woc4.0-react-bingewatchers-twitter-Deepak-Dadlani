import 'C:/Users/DELL/OneDrive/Desktop/Project/bingewatcher/node_modules/bootstrap/dist/css/bootstrap.min.css' 

import { Nav,NavBtn,NavMenu,NavLink,NavLink2,NavMenu2 } from './NavElements'
const Navbar = () => {
    return(
        <>
    <Nav>
        <NavMenu>
            
           <NavLink to='/' activeStyle> BingeWatcher </NavLink> 
           <NavLink to='/about' activeStyle> Trending </NavLink>
          <NavLink to='/profile' activeStyle> Profile </NavLink>   
     <NavLink to='/sign-up' activeStyle> Sign Up  </NavLink>  
         </NavMenu> 
      
    </Nav>
        
        </>
    )
}

export default Navbar
