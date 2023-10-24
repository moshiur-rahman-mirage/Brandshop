import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Topnav = () => {
    const { user, logout, brand, loading } = useContext(AuthContext)
    console.log(user)
    // useEffect(() => {
    //     fetch('http://localhost:5000/cart/:email')
    //         .then(res => res.json())
    //         .then(data => setCart(data))
    // }, [])

    const handleSignOut = () => {
        logout()
            .then()
            .catch()
    }



    return (
        <div className=" h-[75px] bg-black">
            <div className="navbar ">

                <div className="navbar-start border-red">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" text-neutral-content menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-52">
                            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : 'link')} >Home</NavLink></li>
                            {user && <li><NavLink to="/addproduct" className={({ isActive }) => (isActive ? 'active-link' : 'link')} >Add Product</NavLink></li>}
                        </ul>
                    </div>
                    <NavLink to="/" className="btn btn-ghost normal-case text-neutral-content text-xl">{brand}</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu hover:text-white  text-neutral-content menu-horizontal px-1">
                        <li><NavLink to="/" className="text-base" >Home</NavLink></li>
                        <li><NavLink to="/addproduct" className="text-base" >Add Product</NavLink></li>
                    </ul>
                </div>
                <div className='navbar-end text-neutral-content'>
                    <div className="dropdown dropdown-end">
                        
                        {
                            user && user.displayName
                        }
                        <label tabIndex={0} className="btn btn-ghost border-white btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                {/* <span className="badge badge-sm indicator-item"></span> */}
                            </div>
                        </label>
                        {user &&
                            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <div className="card-actions">
                                        <NavLink to={`/cart/${user.email}`} user={user} className="btn btn-primary btn-block">View cart</NavLink>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn border-white btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                 {user &&   <img src={user.photoURL} /> }
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    user ? <button className="btn normal-case text-black-content text-xl" onClick={handleSignOut} >Sign Out</button> :
                                        <NavLink to="/login" className="btn normal-case text-black-content text-xl">Log In</NavLink>
                                }
                            </ul>
                        </div>


             

                    </div>
                </div>

            </div>
        
    );
};

export default Topnav;