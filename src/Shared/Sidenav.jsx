import React from 'react';
import { Sidebar, MenuItem, Menu, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { AiOutlineBars } from "react-icons/ai";
import { useState } from 'react';

const Sidenav = () => {
    // const [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <Sidebar className='min-h-screen' >
                {/* <AiOutlineBars className="pl-5 font-bold text-4xl" onClick={() => setCollapsed(!collapsed)} /> */}
                <Menu >
                    <MenuItem component={<Link to="brands" />}>
                        Brands
                    </MenuItem>
                    <MenuItem component={<Link to="category" />}>
                        Category
                    </MenuItem>
                    <MenuItem component={<Link to="productform" />}> Add Product</MenuItem>
                </Menu>
            </Sidebar>;

        </div>
    );
};

export default Sidenav;