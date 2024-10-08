import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CoffeeDetails = () => {
    const detailsCoffee = useLoaderData()
    const { _id, photo, name, chef, price, details,category, supplier,taste } = detailsCoffee;
    console.log(detailsCoffee)
    return (
        <div className='w-full my-32'>
            <div className="max-w-6xl md:mx-auto mx-10 grid md:grid-cols-2 grid-cols-1 items-center">

                <img
                    className='lg:w-[400px] md:w-[300px] w-[200px] mx-auto'
                    src={photo}
                    alt="Movie" />

                <div className="flex flex-col gap-4 mx-auto">
                    <h2 className="text-2xl">Name:  {name}</h2>
                    <h2 className='text-xl'>Chef: {chef}</h2>
                    <h2 className='text-xl'>Category: {category}</h2>
                    <h2 className='text-xl'>Taste: {taste}</h2>
                    <h2 className='text-xl'>Supplier: {supplier}</h2>
                    <h2 className='text-xl'>Price: ${price}</h2>
                    <p>Description: {details}</p>


                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;