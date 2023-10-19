import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import Sidenav from '../Shared/Sidenav';
import { Outlet } from 'react-router-dom';

const Addproduct = () => {
    const { user, logout, brand, loading } = useContext(AuthContext)

    return (
        <div className=' mx-auto'>
            <div className='grid grid-cols-6'>
                <div className="col-span-1">
                    <Sidenav />
                </div>
                <div className="col-span-5 ml-4">
                    <Outlet />
                </div>

            </div>

        </div>
    );
};

export default Addproduct;