import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



const  ContactUs = ()=> {
   
   
        return (
            <div className="row row-content contactPage">
                <div className="col-12">
                    <h2>Contact Me</h2>
                    <hr />
                </div>
                <div className="col-md-10">

                    <form action="https://formsubmit.co/bjwmcd@yahoo.com" method="POST" className='form'>
                        
                        <div className="form-group row">
                            <label className="col-md-2 col-form-label">Name</label>
                            <div className="col-md-10">
                                <input className="form-control" type="text" name="name" required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-2 col-form-label">Email</label>
                            <div>
                                <input type="email" className="form-control" name="email" required/>
                            </div>
                       </div>
                        <div className="form-group row">
                            <label className="col-md-2 col-form-label">Message</label>
                                <div  className="col-md-10">
                                    <textarea className="form-control" name="message" />
                                </div>
                        </div>
                        <div className="form-group row">
                            <div className="offset-md-2 col-md-10">
                                <button className="btn btn-primary" type="submit">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
         )
                  
};
export default ContactUs;