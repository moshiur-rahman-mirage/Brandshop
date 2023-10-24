import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  
}

const Sliderimg = ({brandname}) => {

const [banner,setBanner]=useState([])
  useEffect(() => {
    fetch(`https://b8a10-brandshop-server-side-moshiur-rahman-mirage.vercel.app/products/${brandname}/banner`)
        .then(res => res.json())
        .then(data => setBanner(data))
}, [])

// console.log(banner)
  return (
    <div className="slide-container">
      <Slide>
        {banner.map((slideimage, index) => (
          <div key={index}>
            {console.log(slideimage.img)}
            <div className="min-h-screen border object-contain" style={{ ...divStyle, 'backgroundImage': `url(${slideimage.img})` }}>
              <span className="mb-[-10px] border font-bold text-4xl text-black">{slideimage.specs}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Sliderimg;