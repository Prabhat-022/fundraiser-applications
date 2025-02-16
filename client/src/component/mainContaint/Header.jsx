import { IoIosArrowDown } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { toggleStatusTab } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
    const user = useSelector((state)=>state.user.user);
    console.log('user', user)
    const dispatch = useDispatch();

    const handleOpenTabCart = async () => {
        console.log('clicked')
        dispatch(toggleStatusTab());

    }
    return (
        <>
            <div className="w-[100%] h-16 shadow bg-white p-4  px-4">
                <div className="w-full h-full flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <TiThMenu size={20} className="cursor-pointer" onClick={handleOpenTabCart} />
                        <Link to='/'>
                            <h1 className="text-2xl font-bold t">Logo</h1>
                        </Link>
                    </div>
                    <div className=" flex items-center justify-center ">
                        <img src="" alt="" />
                        <FaRegUserCircle size={30} />
                        <div className="px-3">
                            <p className="font-bold text-sm"> {user?.name || "PRASHANT SHUKLA"}</p>

                            <div className="flex items-center">
                                <p className="font-bold text-sm">Fundraiser
                                </p>
                                <IoIosArrowDown />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* {isOpen && (
                <div className="bg-gray-200 fixed left-0 top-0 w-64 h-screen shadow-lg">
                    <nav>
                        <ul>
                            <li>Dashboard</li>
                            <li>Transaction</li>
                            <li>Start Here</li>
                            <li>FAQ</li>
                            <li>Learning Modules</li>
                            <li>Rewords</li>
                            <li>Feedback</li>
                        </ul>
                    </nav>
                </div>
            )} */}
        </>
    )
}

export default Header
