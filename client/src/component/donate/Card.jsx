import img from '../../assets/donate.jpg'
import { useDispatch } from 'react-redux';
import { toggleDonateStatusTab } from '../../redux/cartSlice';

const Card = () => {

    const dispatch = useDispatch();

    const handleOpenDonatePopup = async () => {
        console.log('clicked')
        dispatch(toggleDonateStatusTab());
    }

    return (
        <>
            <div className="bg-white rounded-lg shadow-lg p-4 w-[350px] h-[400px]">
                <img src={img} alt="" className="w-full h-48 object-cover rounded-t-lg" />
                <h1 className="text-2xl font-bold py-2">Contribute towards a Child's education for 12 Months </h1>

                <button className="bg-orange-400 text-white px-4 py-2 rounded-full hover:bg-orange-500 transition duration-300" onClick={handleOpenDonatePopup}>Donate Now</button>
            </div>

        </>
    )
}

export default Card
