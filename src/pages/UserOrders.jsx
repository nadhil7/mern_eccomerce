import React, { useEffect, useState } from 'react'
import Instance from '../Axios'
import { Link } from 'react-router-dom'
import Navbar from '../components/Header'
import FOOTER from '../components/Footer'

function UserOrders() {
    const [products, setproducts] = useState()
    const [orderdata, setorderdata] = useState()
    const [user, setuser] = useState()
    const userId = localStorage.getItem("UserId")


    const Data = async () => {
        try {
            const Order = await Instance.get(`/order/allorders/${userId}`)
            console.log(Order.data.allorders);
            setorderdata(Order.data.allorders)
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        Data();
    }, [])

    return (
        <>
            <section className='h-screen'>
                <Navbar />
                <section class="max-w-4xl mx-auto p-6  bg-gray-300 rounded-lg shadow">
                    <h2 class="text-2xl font-semibold text-gray-800 mb-4">My Orders</h2>
                    <ul class="space-y-4">
                        <li class="p-4 border rounded-lg hover:bg-gray-50">
                            <div class="flex justify-between items-center">
                                <div>
                                    <p class="text-lg font-medium text-gray-800">Order #10234987</p>
                                    <p class="text-sm text-gray-600">Placed on April 12, 2025</p>
                                </div>
                                <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Delivered</span>
                            </div>
                        </li>
                    </ul>
                </section>
                <FOOTER />
            </section>
        </>
    )
}

export default UserOrders