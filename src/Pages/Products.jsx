
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ItemCard/ProductCard';


const Products = () => {
    const products = useLoaderData();
    const len=products.length
    const {brand}=products
    return (
        <div className='bg-light'> 
            <h2>{brand} Items</h2>
        <div className='grid  grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto'>
            {
                products.map(item=>{
                    return(
                        <ProductCard key={item._id} item={item}/>
                    )
                })
            }
            {len <1 &&
            <div className='text-6xl text-center font-bold'>No Item Found</div>
            }
        </div>
        </div>
    );
};

export default Products;