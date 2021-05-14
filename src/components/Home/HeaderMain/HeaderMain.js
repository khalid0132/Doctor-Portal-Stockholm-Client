import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main className="row m-5 p-5 d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3a4256'}}>Your New Smile <br></br>Starts Here</h1>
                <p className="text-seconday">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea natus iusto saepe pariatur sint labore.</p>
                <button className="btn btn-brand w-bold my-5 text-white" style={{background: "#1CC7C1"}}>GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;