
import Brandhero from './Pages/Brands/Brandhero';
import Hero from './Pages/Hero';
import Footer from './Shared/Footer';
import Topnav from './Shared/Topnav';

import { Outlet } from 'react-router-dom';

const Root = () => {
    return (

        <div className="min-h-screen object-contain">
            <Topnav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;