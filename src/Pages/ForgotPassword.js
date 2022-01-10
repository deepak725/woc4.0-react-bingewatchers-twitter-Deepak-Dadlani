import React from 'react'

const ForgotPassword = () => {
    return (
        <>
        <div className="signupFrm">
         <form action="" className="form">
          <a  href='/forgot-password'> <h1 className="title2">Forgot Password</h1> </a>
 
           <div className="inputContainer">
             <input type="text" className="input" placeholder="a"></input>
             <label for="" className="label">Email</label>
           </div>
 
           <div>
             <input type="submit" className="submitBtn" value="Submit"></input>
             <br></br>
             <hr />
             <br />
             <a href='/login'>Login</a> 
           </div>
         </form>
       </div>
        </>
    )
}

export default ForgotPassword
