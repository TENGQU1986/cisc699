import React from 'react'
import './header.css'

const Header = ({ user }) => {
    return (
        <div className="header">
            <span>{user?.displayName}</span>
            <span>Websites Performance Analysis Forum</span>
            <span>{user?.email}</span>
        </div>
    )
}

export default Header
