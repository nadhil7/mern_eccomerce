import React from 'react'
import logimg from '../assets/verify.png'
import { Link } from 'react-router-dom'
function Login() {
    return (
        <>
            <section className='bg-violet-300 w-screen h-screen flex flex-col justify-center items-center'>
                <div
                    className='bg-gray-500 w-80 h-80 items-center justify-center flex flex-col gap-10 rounded-2xl'>
                    <div className='flex gap-2'>
                        <img src={logimg} alt="" className='w-8 h-8' />
                        <h3 className='text-xl font-bold '>Login Here</h3>
                    </div>
                    <div className='flex flex-col  gap-5 items-center'>
                        <input id='email'
                            required name='email
                            ' type="email"
                            className='text-black w-50 h-8 border rounded bg-white' placeholder='Enter Your Email' />
                        <input id='password'
                            required name='password'
                            type="password"
                            className='text-black w-50 h-8 border rounded bg-white' placeholder='Enter Your Password' />
                        <Link to={"/loginsubmit"}
                            className='text-xl font-bold border rounded w-20 hover:text-white text-center h-8'>
                            Login</Link>
                    </div>
                </div>
                <div>
                    <Link to={"/Signup"}>Signup</Link>
                </div>
            </section>
        </>
    )
}

export default Login 