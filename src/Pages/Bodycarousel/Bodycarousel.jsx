import React, { useEffect, useState } from 'react';
import { Slide } from "react-slideshow-image";

import 'react-slideshow-image/dist/styles.css'
const Bodycarousel = () => {

    const [banner, setBanner] = useState([])
    useEffect(() => {
        fetch(`https://b8a10-brandshop-server-side-moshiur-rahman-mirage.vercel.app/banner`)
            .then(res => res.json())
            .then(data => setBanner(data))
    }, [])

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',

    }

    return (
        <div>
            <div className="carousel w-full">
                HELLO
                <Slide>
                    {banner.map((slideimage, index) => (
                        <div key={index}>
                            {console.log(slideimage.img)}
                            <div className="min-h-screen border object-contain" style={{ ...divStyle, 'backgroundImage': `url(${slideimage.img})` }}>
                               
                            </div>
                        </div>
                    ))}
                </Slide>

            </div>
        </div>
    );
};

export default Bodycarousel;