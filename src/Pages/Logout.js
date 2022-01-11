import React from 'react'
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
//const {logout} = new useAuth()
const Logout = () => {

    const { logout, currentUser } = useAuth()
    let navigate = useNavigate();
    return (
        <div className="signupFrm">
            <form action="" className="form"
                onSubmit={async e => {
                    e.preventDefault()
                    //   console.log(email,password)

                }}
            >
                <a href='/logout'> <h1 className="title">Log-out</h1> </a>


                <div>
                    <h2>Click the button to log-out!</h2>
                    <input type="submit" class="submitBtn" value="Log-out"
                        onClick={async e => {
                            e.preventDefault()
                            await logout()
                            navigate("/")
                        }} ></input>
                    <br />
                    <hr />
                </div>
            </form>
        </div>
    )
}

export default Logout
