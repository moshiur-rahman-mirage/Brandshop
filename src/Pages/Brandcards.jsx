import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Brandhero from './Brandhero';

const Brandcards = () => {
    const [brand, setBrand] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => setBrand(data))
    }, [])

    return (
        <div>
              <div className='text-4xl text-center font-bold'>Top Brands</div>
            <div className='max-w-7xl mx-auto grid grid-cols-3 gap-10'>
                {brand.map(b => {
                    return (
                        <Brandhero key={b._id} b={b} />
                    )
                })}
            </div>
        </div>
    );
};

export default Brandcards;