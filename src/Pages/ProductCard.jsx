import React, { useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Productform from './Productform';
const ProductCard = ({ item }) => {
    //onClick={`/products/${brand}/${_id}`}
    const { _id, name, category, brand, specs, price, img } = item;
    const handleDetails = (brand, _id) => {
        Navigate(`/products/${brand}/${_id}`)
    }

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


    return (
        <div className=''>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">Type: {category}</h2>
                    <p>{specs}</p>
                    <p>Price : {price}</p>
                    <div className="card-actions">
                        <NavLink to={`${_id}`} className="btn btn-ghost">Show Details</NavLink>
                        {/* <button onClick={onOpenModal} className="btn btn-ghost">Update</button> */}
                        <NavLink to ={`updateproduct/${_id}`} item={item} className="btn btn-ghost">Update</NavLink>
                    </div>
                    {/* <Modal open={open} onClose={onCloseModal} center>
                        <Productform item={item}/>
                    </Modal> */}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;