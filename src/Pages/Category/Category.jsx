import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';
import Singlecategory from './Singlecategory'


const Category = () => {
    const [loading, setLoading] = useState(false);
    console.log(loading)
    const allCategory = useLoaderData();
    const [allAddedCategory, setCategory] = useState(allCategory);
    const [presentId, setPresentId] = useState('')
    const [presentName, setPresentName] = useState('')



    const handleBrandSubmit = (catname) => {

        console.log(catname)
        fetch('https://b8a10-brandshop-server-side-moshiur-rahman-mirage.vercel.app/category', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(catname)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setLoading(false)
                    Swal.fire({
                        title: 'Success',
                        text: 'Data Inserted Successfully!',
                        icon: 'success'
                    })

                }
            })
    }

    const handleUpdate = (presentId, category) => {

        // const updatedData = { category }
        // console.log(updatedData)
        fetch(`https://b8a10-brandshop-server-side-moshiur-rahman-mirage.vercel.app/category/${presentId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(category)

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
        const catname = form.name.value;
        const cat={catname}
        if (presentId !== '') {
            handleUpdate(presentId, cat);
        }
        else {
            handleBrandSubmit(cat);
        }
    }

    useEffect(() => {
       console.log(allAddedCategory)
    }, [loading])

    return (
        <div className='ml-5 w-full mx-auto'>
            <div className=' text-4xl font-bold mx-auto'>
                Category Form
            </div>

            <form className='py-5' onSubmit={handleButtonClick}>
                <div className="flex-wrap -mx-3 mb-6 items-center gap-5 flex flex-row">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 flex flex-row gap-5">
                        <div>
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                               Category Name
                            </label>
                            <input defaultValue={presentName} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Category" />
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
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allAddedCategory.map(category => {
                                    return (
                                        <Singlecategory
                                            key={category._id}
                                            category={category}
                                            allAddedCategory={allAddedCategory}
                                            setCategory={setCategory}
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

export default Category;