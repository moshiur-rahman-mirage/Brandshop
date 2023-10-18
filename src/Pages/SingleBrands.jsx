import React, { useRef } from 'react';
import Swal from 'sweetalert2';

const SingleBrands = ({ brand,allAddedbrands,setbrands,setPresentId,setPresentName }) => {
    const {_id,brandname}=brand;
    console.log(brand)
    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/brands/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = allAddedbrands.filter(dat => dat._id !== _id);
                            setbrands(remaining);
                        }
                    })
            }
        })
    }
  
    const handleUpdate = (_id) => {
     setPresentId(_id)
     setPresentName(brandname)
    };


    return (
        

            <tr>
                <td>{brandname}</td>
                <td><button onClick={() => handleDelete(_id)}>Delete</button></td>
                <td><button onClick={()=>handleUpdate(_id)}>Update</button></td>
            </tr>

       
    );
};

export default SingleBrands;