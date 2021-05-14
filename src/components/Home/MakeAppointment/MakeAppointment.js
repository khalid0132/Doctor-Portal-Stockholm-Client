import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 my-5">
                        <h5 style={{color: "#1CC7C1"}} className="text-uppercase">APPOINTMENT</h5>
                        <h1 className="text-white my-4">Make An Appointment <br/>Today</h1>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos labore impedit eos, exercitationem praesentium molestias? Optio nesciunt voluptatibus, nulla numquam ducimus esse deleniti eius temporibus.</p>
                        <button className="btn btn-brand w-bold my-5 text-white" style={{background: "#1CC7C1"}}>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;