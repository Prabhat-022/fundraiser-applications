import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../redux/userSlice'
import { useDispatch } from 'react-redux'
const Register = () => {
    const [user, seruser] = useState({
        name: "",
        email: "",
        password: "",
        phoneNumber: ""
    })
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleRegister = async (e) => {
        e.preventDefault()
        console.log(user)
        try {
            const res = await axios.post("/api/users/register", user, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            if(res.data.success){
                navigate("/")
                dispatch(setUser(res.data.user));
                alert(res.data.message)
                
            }
            console.log(res.data)
        } catch (error) {
            console.log('error:', error.response);
            alert(error.response.data.error)

        }
    }


    return (
        <>
            <div className="bg-gray-100 h-screen flex flex-col items-center justify-center md:w-4/5">
                    <div>
                        <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
                            <div className=" md:w-1/2 p-10 bg-white rounded-lg shadow-lg">
                                <h1 className="text-3xl font-bold text-center">Register</h1>

                                <form action="" className="mt-4" onSubmit={handleRegister}>

                                    <div className="flex flex-col gap-4">
                                        <label htmlFor="name" className="text-lg">Name</label>
                                        <input type="text" id="name" className="p-2 border-2 rounded-md" onChange={(e) => seruser({ ...user, name: e.target.value })} />
                                        <label htmlFor="email" className="text-lg">Email</label>
                                        <input type="email" id="email" className="p-2 border-2 rounded-md" onChange={(e) => seruser({ ...user, email: e.target.value })} />
                                        <label htmlFor="password" className="text-lg">Password</label>
                                        <input type="password" id="password" className="p-2 border-2 rounded-md" onChange={(e) => seruser({ ...user, password: e.target.value })} />
                                        <label htmlFor="phoneNumber" className="text-lg">Phone Number</label>
                                        <input type="text" id="phoneNumber" className="p-2 border-2 rounded-md" onChange={(e) => seruser({ ...user, phoneNumber: e.target.value })} />
                                    </div>
                                    <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded-md">Register</button>

                                </form>
                            </div>
                        </div>
                </div   >

            </div>

        </>
    )
}

export default Register
