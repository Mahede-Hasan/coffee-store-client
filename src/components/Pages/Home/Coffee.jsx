import React from 'react';
import { FaEye } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffee = ({ coffee, coffees, setCoffees }) => {
    const { _id, photo, name, chef, price } = coffee;

    const handleDelete = _id => {
        // popup modal for delete
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'

                })

                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        console.log(data)
                        const result = coffees.filter(cf => cf._id !== _id)
                        setCoffees(result)
                    })
            }
        });


    }
    return (
        <div className='bg-[#ECEAE3] flex justify-between  items-center py-4 rounded'>
            <img src={photo} className='lg:w-auto md:w-[150px] w-[120px]' alt="" />
            <div className='lg:text-xl md:text-[17px] text-[15px]'>
                <p>Name: {name}</p>
                <p>Chef: {chef}</p>
                <p>Price: ${price}</p>
            </div>
            <div className='lg:px-10 md:px-7 px-5 flex flex-col gap-2 text-white'>

                <Link to={`/detailsCoffee/${_id}`}><button className='bg-[#D2B48C] p-1 text-lg rounded cursor-pointer'><FaEye />
                </button></Link>

                <Link to={`/updateCoffee/${_id}`}><button className='bg-[#3C393B] p-1 text-lg rounded cursor-pointer'><MdEdit />
                </button></Link>

                <Link><button
                    onClick={() => handleDelete(_id)}
                    className='bg-[#EA4744] p-1 text-lg rounded cursor-pointer'><MdDelete />
                </button></Link>

            </div>
        </div>
    );
};

export default Coffee;