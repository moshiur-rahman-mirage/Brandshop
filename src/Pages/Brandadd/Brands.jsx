import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';
import SingleBrands from './SingleBrands';


const Brands = () => {
    const [loading, setLoading] = useState(false);
    console.log(loading)
    const allBrands = useLoaderData();
    const [allAddedbrands, setBrands] = useState(allBrands);
    const [presentId, setPresentId] = useState('')
    const [presentName, setPresentName] = useState('')
    const [ximage, setxImage] = useState('');


    const handleBrandSubmit = (brandname) => {


        fetch('https://b8a10-brandshop-server-side-moshiur-rahman-mirage.vercel.app/brands', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(brandname)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setLoading(false)
                    // setBrands(data)
                    Swal.fire({
                        title: 'Success',
                        text: 'Data Inserted Successfully!',
                        icon: 'success'
                    })

                }
            })
    }

    const handleUpdate = (presentId, brand) => {

        // const updatedData = { category }
        // console.log(updatedData)
        console.log(presentId)
        fetch(`https://b8a10-brandshop-server-side-moshiur-rahman-mirage.vercel.app/brands/${presentId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(brand)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setLoading(false)
                    
                    Swal.fire({
                        title: 'Success',
                        text: 'Data updated Successfully!',
                        icon: 'success'
                    })

                }
            })
    }


    const handleButtonClick = (e) => {
        setLoading(true)
        e.preventDefault();
        const form = e.target;
        const brandname = form.name.value;
        const ximage = form.imageurl.value;
        const brand = { brandname, ximage }
        console.log(brand)
        if (presentId !== '') {
            handleUpdate(presentId, brand);
        }
        else {
            handleBrandSubmit(brand);
        }
    }

    useEffect(() => {
       console.log(allAddedbrands)
    }, [loading])

    return (
        <div className='ml-5 w-full mx-auto'>
            <div className=' text-4xl font-bold mx-auto'>
                Brand
            </div>

            <form onSubmit={handleButtonClick}>
                <div className="flex-wrap -mx-3 mb-6 items-center gap-5 flex flex-row">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 flex flex-row gap-5">
                        <div>
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Brand Name
                            </label>
                            <input defaultValue={presentName} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Brand" />
                        </div>
                        <div className='flex flex-col w-full '>

                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Image URL
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="imageurl" type="text" />

                        </div>
                    </div>
                    <div>
                        <button type="submit" className="mt-3 btn btn-outline btn-accent hover:bg-primary-700 focus:ring-4">Submit</button>
                    </div>
                </div>
            </form>
            <div className='card'>
              
                  {loading &&  <span className="loading loading-spinner loading-lg"></span> }

               
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr>
                                <th>Category Name</th>
                                <th>Image</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allAddedbrands.map(brand => {
                                    return (
                                        <SingleBrands
                                            key={brand._id}
                                            brand={brand}
                                            allAddedbrands={allAddedbrands}
                                            setBrands={setBrands}
                                            setPresentId={setPresentId}
                                            setPresentName={setPresentName}

                                        />
                                    )

                                })
                            }
                        </tbody>

                    </table>
                </div>

            </div>

        </div>
    );
};

export default Brands;