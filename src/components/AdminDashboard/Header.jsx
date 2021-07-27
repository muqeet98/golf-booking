// Header.js
import React, { Component } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
const Header = () => {
    const history = useHistory();
    const location = useLocation();
    const Toggle = () => {
        // localStorage.setItem('toggle', '');
        if (localStorage.getItem('toggle') == 'open') {
            alert("Open Hai")
            localStorage.setItem('toggle', 'close')
        }
        else {
            localStorage.setItem('toggle', 'open')
            alert("Close hai")
        }
        // alert(localStorage.getItem('toggle'))
    }
    return (
        <header className="main-header">
            <a onClick={() => history.push({ pathname: '/admin-dashboard' })} className="logo">
                <span className="logo-lg"><b>Admin</b>Home</span>
            </a>
            <nav className="navbar navbar-static-top">
                <a onClick={Toggle} className="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span className="sr-only">Toggle navigation</span>
                </a>
            </nav>
        </header>
    )
}
export default Header;