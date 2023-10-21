
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';


const Products = () => {
    const products = useLoaderData();

    return (
        <div className='grid grid-cols-3 max-w-7xl ms-auto'>
            {
                products.map(item=>{
                    return(
                        <ProductCard key={item._id} item={item}/>
                    )
                })
            }
        </div>
    );
};

export default Products;