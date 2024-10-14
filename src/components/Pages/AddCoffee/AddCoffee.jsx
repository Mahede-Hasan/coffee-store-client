import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const AddCoffee = () => {


    const handleAddCoffee = e => {
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

        const newCoffee = {
            name, chef, supplier, taste, details, category, price, photo
        }
        fetch('https://coffee-store-server-kxuqsdl2n-mahedes-projects-fb0c4014.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire("Successfully Added coffee");
                }

            })
    }
    return (
        <div className='w-full'>
            <div className="max-w-6xl mx-auto">
                <Link to='/'><button className='text-[#331A15] text-2xl font-semibold drop-shadow-xl my-10 flex items-center gap-3'><FaArrowLeftLong className='font-thin' />Back to Home</button></Link>
                <div className=' w-full bg-[#ECEAE3] mb-12 py-10 lg:px-32 md:px-20 px-16'>
                    <h1 className='text-[#331A15] text-4xl font-semibold drop-shadow-xl text-center'>Add New Coffee</h1>
                    <p className='text-center lg:px-40 md:px-32 px-0 my-3'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>


                    <form onSubmit={handleAddCoffee}>
                        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mx-auto my-3'>
                            <div className='flex flex-col'>
                                <label className='text-xl mb-2' htmlFor="name">Name</label>
                                <input type="text" name="name" className='px-5 py-2 text-lg' placeholder='Enter coffee name' id="name" />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-xl mb-2' htmlFor="chef">Chef</label>
                                <input type="text" name="chef" className='px-5 py-2 text-lg' placeholder='Enter coffee Chef' id="chef" />
                            </div>
                        </div>

                        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mx-auto my-3'>
                            <div className='flex flex-col'>
                                <label className='text-xl mb-2' htmlFor="supplier">Supplier</label>
                                <input type="text" name="supplier" className='px-5 py-2 text-lg' placeholder='Enter coffee supplier' id="supplier" />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-xl mb-2' htmlFor="taste">Taste</label>
                                <input type="text" name="taste" className='px-5 py-2 text-lg' placeholder='Enter coffee taste' id="taste" />
                            </div>
                        </div>

                        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mx-auto my-3'>
                            <div className='flex flex-col'>
                                <label className='text-xl mb-2' htmlFor="category">Category</label>
                                <input type="text" name="category" className='px-5 py-2 text-lg' placeholder='Enter coffee category' id="category" />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-xl mb-2' htmlFor="details">Details</label>
                                <input type="text" name="details" className='px-5 py-2 text-lg' placeholder='Enter coffee details' id="details" />
                            </div>
                        </div>

                        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mx-auto mt-3 mb-7'>
                            <div className='flex flex-col'>
                                <label className='text-xl mb-2' htmlFor="price">Price</label>
                                <input type="number" name="price" className='px-5 py-2 text-lg' placeholder='Enter coffee price' id="price" />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-xl mb-2' htmlFor="photo">Photo</label>
                                <input type="text" name="photo" className='px-5 py-2 text-lg' placeholder='Enter coffee photo' id="photo" />
                            </div>
                        </div>

                        <input className='w-full bg-[#D1B38B] py-2 border-black border cursor-pointer' type="submit" value="Add Coffee" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;