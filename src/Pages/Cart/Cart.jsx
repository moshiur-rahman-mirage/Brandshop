import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cartitem from './Cartitem';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const Cart = () => {
    const cartData = useLoaderData();
    const { user, logout, brand, loading } = useContext(AuthContext)
    console.log(cartData)
    return (
        <div>
            <h2 className='text-center p-5 font-bold text-4xl'>Cart Of : {user.displayName}</h2>
            {console.log(user)}
            <div className='grid grid-cols-3 max-w-7xl mx-auto'>
                {cartData.map(item => {
                    return (
                        <Cartitem key={item._id} item={item} />
                    )
                })}
            </div>
        </div>
    );
};

export default Cart;