import img1 from '../../../assets/images/cups/Rectangle 9.png';
import img2 from '../../../assets/images/cups//Rectangle 10.png';
import img3 from '../../../assets/images/cups/Rectangle 11.png';
import img4 from '../../../assets/images/cups/Rectangle 12.png';
import img5 from '../../../assets/images/cups/Rectangle 13.png';
import img6 from '../../../assets/images/cups/Rectangle 14.png';
import img7 from '../../../assets/images/cups/Rectangle 15.png';
import img8 from '../../../assets/images/cups/Rectangle 16.png';
const FollowSocial = () => {
    return (
        <div className="mb-10 py-8 lg:px-32 md:px-20 px-10">
            <div className="max-w-6xl mx-auto">
            <div className='pb-4'>
                <p className="text-center">Follow Us Now</p>
                <h1 className="text-[#331A15] text-4xl font-semibold text-center drop-shadow-xl my-3">Follow on Instagram</h1>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4'>
                <img className='cursor-pointer' src={img1} alt="" />
                <img className='cursor-pointer' src={img2} alt="" />
                <img className='cursor-pointer' src={img3} alt="" />
                <img className='cursor-pointer' src={img4} alt="" />
                <img className='cursor-pointer' src={img5} alt="" />
                <img className='cursor-pointer' src={img6} alt="" />
                <img className='cursor-pointer' src={img7} alt="" />
                <img className='cursor-pointer' src={img8} alt="" />
            </div>
            </div>
        </div>
    );
};

export default FollowSocial;