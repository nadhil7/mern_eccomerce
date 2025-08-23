import React, { useEffect, useState } from 'react'
import Instance from '../Axios'

function UserOrders() {
    const [products, setproducts] = useState()
    const [orderdata, setorderdata] = useState()
    const OrderId = localStorage.getItem("OrderId")


    const Data = async () => {
        try {
            if (OrderId) {
                const Order = await Instance.get(`/order/myorder/${OrderId}`)
                setorderdata(Order.data)
                setproducts(Order.data.items)
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        Data();
    }, [])


    console.log(products);
    console.log(orderdata);

    return (
        <>
            <div className="bg-gray-50 text-gray-900 antialiased">
                <div className="min-h-screen flex flex-col items-center py-10">
                    <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
                        <h1 className="text-2xl font-semibold mb-2">Order Confirmed</h1>
                        <p className="text-gray-600 mb-4">Thank you! Your order <span className="font-medium">#123456</span> has been placed.</p>

                        <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
                            <div className="flex items-center p-4">
                                <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0"></div>
                                <div className="ml-4 flex-1">
                                    <p className="font-medium">Product A</p>
                                    <p className="text-sm text-gray-600">Qty: 1</p>
                                </div>
                                <p className="font-medium">₹999</p>
                            </div>
                            <div className="flex items-center p-4">
                                <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0"></div>
                                <div className="ml-4 flex-1">
                                    <p className="font-medium">Product B</p>
                                    <p className="text-sm text-gray-600">Qty: 2</p>
                                </div>
                                <p className="font-medium">₹1,498</p>
                            </div>
                        </div>

                        <div className="mt-4 text-sm space-y-2">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Subtotal</span>
                                <span className="font-medium">₹2,497</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Shipping</span>
                                <span className="font-medium">₹0</span>
                            </div>
                            <div className="border-t border-gray-200 my-2"></div>
                            <div className="flex justify-between text-lg font-semibold">
                                <span>Total</span>
                                <span>₹2,497</span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className="text-sm text-gray-600">A confirmation email has been sent to <span className="font-medium">user@example.com</span>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserOrders