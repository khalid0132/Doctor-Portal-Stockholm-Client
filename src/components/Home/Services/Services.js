import React from 'react';
import './Services.css';
import img1 from '../../../images/fluoride.png';
import img2 from '../../../images/cavity.png';
import img3 from '../../../images/whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: img1
    },
    {
        name: 'Cavity Filling',
        img: img2
    },
    {
        name: 'Teeth Whitening',
        img: img3
    },
]

const Services = () => {
    return (
        <section className="services-container mt-5">
           <div className="text-center">
                <h5 style={{color: '#1cc7c1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div> 

            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                serviceData.map(service => <ServiceDetail service = {service}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;