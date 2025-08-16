import React, { useState } from 'react'
import logimg from '../assets/verify.png'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import signup from '../assets/add-user.png'
import Instance from '../Axios'


function UserLogin() {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [message, setmessage] = useState("")
    const navigate = useNavigate();

    const logincheck = async () => {
        try {
            console.log({ email, password });
            const response = await Instance.get("/login", { params: { email, password } })
            if (response.data.success) {
                navigate("/");
                console.log(response.data);
            }
            else {
                setmessage(response.data.message)
            }
        }
        catch (err) {
            console.log(err);
            setmessage({ message: "error ocuured" })
        }
    }
    return (
        <>
            <section className='bg-gray-200 w-screen h-screen flex flex-col justify-center items-center'>
                <div
                    className='bg-gray-500 w-80 h-80 items-center justify-center flex flex-col gap-10 rounded-2xl'>
                    <div className='flex gap-2'>
                        <img src={logimg} alt="" className='w-8 h-8' />
                        <h3 className='text-xl font-bold '>User Login</h3>
                    </div>
                    <div className='flex flex-col  gap-5 items-center'>
                        <input id='email'
                            required name='email' type="email"
                            value={email}
                            onChange={(e) => { setemail(e.target.value) }}
                            className='text-black w-50 h-8 border rounded bg-white' placeholder=' Enter Your Email' />
                        <input id='password'
                            required name='password'
                            type="password"
                            value={password}
                            onChange={(e) => { setpassword(e.target.value) }}
                            className='text-black w-50 h-8 border rounded bg-white' placeholder=' Enter Your Password' />
                        <button type='submit' className='border bg-gray-300 p-2 rounded-xl' onClick={logincheck}>Login</button>
                    </div>
                </div>
                <div>
                </div>
                <Link to={"/user/signup"} className='font-bold text-xl pt-2'>
                    <div className='flex items-center justify-center gap-2'>
                        <img src={signup} className='w-6' alt="" />
                        <p>signup</p>
                    </div>
                </Link>
            </section>
        </>
    )
}

export default UserLogin 