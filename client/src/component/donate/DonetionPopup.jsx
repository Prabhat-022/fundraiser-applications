import { useSelector } from "react-redux";
import Hello from "./Hello";

const DonetionPopup = () => {

    const statusDonatePopup = useSelector(store => store.cart.popup);
    console.log('statusDonatePopup', statusDonatePopup)

    return (
        <>
            <div
                className={`fixed top-0 left-0 h-full w-56 bg-white shadow-lg transform transition-transform duration-500
                ${statusDonatePopup ? "translate-x-0" : "-translate-x-full"}`}
            >
                <Hello />
            </div>

        </>
    )
}

export default DonetionPopup


