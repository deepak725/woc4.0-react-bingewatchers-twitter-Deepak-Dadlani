import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import SignUp from './sign-up'
const ProtectedRoute = () => {
    const { currentUser } = useAuth()
    return (
        currentUser ? <Outlet/>: <SignUp/> 

        
    )
}

export default ProtectedRoute
