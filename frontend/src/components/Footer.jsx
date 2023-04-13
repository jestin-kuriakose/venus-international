import React from 'react'
import Logo from "../assets/venus-logo.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div class="container">
        <footer class="py-3 my-4">
            <div className="navbar-brand d-flex flex-column justify-content-center align-items-center">
              <img src={Logo} className="img-fluid w-25"/>
            </div>
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item"><Link to={'/'} class="nav-link px-2 text-dark link-primary">Home</Link></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-dark link-primary">About us</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-dark link-primary">Engineering</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-dark link-primary">Oil & Gas</a></li>
                <li class="nav-item"><Link to={'/contact'} class="nav-link px-2 text-dark link-primary">Contact</Link></li>
            </ul>
            <p class="text-center text-body-secondary">&copy; 2023 Venus International</p>
        </footer>
    </div>
  )
}

export default Footer