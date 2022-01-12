import React, { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let navigate = useNavigate();
  const { register, signInWithGoogle } = useAuth()
  const [error1,setError] = useState('')
  return (
    <>
    
      <div className="signupFrm">
        <form action="" className="form"
          onSubmit={async e => {
            e.preventDefault()
            //   console.log(email,password)
            register(email, password)
              .then((response) => {
                console.log(response)
                navigate("/")
              })
              .catch((error) => {
               setError(error.message)
                console.log(error.message)})
          }}
        >
          
      <p className='Error'>{error1}</p>
          <a href='/sign-up'> <h1 className="title">Sign up</h1> </a>

          <div className="inputContainer">
            <input type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="input" placeholder="a" required ></input>
            <label for="" className="label">Email</label>
          </div>

          <div className="inputContainer">
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password" className="input" placeholder="a" required></input>
            <label for="" className="label">Password</label>
          </div>
          <div>
            <input type="submit" class="submitBtn" value="Sign up"></input>
            <br />
            <hr />
            <div class="google-btn">
              <div class="google-icon-wrapper">
                <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt='image not found' />
              </div>
              <p class="btn-text"
                onClick={() =>
                  signInWithGoogle()
                    .then(user => {
                      console.log(user)
                      navigate("/")
                    })
                    .catch(error => console.log(error))
                }
              ><b>Sign in with google</b></p>

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
