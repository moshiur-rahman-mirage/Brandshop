import React, { useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import ProductForm from '../Product/ProductForm';
import UpdateProduct from '../Product/UpdateProduct';
import { Rating } from 'react-simple-star-rating';
import StarRatings from 'react-star-ratings';

const ProductCard = ({ item }) => {
    //onClick={`/products/${brand}/${_id}`}
    const { _id, name, category, rating, brand, specs, price, img } = item;
    const handleDetails = (brand, _id) => {
        Navigate(`/products/${brand}/${_id}`)
    }
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div className='min-h-screen'>

            <div className="card object-contain mt-5 bg-body-color shadow-xl">
                <figure className="px-5 pt-10 object-contain">
                    <img src={img} alt="Items" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-black text-center">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">Type: {category}</h2>
                    <p>{specs}</p>
                    <p>Price : {price}</p>
                    <div className='flex items-center gap-2'>
                        <p>Rating : {rating} </p>

                    </div>
                    <div className="card-actions">
                        <NavLink to={`${_id}`} className="btn btn-ghost">Show Details</NavLink>
                        <button onClick={onOpenModal} className="btn btn-ghost">Update</button>
                    </div>
                    <Modal open={open} onClose={onCloseModal} center>
                        <UpdateProduct item={item} />
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;