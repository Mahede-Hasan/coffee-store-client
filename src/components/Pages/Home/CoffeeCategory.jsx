import React from 'react';
import category1 from '../../../assets/images/icons/1.png'
import category2 from '../../../assets/images/icons/2.png'
import category3 from '../../../assets/images/icons/3.png'
import category4 from '../../../assets/images/icons/4.png'

const CoffeeCategory = () => {
    return (
        <div className='bg-[#ECEAE3] lg:px-32 md:px-20 px-10 py-10 w-full mx-auto'>
          <div className='grid md:grid-cols-4 grid-cols-1 gap-3 max-w-6xl mx-auto'>
          <div className='p-4 mx-auto md:w-auto w-[300px] cursor-pointer hover:bg-gray-100 transition-all duration-700'>
                <img src={category1} alt="" />
                <h2 className="text-xl font-semibold">Awesome Aroma</h2>
                <p className="text-sm">You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className='p-4 mx-auto md:w-auto w-[300px] cursor-pointer hover:bg-gray-100 transition-all duration-700'>
                <img src={category2} alt="" />
                <h2 className="text-xl font-semibold">High Quality</h2>
                <p className="text-sm">We served the coffee to you maintaining the best quality</p>
            </div>
            <div className='p-4 mx-auto md:w-auto w-[300px] cursor-pointer hover:bg-gray-100 transition-all duration-700'>
                <img src={category3} alt="" />
                <h2 className="text-xl font-semibold">Pure Grades</h2>
                <p className="text-sm">The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div className='p-4 mx-auto md:w-auto w-[300px] cursor-pointer hover:bg-gray-100 transition-all duration-700'>
                <img src={category4} alt="" />
                <h2 className="text-xl font-semibold">Proper Roasting</h2>
                <p className="text-sm">Your coffee is brewed by first roasting the green coffee beans</p>
            </div>

          </div>
        </div>
    );
};

export default CoffeeCategory;