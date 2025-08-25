import React, { useEffect, useState } from 'react'
import Instance from '../Axios'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Header'
import FOOTER from '../components/Footer'

function UserOrders() {
    const [orderdata, setorderdata] = useState([])
    const userId = localStorage.getItem("UserId")
    const navigate = useNavigate()


    const Data = async () => {
        try {
            const Order = await Instance.get(`/order/allorders/${userId}`)
            console.log(Order.data);
            setorderdata(Order.data.allorders);
        }
        catch (err) {
            console.log(err);
        }
    }

    const showorder = async (id) => {
        try {
            navigate(`/order/myorder/${id}`)
        }
        catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        Data();
    }, [])
    const hasOrders = Array.isArray(orderdata) && orderdata.length > 0;

    return (
        <>
            <Navbar />
            {hasOrders ? (
                <section className="max-w-4xl mx-auto p-6 h-screen bg-gray-300 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Orders</h2>
                    {orderdata.map((i, index) => (
                        <div key={index} className="space-y-4">
                            <div onClick={(() => { showorder(i._id) })} className="p-4 border rounded-lg hover:bg-gray-50">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-lg font-medium text-gray-800">Order {i._id}</p>
                                        <p className="text-sm text-gray-600">Placed on {i.createdAt}</p>
                                    </div>
                                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-fdivl text-sm">{i.shippingStatus}</span>
                                </div>
                            </div >
                        </div>
                    ))}
                </section>
                ) : (
                <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
                    <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md text-center">
                        <svg xmlns="null" className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 13l4-4-4-4m5 8l4-4-4-4m5 8l4-4-4-4m5 8l4-4-4-4" />
                        </svg>
                        <h2 className="mt-4 text-xl font-semibold text-gray-800">You Have No Orders Yet</h2>
                        <p className="mt-2 text-gray-600">Once you place your first order, it will appear here.</p>
                        <a href="/" className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition">
                            Shop Now
                        </a>
                    </div>
                </div>
            )}
            <FOOTER />
        </>
    )
}

export default UserOrders