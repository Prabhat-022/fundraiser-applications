import { FaRegCopy } from "react-icons/fa6";
import { IoShareOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { WhatsappShareButton } from "react-share";


const Dashboard = () => {
    const shareUrl = 'https://whatsapp.com';
    const text = "I am volunteering with Naye Pankh Foundation, a distinguished NGO based in Noida, Uttar Pradesh. Recognized by the government with 80G & 12A registration and featured in esteerned publications such as The Pioneer, Dainik Jagran, and Hindustan, NayePankh Foundation stands as one of the largest student-led organizations dedicated to uplifting the underprivileged and fostering positive societal change. Currently, we are actively engaged with over 475 children across 10 shelter homes, 3 community centers, and 5 villages, fostering a supportive environment for their holistic growth and development. Your support can make a significant difference in the lives of these deserving children. To contribute and be part of our endeavor, please visit https://donate.nayepankh.org.in/?r=pra7432 and remember to use the referral code pra7432 to help us track our efforts effectively. To learn more about our initiatives and the impact we're making, please visit www.nayepankh.org.in. Together, let's pave the way for a brighter future for the underprivileged children in our society. Thank you for your generosity and support!";

    const handleCopy = () => {
        const textToCopy = "https://donate.nayepankh.org.in/?r=pra7432"; // Replace with your desired text

        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                console.log('Text copied to clipboard');
                alert('Donation link is copied')
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };

    return (
        <>
            <div className=" flex justify-between w-full h-full flex-col mt-10 ">

                <div className="  flex justify-center items-center flex-col h-[200px] w-full mb-10">

                    <div className=" border-dashed rounded-full border-8  border-red-400 p-5 border-b-0  w-[200px] h-[200px] flex flex-col items-center justify-center relative">
                        <h1 className='font-bold text-center'>Goal Achieved</h1>
                        <p className='text-center text-xl'>10</p>
                    </div>

                    <div className=" absolute top-69 font-bold ">
                        <h1 className='text-center text-2xl'> Total Goal </h1>
                        <p className='text-center text-2xl'>3000</p>
                    </div>


                </div>


                <div className=" flex flex-col items-center mt-4">
                    <h1 className='text-red-500 my-2'>Level Achieved: <span className='text-black'>Star</span></h1>


                    <div className="w-[200px] h-1 bg-gray-400 mb-4"></div>

                    <div className="flex justify-between">

                        <div className=" flex items-center  gap-2 mx-2 bg-gradient-to-tl from-rose-600 to-purple-700 rounded-lg cursor-pointer px-3 py-2">
                            <button>Rewards</button>
                        </div>



                        <div className=" flex items-center  gap-2 mx-2 bg-gradient-to-tl from-rose-600 to-purple-700 rounded-lg cursor-pointer px-3 py-2" onClick={handleCopy}>
                            <FaRegCopy />
                            <button className='cursor-pointer'>
                                Copy Donation Link
                            </button>
                        </div>
                    </div>

                    <h1 className="italic py-4">Unlock Ninja Level at 5000</h1>

                    <h1 className='text-red-500 font-bold py-4'>Time Left : <span className='font-bold text-black'>Campaign Expired</span></h1>

                    <button className='bg-gradient-to-tl from-rose-600 to-purple-700 rounded-lg cursor-pointer px-3 py-2'>Extend Now</button>


                    <div className="w-[350px] h-1 bg-gradient-to-r from-rose-600 to-purple-700 my-4"></div>

                    <h1 className='text-red-500 mb-2'>Reference Cod : <span>pra7432</span></h1>


                    <Link to='/donate'>
                        <button className='bg-gradient-to-tl from-rose-600 to-purple-700 rounded-lg cursor-pointer px-3 py-2'>Start Here</button>
                    </Link>
                </div>

                <WhatsappShareButton title={text} url={shareUrl}>

                    <div className=" flex items-center gap-2 justify-center mx-2 bg-gradient-to-tl from-rose-600 to-purple-700 rounded-lg cursor-pointer px-3 py-2 bottom-0 mt-20">
                        <IoShareOutline />
                        Share On whatsapp

                    </div>
                </WhatsappShareButton>

            </div>


        </>
    )
}

export default Dashboard
