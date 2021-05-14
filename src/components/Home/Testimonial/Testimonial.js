import React from 'react';
import { Card } from 'react-bootstrap';

const Testimonial = (props) => {
    const {quote,name,from ,img} = props.testimonial;
    return (
        <Card style = {{width: '20rem', boxShadow: '5px 8px 10px #2f4f4f '}} className= "container testimonial mb-4 mt-4 border-secondary border-2 bg-light p-5" >
        <p className = "text-center">{quote}</p>
        <div className = "d-flex align-items-center">
            <div>
                <img src = {img} style ={{width:"60px"}} alt = ""></img>
            </div> 
            <div className ="ms-4" >
                <h6 className="text-primary">{name}</h6>
                <p className= "">{from}</p>
          </div>
        </div>
    </Card>
    //     <div className="card shadow-sm">
    //         <div className="card-body">
    //             <p className="card-text text-center">{quote}</p>
    //         </div>
    //         <div className="card-footer d-flex  align-items-center">
    //             <img className="mx-3" src={img} alt="" width="60"/>
    //             <div>
    //                 <h6 className="text-primary">{name}</h6>
    //                 <p className="m-0">{from}</p>
    //             </div>
    //         </div>
    //    </div>
    );
};

export default Testimonial;