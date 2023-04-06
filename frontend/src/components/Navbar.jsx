import React from 'react'
import Logo from '../assets/logo1.png'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg'>
        <div className="container">
            <div className="navbar-brand">
                {/* <img src={Logo} className="img-fluid w-25"/> */}
                <h1 className='p-0 m-0 text-center fw-light lh-1'>VENUS</h1>
                <h3 className='p-0 m-0 text-center fw-lighter lh-1 text-uppercase fs-6'>International</h3>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className='collapse navbar-collapse' id="navbarNav">
                <ul className='navbar-nav ms-auto mb-2'>
                    <li className='nav-item'><a href='#' className='nav-link px-3 fs-5 text-dark link-primary'>Home</a></li>
                    <li className='nav-item'><a href='#' className='nav-link px-3 fs-5 text-dark link-primary'>About us</a></li>
                    <li className='nav-item'><a href='#' className='nav-link px-3 fs-5 text-dark link-primary'>Engineering</a></li>
                    <li className='nav-item'><a href='#' className='nav-link px-3 fs-5 text-dark link-primary'>Oil & Gas</a></li>
                    <li className='nav-item'><a href='#' className='nav-link px-3 fs-5 text-dark link-primary'>Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>


  )
}

export default Navbar