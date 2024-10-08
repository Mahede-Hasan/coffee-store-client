import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id, photo, name, chef, price, supplier, taste, category, details } = coffee;
    const handleUpdateCoffee = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const category = form.category.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const updateCoffee = {
            name, chef, supplier, taste, details, category, price, photo
        }
        form.reset()
        console.log(updateCoffee)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "Success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
        }).then((result) => {

            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`,{
                    method: 'PUT',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(updateCoffee)
                })

                    .then(res => res.json())
                    .then(data => {

                        if (data) {
                            Swal.fire({
                                title: "Successfully",
                                text: "Coffee Updated.",
                                icon: "success"
                            });
                        }
                        console.log(data)
                    })
            }
        });

   
    }
    return (
        <div className='w-full'>
            <div className="max-w-6xl mx-auto">
                <Link to='/'><button className='text-[#331A15] text-2xl font-semibold drop-shadow-xl my-10 flex items-center gap-3'><FaArrowLeftLong className='font-thin' />Back to Home</button></Link>
                <div className=' w-full bg-[#ECEAE3] mb-12 py-10 lg:px-32 md:px-20 px-16'>
                    <h1 className='text-[#331A15] text-4xl font-semibold drop-shadow-xl text-center'>Update Existing Coffee : {name}</h1>
                    <p className='text-center lg:px-40 md:px-32 px-0 my-3'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>


                    <form onSubmit={handleUpdateCoffee}>
                        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mx-auto my-3'>
                            <div className='flex flex-col'>
                                <label className='text-xl mb-2' htmlFor="name">Name</label>
                                <input type="text" name="name" defaultValue={coffee.name} className='px-5 py-2 text-lg' placeholder='Enter coffee name' id="name" />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-xl mb-2' htmlFor="chef">Chef</label>
                                <input type="text" name="chef" defaultValue={coffee.chef} className='px-5 py-2 text-lg' placeholder='Enter coffee Chef' id="chef" />
                            </div>
                        </div>

                        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mx-auto my-3'>
                            <div className='flex flex-col'>
                                <label className='text-xl mb-2' htmlFor="supplier">Supplier</label>
                                <input type="text" name="supplier" defaultValue={coffee.supplier} className='px-5 py-2 text-lg' placeholder='Enter coffee supplier' id="supplier" />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-xl mb-2' htmlFor="taste">Taste</label>
                                <input type="text" name="taste" defaultValue={coffee.taste} className='px-5 py-2 text-lg' placeholder='Enter coffee taste' id="taste" />
                            </div>
                        </div>

                        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mx-auto my-3'>
                            <div className='flex flex-col'>
                                <label className='text-xl mb-2' htmlFor="category">Category</label>
                                <input type="text" name="category" defaultValue={coffee.category} className='px-5 py-2 text-lg' placeholder='Enter coffee category' id="category" />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-xl mb-2' htmlFor="details">Details</label>
                                <input type="text" name="details" defaultValue={coffee.details} className='px-5 py-2 text-lg' placeholder='Enter coffee details' id="details" />
                            </div>
                        </div>

                        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mx-auto mt-3 mb-7'>
                            <div className='flex flex-col'>
                                <label className='text-xl mb-2' htmlFor="price">Price</label>
                                <input type="number" name="price" defaultValue={coffee.price} className='px-5 py-2 text-lg' placeholder='Enter coffee price' id="price" />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-xl mb-2' htmlFor="photo">Photo</label>
                                <input type="text" name="photo" defaultValue={coffee.photo} className='px-5 py-2 text-lg' placeholder='Enter coffee photo' id="photo" />
                            </div>
                        </div>

                        <input className='w-full bg-[#D1B38B] py-2 border-black border cursor-pointer' type="submit" value="Update Coffee" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;