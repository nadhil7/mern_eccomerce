import React, { useEffect, useState } from 'react'
import Instance from '../Axios';

function UserUpdatepage() {

    const [user, setuser] = useState(null)


    const userid = localStorage.getItem("UserId");

    const Userdata = async () => {
        try {
            const response = await Instance.get(`/user/${userid}`);
            setuser(response.data.userdata)
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        Userdata();
    }, [])

    console.log(user);


    return (
        <>
            {user.map((i, index) => (
                <div key={index} className="bg-gray-100 flex items-center justify-center min-h-screen">
                    <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
                        <h2 className="text-2xl font-semibold text-center mb-6">Update Profile</h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">{i.name}</label>
                                <input type="text" placeholder="Enter your name"
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" placeholder="Enter your email"
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <input type="tel" placeholder="Enter your phone number"
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <input type="password" placeholder="Enter old password"
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <input type="password" placeholder="Enter new password"
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <button type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                                Update
                            </button>
                        </div>
                    </div>
                </div>

            ))}
        </>
    )
}

export default UserUpdatepage