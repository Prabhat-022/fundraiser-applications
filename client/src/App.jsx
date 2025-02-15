
import Dashboard from "./component/dashboard/Dashboard"
import DonatePage from "./component/donate/DonatePage"
import Layout from "./component/Layout"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Transactions from "./component/transactions/Transactions"
import Hero from "./component/mainContaint/Hero"
import UserProfile from "./component/userprofile/UserProfile"

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
          </Route>          {/* Add your routes here */}
        </Routes>
      </Router>
    </>
  )
}

export default App
