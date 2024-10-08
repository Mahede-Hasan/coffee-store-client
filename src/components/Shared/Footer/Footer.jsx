import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import footerBg from '../../../assets/images/more/13.jpg'
import logoFooter from '../../../assets/images/more/logo1.png'
import { IoIosMail } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
const Footer = () => {
    return (
        <div className=''>

            <footer style={{ backgroundImage: `url(${footerBg})` }} className='w-full bg-cover bg-center bg-no-repeat lg:px-32 md:px-20 px-10'>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 grid-cols-1 place-content-between gap-3">

                    <div className='py-12 flex flex-col gap-6'>
                        <img src={logoFooter} className='w-10' alt="" />
                        <h1 className='text-[#331A15] text-3xl font-semibold drop-shadow-xl '>Espresso Emporium</h1>
                        <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, <br /> to share with your best companion.</p>

                        {/* social */}
                        <div className='flex gap-2'>
                            <FaFacebook className='text-xl cursor-pointer text-[#331A15]' />
                            <FaTwitter className='text-xl cursor-pointer text-[#331A15]' />
                            <FaInstagram className='text-xl cursor-pointer text-[#331A15]' />
                            <FaLinkedin className='text-xl cursor-pointer text-[#331A15]' />
                        </div>

                        <h3 className='text-[#331A15] text-3xl font-semibold drop-shadow-xl '>Get in Touch</h3>
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-3'>
                                <FaPhoneAlt />
                                <p>+88 01533 333 333</p>
                            </div>
                            <div className='flex gap-3'>
                                <IoIosMail />
                                <p>info@gmail.com</p>
                            </div>
                            <div className='flex gap-3'>
                                <FaLocationDot />
                                <p>72, Wall street, King Road, Dhaka</p>
                            </div>
                        </div>

                    </div>

                    <div className='py-12'>
                        <div className="">

                            <h1 className='text-[#331A15] text-3xl font-semibold drop-shadow-xl mb-6'>Contact with Us</h1>
                            <div className='flex flex-col gap-5 '>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder='Name'
                                    className='ps-4 py-2'
                                    id="" />
                                <input
                                    type="email"
                                    name="email"
                                    className='ps-4 py-2'
                                    placeholder='Email'
                                    id="" />
                                <textarea
                                    placeholder='Message'
                                    className='ps-4 py-2'
                                    rows='5'
                                ></textarea>
                                <div className=''>
                                <button className='bg-gray-300 border px-4 py-2 rounded-xl'>Send Message</button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </footer>


            <footer className="py-2 bg-[#110302] w-full flex justify-center text-white">
                <small>All right reserves @coffee_store</small>
            </footer>
        </div>
    );
};

export default Footer;