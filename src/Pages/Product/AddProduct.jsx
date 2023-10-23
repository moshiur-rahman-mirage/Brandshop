import Sidenav from '../../Shared/Sidenav';
import { AuthContext } from '../../Providers/AuthProviders';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';



const AddProduct = () => {
    const { user, logout, brand, loading } = useContext(AuthContext)
    
    return (
        <div className=' md:min-h-[100vh-75px] bg-light mx-auto'>
            <div className='md:grid md:grid-cols-6 flex flex-col'>
                <div className="md:col-span-1">
                    <Sidenav />
                </div>
                <div className="md:col-span-5 ml-10">
                    <Outlet />
                </div>

            </div>

        </div>
    );
};

export default AddProduct;