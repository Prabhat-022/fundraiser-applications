import { IoHomeOutline } from "react-icons/io5";
import donate from '../../assets/donate.jpg'
import { Link } from "react-router-dom";

const Hero = () => {

    return (
        <>
            <div className="m-1 px-10 md:px-20 relative top-10 ">
                <div className="flex justify-between m-4 md:m-10">
                    <h1 className="text-2xl md:text-4xl">Dashboard</h1>

                    <div className="flex items-center justify-center">
                        <IoHomeOutline className="md:text-3xl" />
                        <p className="md:text-2xl">/General/Dashboard</p>
                    </div>
                </div>

                <div className="relative top-20 w-full">
                    <img src={donate} alt="" className='w-full h-full md:h-[500px] ' />
                    <div className="absolute top-1/2-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  w-full h-full">

                        <h1 className="text-xl md:text-4xl font-bold t ">Hello Prashant Shukla,</h1>

                        <p className="text-xl md:text-2xl text-white ">Initial push is the toughest! Go through the learning modules, or reach out to your fundraising manager to level up.</p>

                        <Link to='/donate'>
                            <button className="bg-black text-white px-6 py-2 rounded-lg my-8 md:my-10 border-2 border-white hover:bg-white hover:text-black transition duration-300 cursor-pointer">Donate Now</button>
                        </Link>
                    </div>
                </div>


            </div >

        </>
    )
}

export default Hero
