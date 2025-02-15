import { FiMonitor } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaArrowTurnDown } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";
import { MdOutlineFeedback } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toggleStatusTab } from '../../redux/cartSlice';
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Menu = () => {
    const dispatch = useDispatch();

    const handleCloseTabCart = () => {
        dispatch(toggleStatusTab());
    }

    return (
        <>
            <div className="bg-gray-300 h-[100vh] overflow-y-scroll scrollbar-none p-4 fixed">

                <div className="flex justify-between  items-center">
                    <Link to='/'>
                        <h1 className=" text-2xl border-3 px-6 border-blue-700 rounded-lg cursor-pointer">Logo</h1>
                    </Link>
                    <IoClose className="cursor-pointer" size={25} onClick={handleCloseTabCart} />
                </div>

                <div className="mt-5 bg-red-200 p-3 rounded-lg">
                    <h1 className="text-orange-600 font-bold text-xl">General</h1>
                    <p className="text-sm">Dashboard</p>
                </div>

                <ul className="mt-5 flex flex-col gap-4">
                    <Link to='/dashboard'>
                        <div className="flex items-center gap-2 py-2 px-4 hover:bg-orange-600 cursor-pointer hover:text-white hover:rounded-lg transition-all duration-300" >
                            <FiMonitor />
                            <p className="transition-all duration-300">DashBoard</p>
                        </div>

                    </Link>

                    <Link to='/transaction'>
                        <div className="flex items-center gap-2 py-2 px-4 hover:bg-orange-600 cursor-pointer hover:text-white rounded-lg transition-all duration-300">
                            <TfiMenuAlt />
                            <p className="transition-all duration-300">Transaction</p>
                        </div>
                    </Link>

                    <div className="flex items-center gap-2 py-2 px-4 hover:bg-orange-600 cursor-pointer hover:text-white rounded-lg transition-all duration-300">
                        <FaArrowTurnDown />
                        <p className="transition-all duration-300">Start Here</p>
                    </div>


                    <div className=" flex items-center gap-2 py-2 px-4 hover:bg-orange-600 cursor-pointer hover:text-white rounded-lg transition-all duration-300">
                        <FaRegQuestionCircle />
                        <p className="transition-all duration-300">FAQ</p>
                    </div>

                    <div className=" flex items-center gap-2 py-2 px-4 hover:bg-orange-600 cursor-pointer hover:text-white rounded-lg transition-all duration-300">
                        <FaRegStar />
                        <p className="transition-all duration-300">Rewords</p>
                    </div>

                    <div className="flex items-center gap-2 py-2 px-4 hover:bg-orange-600 cursor-pointer hover:text-white rounded-lg transition-all duration-300">
                        <IoBookOutline />
                        <p className="transition-all duration-300">Learning Modules</p>
                    </div>

                    <div className="flex items-center gap-2 py-2 px-4 hover:bg-orange-600 cursor-pointer hover:text-white rounded-lg transition-all duration-300">
                        <FaRegStar />
                        <p className="transition-all duration-300">Rewords</p>
                    </div>
                    <div className="flex items-center gap-2 py-2 px-4 hover:bg-orange-600 cursor-pointer hover:text-white rounded-lg transition-all duration-300">
                        <MdOutlineFeedback />
                        <p className="transition-all duration-300">Feedback</p>
                    </div>
                </ul>
            </div>
        </>

    )
}

export default Menu
