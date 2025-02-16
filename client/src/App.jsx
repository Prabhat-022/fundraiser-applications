
import Dashboard from "./component/dashboard/Dashboard"
import DonatePage from "./component/donate/DonatePage"
import Layout from "./component/Layout"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Transactions from "./component/transactions/Transactions"
import Hero from "./component/mainContaint/Hero"
import UserProfile from "./component/userprofile/UserProfile"
import Login from "./page/Login"
import Register from "./page/Register"
import CheckoutForm from "./component/payment/CheckoutForm"
import {loadStripe} from '@stripe/stripe-js';
import {
  Elements,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('sk_test_51NibPfSC7o701ELz7cw1bXdelbHUbLei9fBC6VA3MXmY66361wVNTbEV9oC85p9rROspsW2FGDG8rxWCIl6P6rd600cH6UBEqI');

const options = {
  mode: 'payment',
  amount: 1099,
  currency: 'usd',
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};

const App = () => {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Hero />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/transaction" element={<Transactions />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/pay" element={
              <Elements stripe={stripePromise} options={options}>
                <CheckoutForm />
              </Elements>
            } />
          </Route>          {/* Add your routes here */}
        </Routes>
      </Router>
    </>
  )
}

export default App
