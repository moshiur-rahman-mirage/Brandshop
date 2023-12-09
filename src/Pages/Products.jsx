
import { useLoaderData, useParams } from 'react-router-dom';
import ProductCard from './ItemCard/ProductCard';
import Sliderimg from './Sliderimg';


const Products = () => {
    const products = useLoaderData();
    const len = products.length
    const { brandname } = useParams();
    console.log(brandname)
    return (
        <div className='bg-light flex flex-col'>
            {/* <Sliderimg brandname={brandname} /> */}

            <h2 className='text-4xl font-bold mx-auto py-5'>{brandname} Products</h2>
            {len < 1 &&
                <div className='text-6xl mt-1 mx-auto text-red-600 text-center font-bold'>No Item Found</div>
            }
            <div className='grid  min-h-screen md:grid-cols-2 gap-5 grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto'>
                {
                    products.map(item => {
                        return (
                            <ProductCard key={item._id} item={item} />
                        )
                    })
                }
            </div>
            
            {console.log(brandname)}
        </div>
    );
};

export default Products;