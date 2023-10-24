import React from 'react';
import { AiOutlineHome, AiOutlinePhone, AiOutlinePropertySafety, AiOutlineRocket } from "react-icons/ai";
const Benefits = () => {
    return (
        <div className='min-h-screen flex justify-center items-center '>
            <div>
                <h2 className='text-center font-bold text-4xl pb-10 mx-auto text-body-color'>Our Special Services</h2>

                <div className='grid grid-cols-4 gap-5 '>
                    <div className="flex flex-col md:flex-row rounded-lg md:justify-center md:pl-2 items-center bg-body-color text-neutral-content">
                        <div className='text-black text-6xl'>
                            <AiOutlineHome />
                        </div>
                        <div className="card-body text-black text-right">
                            <h2 className="text-center md:text-right font-bold">Free Shipping!</h2>
                            {/* <p>Free Shipping.</p> */}
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row rounded-lg md:justify-center md:pl-2 items-center bg-body-color text-neutral-content">
                        <div className='text-black text-6xl'>
                            <AiOutlineRocket />
                        </div>
                        <div className="card-body text-black ">
                            <h2 className="text-center md:text-right font-bold">Fastest Delivery!</h2>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row rounded-lg md:justify-center md:pl-2 items-center bg-body-color text-neutral-content">
                        <div className='text-black text-6xl'>
                            <AiOutlinePhone />
                        </div>
                        <div className="card-body text-black text-right">
                            <h2 className="text-center md:text-right font-bold">24/7 Support!</h2>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row rounded-lg md:justify-center md:pl-2 items-center bg-body-color text-neutral-content">
                        <div className='text-black text-6xl'>
                            <AiOutlinePropertySafety />
                        </div>
                        <div className="card-body text-black text-right">
                            <h2 className="text-center font-bold md:text-right">100% Refund!</h2>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;