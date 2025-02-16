import { useDispatch } from "react-redux";
import { toggleDonateStatusTab } from "../../redux/cartSlice";
import { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { IoCloseCircleOutline } from "react-icons/io5";

const DonetionPopup = () => {
    const stripeKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY; // Accessing the environment variable

    const [payment, setPayment] = useState({
        amount: '',
        referenceCode: '',
        name: '',
        email: '',
        phoneNumber: '',
    });
    const [product, setProduct] = useState({
        name: 'prabhat',
        price: 10,
        description: 'hello world',
        productBy: 'facebook'
    })

    const dispatch = useDispatch();

    const handleCloseTabCart = () => {
        dispatch(toggleDonateStatusTab());
    }

    const makePayment = (token) => {

        console.log(token);
        alert('Payment Successful');
        const body = {
            token,
            product
        }
        const headers = {
            'Content-Type': 'application/json'
        }
        return fetch('/api/payment/donate', {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        }).then(res => res.json())
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[650px] w-[300px] bg-white shadow-lg rounded-lg p-4 lg:w-[600px] lg:h-[500px]">
                <h1 className="text-2xl font-bold text-center mb-4">Personal information</h1>

                <button className="absolute top-4 right-4 cursor-pointer hover:scale-110 transition duration-300" onClick={handleCloseTabCart}><IoCloseCircleOutline size={30} /></button>


                <form action="" className="flex flex-col gap-4">
                    <label htmlFor="">Name</label>
                    <input type="text" name="" id="" className="p-2 border-2 rounded-md" onChange={(e) => setPayment({ ...payment, name: e.target.value })} />

                    <div className="flex flex-col gap-2 md:flex md:flex-row md:gap-2">
                        <div>
                            <label htmlFor="">Email</label>
                            <input type="email" name="" id="" className="p-2 border-2 rounded-md" onChange={(e) => setPayment({ ...payment, email: e.target.value })} />
                        </div>
                        <div>
                            <label htmlFor="">Phone Number</label>
                            <input type="number" name="" id="" className="p-2 border-2 rounded-md" onChange={(e) => setPayment({ ...payment, phoneNumber: e.target.value })} />
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="" id="" className="w-4 h-4" />
                        <p>Do you wish to receive Tax Exemption</p>
                    </div>

                    <div>
                        <label htmlFor="">Reference Code</label>
                        <input type="text" name="" id="" className="p-2 border-2 rounded-md" onChange={(e) => setPayment({ ...payment, referenceCode: e.target.value })} />
                    </div>
                    <label htmlFor="">Donation Amount</label>
                    <input type="text" name="" id="" className="p-2 border-2 rounded-md" onChange={(e) => setPayment({ ...payment, amount: e.target.value })} />

                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Submit</button>

                </form>

                <StripeCheckout
                    stripeKey={stripeKey}
                    token={makePayment}
                    billingAddress
                    shippingAddress
                    amount={product.price * 100}
                    name={product.name}
                    description={product.description}
                    image='https://i.imgur.com/4YdSd3A.png'
                >
                    <button>Pay</button>
                </StripeCheckout>
            </div>



        </>
    )
}

export default DonetionPopup
