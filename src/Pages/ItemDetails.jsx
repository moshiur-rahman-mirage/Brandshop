import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ItemDetails = () => {
    const loadedProduct=useLoaderData();
    const {_id,img,specs,name}=loadedProduct;
    return (
        <div>
           {name}
        </div>
    );
};

export default ItemDetails;