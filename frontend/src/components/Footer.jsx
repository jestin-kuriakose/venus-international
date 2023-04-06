import React from 'react'

const Footer = () => {
  return (
    <div class="container">
        <footer class="py-3 my-4">
            <div className="navbar-brand">
                {/* <img src={Logo} className="img-fluid w-25"/> */}
                <h1 className='p-0 m-0 text-center fw-light lh-1'>VENUS</h1>
                <h3 className='p-0 m-0 text-center fw-lighter lh-1 text-uppercase fs-6'>International</h3>
            </div>
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item"><a href="#" class="nav-link px-2 text-dark link-primary">Home</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-dark link-primary">About us</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-dark link-primary">Engineering</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-dark link-primary">Oil & Gas</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-dark link-primary">Contact</a></li>
            </ul>
            <p class="text-center text-body-secondary">&copy; 2023 Venus International</p>
        </footer>
    </div>
  )
}

export default Footer