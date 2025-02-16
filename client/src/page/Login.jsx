import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setUser } from "../redux/userSlice"

const Login = () => {
    const [login, setlogin] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault()
        console.log(login)
        try {
            const res = await axios.post("/api/users/login", login, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })

            console.log(res)
            if (res.data.success) {
                setlogin(res.data)
                navigate("/")
                dispatch(setUser(res.data.user));
            }
            console.log(res.data)

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
            <div className=" md:w-1/2 p-10 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center">Login</h1>

                <form action="" className="mt-4" onSubmit={handleLogin}>

                    <div className="flex flex-col gap-4">
                        <label htmlFor="email" className="text-lg">Email</label>
                        <input type="email" id="email" className="p-2 border-2 rounded-md" onChange={(e) => setlogin({ ...login, email: e.target.value })} />
                        <label htmlFor="password" className="text-lg">Password</label>
                        <input type="password" id="password" className="p-2 border-2 rounded-md" onChange={(e) => setlogin({ ...login, password: e.target.value })} />
                    </div>
                    <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded-md">Login</button>

                </form>
            </div>
        </div>
    )
}

export default Login
