import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';
import Elsa from '../../../images/Elsa.png';
import Ema from '../../../images/Ema.png';
import Erik from '../../../images/Erik.png';

const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Elsa Harry',
        from : 'Stockholm',
        img : Elsa
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : Ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Erik Farari',
        from : 'Malmö',
        img : Erik
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 style={{color: "#1CC7C1"}} className="text-uppercase">Testimonial</h5>
                    <h1>What's Our Patients <br/>Says</h1>
                </div>
                <div className="w-100 row mt-5 pt-5">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}></Testimonial>)
                    }
                </div>
            </div>
            
        </section>
    //    <section className="testimonials my-5 py-5">
    //        <div className="container">
    //            <div className="section-header">
    //                <h5 className="text-primary text-uppercase">Testimonial</h5>
    //                <h1>What Our Patients <br/> Says </h1>
    //            </div>
    //            <div className="card-deck mt-5">
    //                 {
    //                     testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
    //                 }
    //             </div>
    //        </div>
    //    </section>
    );
};

export default Testimonials;