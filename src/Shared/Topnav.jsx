import React from 'react';
import { Link } from 'react-router-dom';

const Topnav = () => {
    const listitems = <>
        <li><a>Item 1</a></li>
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
        <li><a>Item 3</a></li>
    </>
    return (
        <div className=''>
            <div className=" navbar bg-neutral">

                <div className="navbar-start border-red">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" text-neutral-content menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Add Products</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-neutral-content text-xl">Logo</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu  bg-neutral  text-neutral-content menu-horizontal px-1">
                        <li><a className='hover:text-white'>Home</a></li>
                        <li><a  className='hover:text-white'>Add Products</a></li>
                    </ul>
                </div>
                <div className='navbar-end text-neutral-content'>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                        <Link to="/login" className="btn btn-ghost normal-case text-neutral-content text-xl">Log In</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Topnav;