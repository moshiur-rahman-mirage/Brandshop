import React, { useRef } from 'react';
import Swal from 'sweetalert2';

const Signelcategory = ({ category,allAddedCategory,setCategory,setPresentId,setPresentName }) => {
    const {_id,catname}=category;
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
                fetch(`https://b8a10-brandshop-server-side-moshiur-rahman-mirage.vercel.app/category/${_id}`, {
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
                            const remaining = allAddedCategory.filter(dat => dat._id !== _id);
                            setCategory(remaining);
                        }
                    })
            }
        })
    }
  
    const handleUpdate = (_id) => {
     setPresentId(_id)
     setPresentName(catname)
    };


    return (
        
            
            <tr>
               
                <td>{catname}</td>
                <td><button onClick={() => handleDelete(_id)}>Delete</button></td>
                <td><button onClick={()=>handleUpdate(_id)}>Update</button></td>
            </tr>

       
    );
};

export default Signelcategory;