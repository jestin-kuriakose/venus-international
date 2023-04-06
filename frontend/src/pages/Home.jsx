import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import hero from '../assets/hero.jpg'
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
import pic1 from '../assets/pic1.jpg'
import mech from '../assets/mech.jpg'
import ele from '../assets/ele.jpg'
import inst from '../assets/inst.jpg'

const Home = () => {
  return (
    <>
        <Navbar/>

        {/* Hero Section */}
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">

            <div class="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div class="carousel-inner">
                <div class="carousel-item active" style={{background: `linear-gradient(to top, #00000047, #050505cc), url(${hero2}) no-repeat fixed center`, backgroundSize: 'cover'}}>
                    {/* <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg> */}
                    <div class="container">
                    <div class="carousel-caption text-start">
                        <h1>Global Presense.</h1>
                        <p>Venus International is one of the leading oil and gas suppliers and contractors in the Kuwait.</p>
                        <p><a class="btn btn-lg btn-primary" href="#">Learn More</a></p>
                    </div>
                    </div>
                    
                </div>
                <div class="carousel-item" style={{background: `linear-gradient(to top, #000000b0, #05050532), url(${hero1}) no-repeat fixed center`, backgroundSize: 'cover'}}>
                    {/* <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg> */}
                    <div class="container">
                    <div class="carousel-caption">
                        <h1>Sealing & Gaskets.</h1>
                        <p>We supply Sealings and Gaskets from manufacturers around the world.</p>
                        <p><a class="btn btn-lg btn-primary" href="#">Contact Us</a></p>
                    </div>
                    </div>
                </div>
                <div class="carousel-item" style={{background: `linear-gradient(to top, #00000047, #050505cc), url(${hero3}) no-repeat fixed center`, backgroundSize: 'cover'}}>
                    {/* <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg> */}
                    <div class="container">
                    <div class="carousel-caption text-end">
                        <h1>Instrumentation</h1>
                        <p>We work with manufacturers of Instrumentation Tubing and fittings, Valves and Manifolds from all around the world.</p>
                        <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                    </div>
                    </div>
                </div>
                {/* <div class="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}></div> */}
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        {/* About Us Section */}
        <div class="container col-xxl-8 px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 ">
                <div class="col-10 col-sm-8 col-lg-6">
                    <img src={pic1} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
                <div class="col-lg-6">
                    <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">WHO WE ARE</h1>
                    <p class="lead">Venus International is one of the leading oil and gas suppliers and contractors in the Kuwait.</p>
                    <p className="lead">With years of expertise in upstream and downstream operations, Venus International provides advanced energy services throughout the Kuwait, the Middle East, North Africa and the Eastern Mediterranean.</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Learn More</button>
                    </div>
                </div>
            </div>
        </div>

        {/* Services Section */}
        <div class="container px-4 py-5" id="custom-cards">
            <h1 class="pb-2 border-bottom text-center fw-bold">Services</h1>

            <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                <div class="col">
                    <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${mech})`}}>
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Mechanical</h3>
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${inst})`}}>
                    <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Instrumentation</h3>
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${ele})`}}>
                        <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Electrical</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </>
  )
}

export default Home