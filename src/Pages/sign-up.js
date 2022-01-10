import React,{useState} from 'react';
import {useAuth} from '../Context/AuthContext';
const SignUp = () => {

  const [email, setEmail] = useState('')
  const[password, setPassword] = useState('')   

  const {register} = useAuth()
  return (
    <>
      <div className="signupFrm">
        <form action="" className="form" 
          onSubmit = {async e => { 
              e.preventDefault()
           //   console.log(email,password)
              register(email,password)
              .then((response) => console.log(response) )
              .catch((error)=> console.log(error.message))                 
          }}
        > 
         <a  href='/sign-up'> <h1 className="title">Sign up</h1> </a>

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
            <input type="submit" class="submitBtn" value="Sign up"></input>
            <br />
            <hr />
            <div class="google-btn">
              <div class="google-icon-wrapper">
                <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
              </div>
              <p class="btn-text"><b>Sign in with google</b></p>
              
            </div>
            <br></br>
            <hr />
            <br />
            <p>Already have an account ? </p><a href='/login'>Log-in</a> 
          </div>
        </form>
      </div>
    </>

  );
};

export default SignUp
