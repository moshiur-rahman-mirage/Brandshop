import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';
import SingleBrands from './SingleBrands';


const Brands = () => {
    const allBrands = useLoaderData();
    const [allAddedbrands, setBrands] = useState(allBrands);
    const [presentId,setPresentId]=useState('')
    const [presentName,setPresentName]=useState('')
  


    const handleBrandSubmit = (brandname) => {


        fetch('http://localhost:5000/brands', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(brandname)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Data Inserted Successfully!',
                        icon: 'success'
                    })
                   
                }
            })
    }
  
    const handleUpdate = (presentId,brand) => {

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


    const handleButtonClick=(e)=>{
        e.preventDefault();
        const form = e.target;
        const brandname = form.name.value;
        const brand = { brandname }
        console.log(brand)
        if(presentId!==''){
            handleUpdate(presentId,brand);
        }
        else{
            handleBrandSubmit(brand);
        }
    }

    return (
        <div className='ml-5 w-full'>
            <div className='w-full text-4xl font-bold mx-auto'>
                Brand Form
            </div>

            <form onSubmit={handleButtonClick} className="w-full max-w-lg mt-10">
                <div className="flex flex-wrap -mx-3 mb-6 items-center gap-2 ">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Category Name
                        </label>
                        <input defaultValue ={presentName} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Category Name" />
                    </div>
                    <div>
                        <button type="submit" className="mt-3 btn btn-outline btn-accent hover:bg-primary-700 focus:ring-4">Submit</button>
                    </div>
                </div>
            </form>
            <div className='card'>
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
                                    console.log(b._id)
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