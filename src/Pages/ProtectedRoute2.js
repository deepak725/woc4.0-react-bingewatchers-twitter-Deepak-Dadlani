import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Home from './index'
import { useAuth } from '../Context/AuthContext'
import SignUp from './sign-up'
const ProtectedRoute2 = () => {
    const { currentUser } = useAuth()
    return (
        currentUser ? <Home/>: <Outlet/> 

        
    )
}

export default ProtectedRoute2
