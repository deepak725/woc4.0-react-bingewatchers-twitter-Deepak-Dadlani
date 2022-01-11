import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
//import {useAuth} from '../Context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useAuth()
  let navigate = useNavigate();
  return (
    <>
      <div className='signupFrm'>
        <form action="" className="form"
          onSubmit={async e => {
            e.preventDefault()
            console.log(email, password)
            login(email, password)
              .then((response) => 
              {console.log(response) 
              navigate("/")}
              )
              .catch((error) => console.log(error.message))
          }}
        >

          <a href='/Login'> <h1 className="title">Log-In</h1> </a>

          <div className="inputContainer">
            <input type="email" 
            value={email} 
            onChange = {e => setEmail(e.target.value)} 
            className="input" placeholder="a" required ></input>
            <label for="" className="label">Email</label>
          </div> 
          <div className="inputContainer">
            <input 
            value={password} 
            onChange = {e => setPassword(e.target.value)}
            type="password" className="input" placeholder="a" required></input>
            <label for="" className="label">Password</label>
          </div>
          <div>
             <input type="submit" className="submitBtn" value="Log-In"></input>
             <br></br>
              <hr />
               <br />
             <p>Don't have an account ? </p><a href='/sign-up'>Sign-up</a> 
               <a href='/forgot-password' className='forgotpass'>Forgot Password?</a>
            </div>
        </form>
      </div>
    </>
  )
  //   // const [email, setEmail] = useState('')
  //   // const[password, setPassword] = useState('')   

  //   //const {login} = useAuth()
  //     return (
  //        <>
  //        <div className="signupFrm">
  //         <form action="" className="form"
  //       //    onSubmit = {async e => { 
  //       //     e.preventDefault()
  //       //  //   console.log(email,password)
  //       //     // login(email,password)
  //       //     // .then((response) => console.log(response) )
  //       //     // .catch((error)=> console.log(error.message))                 
  //       // }}
  //         >
  //          <a  href='/Login'> <h1 className="title">Log-In</h1> </a>

  //           <div className="inputContainer">
  //             <input type="email"
  //               //  value={email} 
  //               //  onChange = {e => setEmail(e.target.value)}            
  //             className="input" placeholder="a" required> </input>
  //             <label for="" className="label">Email</label>
  //           </div>

  //           <div className="inputContainer">
  //             <input type="password" 
  //  //            value={password} 
  //    //          onChange = {e => setPassword(e.target.value)} 
  //             className="input" placeholder="a" required></input>
  //             <label for="" className="label">Password</label>
  //           </div>
  //           <div>
  //             <input type="submit" className="submitBtn" value="Log-In"></input>
  //             <br></br>
  //             <hr />
  //             <br />
  //             <p>Don't have an account ? </p><a href='/sign-up'>Sign-up</a> 
  //             <a href='/forgot-password' className='forgotpass'>Forgot Password?</a>
  //           </div>
  //         </form>
  //   </div>
  //    </>
  // )
}

export default Login
