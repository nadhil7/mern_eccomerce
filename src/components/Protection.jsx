import React from 'react'
import { Navigate } from 'react-router-dom'


function Protection({ children }) {
    const Admin = localStorage.getItem("Admin")
    return (
        <>
            {Admin ? children : <Navigate to="/admin/login" />}
        </>
    )
}

export default Protection