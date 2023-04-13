import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
        <Navbar/>

        <div className="container my-5">
            <h1 className='text-center fw-light' style={{fontSize:"4rem"}}>Contact us</h1>
            <div className="row g-4 my-5">
                <div className="col-md-6 d-flex flex-column justify-content-center my-5">
                    <div className="d-flex flex-column align-items-center pb-3">
                        <h3>Location</h3>
                        <p className='m-0'>PO BOX 7167</p>
                        <p className='m-0'>FAHAHEEL</p>
                        <p className='m-0'>Kuwait</p>
                    </div>
                   
                    <div className="d-flex flex-column align-items-center mt-3">
                        <h3>Email</h3>
                        <p>sales@venusintlkwt.com</p>
                    </div>

                </div>
                <div className="col-md-6 my-5">
                    <form action="">
                        <h3>Send us a message</h3>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="" className="form-label">First Name</label>
                                <input type="text" className='form-control'/>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="" className="form-label">Last Name</label>
                                <input type="text" className='form-control'/>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" className='form-control'/>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="" className="form-label">Phone</label>
                                <input type="number" className='form-control'/>
                            </div>
                            <div className="col-12">
                                <label htmlFor="" className="form-label">Message</label>
                                <textarea type="text" className="form-control" rows={"5"}/>
                            </div>
                            <button type="submit" className='btn btn-primary w-25'>Submit</button>
                        </div>
                        
                    </form>
                </div>
            </div>
            
        </div>

        <Footer/>
    </>
  )
}

export default Contact