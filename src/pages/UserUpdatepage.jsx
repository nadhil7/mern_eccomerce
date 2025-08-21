import React, { useEffect, useState } from 'react'
import Instance from '../Axios';
import { useNavigate } from 'react-router-dom';

function UserUpdatepage() {

    const [name, setname] = useState("")
    const [phone, setphone] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [oldpassword, setoldpassword] = useState("")

    const navigate = useNavigate()

    const userid = localStorage.getItem("UserId");

    const Userdata = async () => {
        try {
            const response = await Instance.get(`/user/${userid}`);
            setname(response.data.userdata.name)
            setphone(response.data.userdata.phone)
            setemail(response.data.userdata.email)
        }
        catch (err) {
            console.log(err);
        }
    }

    const updatinguser = async () => {
        try {
            const formData = new FormData()
            formData.append("name", name)
            formData.append("phone", phone)
            formData.append("email", email)
            if (password) {
                formData.append("password", password)
                formData.append("oldpassword", oldpassword)
            }
            const response = await Instance.put(`/user/${userid}`, formData,)
            if (response.data.success) {
                navigate("/");
                alert("userdetails Updated");
            }
            else {
                alert(response.data.message)
            }
        }
        catch (err) {
            console.log(err);

        }
    }


    useEffect(() => {
        Userdata();
    }, [])


    return (
        <>
            <div className="bg-gray-100 flex items-center justify-center min-h-screen">
                <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-semibold text-center mb-6">Update Profile</h2>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input type="text" placeholder="Enter your name" value={name} onChange={((e) => { setname(e.target.value) })}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" placeholder="Enter your email" value={email} onChange={((e) => { setemail(e.target.value) })}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <input type="tel" placeholder="Enter your phone number" value={phone} onChange={((e) => { setphone(e.target.value) })}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Old Password</label>
                            <input type="password" placeholder="Enter old password" onChange={((e) => { setoldpassword(e.target.value) })}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input type="password" placeholder="Enter new password" onChange={((e) => { setpassword(e.target.value) })}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        <button type="submit" onClick={updatinguser}
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserUpdatepage