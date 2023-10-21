import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Category from './Category';
import { AuthContext } from '../Providers/AuthProviders';

const ItemDetails = () => {
    const { user} = useContext(AuthContext)
    const loadedProduct = useLoaderData();
    const { _id, img,category, specs, name,price } = loadedProduct;
    console.log(loadedProduct)
    const handleAddCart = () => {
        const {email}=user
        const cartItem={_id,img,category,specs,name,price,email}

        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(cartItem)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    Swal.fire({
                        title: 'Success',
                        text: 'Item Added to cart Successfully!',
                        icon: 'success'
                    })

                }
            })
    }

    return (
        
        <div>
            
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{specs}</p>
                        <p className="">Price :{price}</p>
                        <p className="">Category :{category}</p>
                        <button onClick={handleAddCart} className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;