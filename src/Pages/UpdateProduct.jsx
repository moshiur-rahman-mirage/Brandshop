import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const UpdateProduct = ({item}) => {
    const [brand, setBrand] = useState([])
    const [category, setCategory] = useState([])
    const [image, setImage] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => setBrand(data))
    }, [])


    const convertToBase64 = e => {
        console.log(e);
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => setImage(reader.result)
        reader.onerror = (error) => (console.log(error));

    }


    const handleUpdate = (presentId, brand) => {

        // const updatedData = { category }
        // console.log(updatedData)
        fetch(`http://localhost:5000/brands/${presentId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(brand)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                 
                    
                    Swal.fire({
                        title: 'Success',
                        text: 'Data updated Successfully!',
                        icon: 'success'
                    })

                }
            })
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        const form = e.target;
        const name = form.pname.value;
        const brand = form.pbrand.value
        const category = form.pcategory.value
        const price = form.prate.value
        const rating=form.prating.value
        const specs = form.pspecs.value
        const img = image
        const newitem = { name, brand, category, price, specs, img,rating }
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newitem)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    // setBrands(data)
                    Swal.fire({
                        title: 'Success',
                        text: 'Data Inserted Successfully!',
                        icon: 'success'
                    })



                }
            })
    }

    return (
        <div>
            <div className='py-5 font-bold'>Product Form</div>
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Product Name
                        </label>
                        <input defaultValue={item?.name} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="pname" type="text" placeholder="Product Name" />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            Brand
                        </label>
                        <div className="relative">
                            <select defaultValue={item?.brand} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="pbrand">
                                {brand.map(brand => {
                                    return (
                                        <option key={brand._id}>{brand.brandname}</option>
                                    )
                                })}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            Type
                        </label>
                        <div className="relative">
                            <select defaultValue={item?.category} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="pcategory">
                                {category.map(cat => {
                                    return (
                                        <option key={cat._id}>{cat.catname}</option>
                                    )
                                })}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Price
                        </label>
                        <input defaultValue={item?.price} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="prate" type="text" placeholder="0.00" />
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                            Short Description
                        </label>
                        <input defaultValue={item?.specs} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="pspecs" type="textarea" />
                    </div>

                </div>
                <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='flex flex-col px-4 leading-tight w-full md:w-1/2 '>

                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Image
                        </label>
                        <input className="block w-full py-3 px-3  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" accept='image' onChange={convertToBase64} />

                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Rating
                        </label>
                        <input defaultValue={item?.rating} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="prating" type="text" placeholder="1-5" />
                    </div>

                </div>
                <div>
                  {!item &&  <button type="submit" className="mt-3 w-full btn btn-outline btn-accent hover:bg-primary-700 focus:ring-4">Submit</button>}
                  {item &&  <button onClick={handleUpdate} className="mt-3 w-full btn btn-outline btn-accent hover:bg-primary-700 focus:ring-4">Update</button>}
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;