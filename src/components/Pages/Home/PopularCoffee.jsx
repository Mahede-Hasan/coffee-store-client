import React, { useEffect, useState } from 'react';
import { BsCupHot } from 'react-icons/bs';
import { Link, useLoaderData } from 'react-router-dom';
import SingleCoffee from './SingleCoffee';
const PopularCoffee = () => {
    const coffeeLoader = useLoaderData()
    const [coffees, setCoffees] = useState(coffeeLoader)

    return (
        <div className=' w-full mt-20 mb-10 py-10 lg:px-32 md:px-20 px-10'>
            <div className="max-w-6xl mx-auto">

                {/* header content */}
                <div className='w-full'>
                    <p className='text-center font-serif'>--- Sip & Savor ---</p>
                    <h2 className='text-[#331A15] text-4xl font-semibold text-center drop-shadow-xl my-3'>Our Popular Products {coffeeLoader.length}</h2>

                    <div className="flex justify-center">
                        <Link to='/addCoffee'>
                        <button className='mx-auto bg-[#E3B577] text-white px-6 py-1 flex items-center gap-2'>Add Coffee <BsCupHot className='text-black' /></button>
                        </Link>
                    </div>

                </div>

                {/* popular coffee */}
                <div className='grid md:grid-cols-2 grid-cols-1 my-10 gap-5'>
                    {
                        coffees.map(coffee => 
                        <SingleCoffee 
                            key={coffee._id} 
                            coffee={coffee}
                            coffees={coffees}
                            setCoffees={setCoffees}
                            ></SingleCoffee>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularCoffee;