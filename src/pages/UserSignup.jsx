import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Instance from '../Axios'

function UserSignup() {

    const [name, setname] = useState("")
    const [phone, setphone] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()

    const adduser = async () => {
        try {
            const Data = {
                "name": name,
                "email": email,
                "phone": phone,
                "password": password
            }
            console.log("hi");
            const response = await Instance.post("/user/signup", Data);
            console.log(response.data);
            if (response.data.success) {
                navigate("/");
                console.log(response.data);
            }
            alert("something went wrong");
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow" />
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                        Create a new account
                    </h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <div>
                            <label className="block text-sm font-medium leading-5  text-gray-700">Name</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input id="name" name="name" placeholder="Your Name" type="text" required=""
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md
                                     placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 
                                     transition duration-150 ease-in-out sm:text-sm sm:leading-5" onChange={((e) => { setname(e.target.value) })} />
                                <div className=" absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="block text-sm font-medium leading-5 text-gray-700">
                                Phone
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input id="number" name="number" type="text" required="" onChange={((e) => { setphone(e.target.value) })}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md
                                     placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 
                                     transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <label className="block text-sm font-medium leading-5 text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input id="email" name="email" placeholder="user@example.com" type="email"
                                    required="" onChange={((e) => { setemail(e.target.value) })}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md
                                     placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 
                                     transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                <div className=" absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                    </svg>
                                </div>
                            </div>
                        </div>



                        <div className="mt-6">
                            <label className="block text-sm font-medium leading-5 text-gray-700">
                                Password
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input id="password" name="password" type="password" required="" onChange={((e) => { setpassword(e.target.value) })}
                                    className="appearance-none block w-full px-3 py-2 border-gray-300 rounded-md placeholder-gray-400
                                focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out
                                sm:text-sm sm:leading-5 border" />
                            </div>
                        </div>

                        <div className="mt-6">
                            <span className="block w-full rounded-md shadow-sm">
                                <button type="submit" onClick={() => { adduser() }}
                                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md
                                     text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 
                                     focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                    Create account
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserSignup