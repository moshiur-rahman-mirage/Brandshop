import React from 'react';
import Topnav from './Shared/Topnav';
import Footer from './Shared/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <div className='min-h-[100vh]'>
            <Topnav/>
            <Outlet/>
            </div>
            
            <Footer/>
        </div>
    );
};

export default Root;