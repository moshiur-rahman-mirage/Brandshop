import React from 'react';
import { Sidebar, MenuItem, Menu, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const Sidenav = () => {
    return (
        <div>
            <Sidebar>
                <Menu>

                    <SubMenu label="Product Master">
                        <MenuItem component={<Link to="brands" />}>
                          
                          Brands
                        </MenuItem>
                        <MenuItem component={<Link to="category" />}>
                          
                          Category
                        </MenuItem>
                        <MenuItem component={<Link to="productform" />}> Add Product</MenuItem>
                       
                    </SubMenu>



                </Menu>
            </Sidebar>;
        </div>
    );
};

export default Sidenav;