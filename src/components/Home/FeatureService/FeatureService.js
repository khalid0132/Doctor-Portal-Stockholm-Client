import React from 'react';
import featureService from '../../../images/featureService.png'

const FeatureService = () => {
    return (
        <section className="d-flex justify-content-center pb-0 pt-5 mt-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img style={{height:'400px'}} className="img-fluid"  src={featureService} alt=""/>
                    </div>
                        <div className="col-md-7 mt-5 mr-0 align-center">
                            <h3>Exceptional Dental <br/> Care, On Your Terms</h3>
                            <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis error velit quo recusandae vel. Illo ab minima odio dolorem reprehenderit saepe atque quos, deserunt eveniet iste mollitia nam aliquam et beatae sapiente excepturi laboriosam porro similique magnam! Totam vel suscipit dolore excepturi sequi nobis error eos eius aperiam itaque nostrum repellat quod delectus labore maiores porro possimus, in atque assumenda placeat exercitationem! Odit corporis enim, consectetur iste natus, magni blanditiis earum non quo molestiae iure?</p>
                            <button className="btn w-bold my-5 text-white" style={{background: "#1CC7C1"}}>Learn More</button>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureService;