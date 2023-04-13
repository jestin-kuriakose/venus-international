import React from 'react'
import { Link } from "react-router-dom"
import Logo from '../assets/venus-logo.png'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg'>
        <div className="container">
            <div className="navbar-brand col-8 col-sm-4">
                <Link to={"/"}>
                    <img src={Logo} className="img-fluid w-50"/>
                </Link>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className='collapse navbar-collapse col-4 col-sm-8' id="navbarNav">
                <ul className='navbar-nav ms-auto mb-2'>
                    <li className='nav-item'><Link to={'/'} className='nav-link px-3 fs-5 text-dark link-primary'>Home</Link></li>
                    <li className='nav-item'><a href='#' className='nav-link px-3 fs-5 text-dark link-primary'>About us</a></li>
                    <li className='nav-item'><a href='#' className='nav-link px-3 fs-5 text-dark link-primary'>Engineering</a></li>
                    <li className='nav-item'><a href='#' className='nav-link px-3 fs-5 text-dark link-primary'>Oil & Gas</a></li>
                    <li className='nav-item'><Link to={'/contact'} href='#' className='nav-link px-3 fs-5 text-dark link-primary'>Contact</Link></li>
                </ul>
            </div>
        </div>
    </nav>


  )
}

export default Navbar