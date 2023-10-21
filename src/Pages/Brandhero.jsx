import React from 'react';
import { NavLink } from 'react-router-dom';

const Brandhero = ({ b }) => {
    const { brandname, ximage } = b
    return (
        <NavLink  to ={`/products/${brandname}`} className=''>
            <div className="card bg-base-400 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={ximage} alt="Shoes" className="rounded-xl object-contain h-48 w-96" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{brandname}</h2>
                   
                </div>
            </div>
        </NavLink>
    );
};

export default Brandhero;