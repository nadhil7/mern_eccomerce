import React, { useState } from 'react'
import logimg from '../assets/verify.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Login() {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const logincheck =async()=>{
        try{
         let data = await axios.post("http://localhost:4000/admin/login",{email:email,password:password})
        }
        catch(err)
        {
            console.log(err);
            
        }
    }
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
                            required name='email' type="email"
                            value={email}
                            onChange={(e)=>{setemail(e.target.value)}}
                            className='text-black w-50 h-8 border rounded bg-white' placeholder='Enter Your Email' />
                        <input id='password'
                            required name='password'
                            type="password"
                            value={password}
                            onChange={(e)=>{setpassword(e.target.value)}}
                            className='text-black w-50 h-8 border rounded bg-white' placeholder='Enter Your Password' />
                        <button type='submit' className='border bg-gray-300 p-2 rounded-xl' onClick={logincheck}>Login</button>
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