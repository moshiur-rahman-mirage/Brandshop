import React from 'react';
import Swal from 'sweetalert2';

const Cartitem = ({ item }) => {



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
                fetch(`http://localhost:5000/cart/${_id}`, {
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
                           
                        }
                    })
            }
        })
    }





    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={item.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{item.specs}</p>
                    <div className="flex flex-row items-center card-actions justify-between">
                        <div className="badge badge-outline">Price: {item.price}</div>
                        <button onClick={() => handleDelete(item._id)} className="btn btn-warning badge badge-outline">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );s
};

export default Cartitem;