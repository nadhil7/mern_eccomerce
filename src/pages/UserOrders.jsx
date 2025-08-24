import React, { useEffect, useState } from 'react'
import Instance from '../Axios'
import { Link } from 'react-router-dom'

function UserOrders() {
    const [products, setproducts] = useState()
    const [orderdata, setorderdata] = useState()
    const [user, setuser] = useState()
    const OrderId = localStorage.getItem("OrderId")


    const Data = async () => {
        try {
            if (OrderId) {
                const Order = await Instance.get(`/order/myorder/${OrderId}`)
                setorderdata(Order.data)
                setproducts(Order.data.items)
                setuser(Order.data.userId)
                console.log(Order.data.userId);

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
            {
                orderdata && <div className="bg-gray-50 text-gray-900 antialiased">
                    <div className="min-h-screen flex flex-col items-center py-10">
                        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
                            <h1 className="text-2xl font-semibold mb-2">Order Confirmed</h1>
                            <p className="text-gray-600 mb-4">Thank you! Your order <span className="font-medium">#123456</span> has been placed.</p>

                            {products.map((i, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg divide-y divide-gray-200">
                                    <div className="flex items-center p-4">
                                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0"></div>
                                        <div className="ml-4 flex-1">
                                            <p className="font-medium">{i.name}</p>
                                            <p className="text-sm text-gray-600">Qty: {i.quantity}</p>
                                        </div>
                                        <p className="font-medium">₹999</p>
                                    </div>

                                </div>
                            ))}
                            <div className="mt-4 text-sm space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-medium">₹{orderdata.total}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="font-medium">₹300</span>
                                </div>
                                <div className="border-t border-gray-200 my-2"></div>
                                <div className="flex justify-between text-lg font-semibold">
                                    <span>Total</span>
                                    <span>₹{orderdata.total + 300}</span>
                                </div>
                            </div>

                            <div className="mt-6">
                                <p className="text-sm text-gray-600">A confirmation email has been sent to <span className="font-medium">user@example.com</span>.</p>
                            </div>
                        </div>
                    </div>
                </div>}
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
                <div className="w-full max-w-md bg-white rounded-2xl shadow border border-gray-200 p-10 text-center space-y-6">
                    <div className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-gray-50 w-20 h-20 mx-auto">
                        <svg viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                            You haven’t placed any orders yet
                        </h1>
                        <p className="text-gray-600 max-w-xs mx-auto mt-2">
                            When you do, they’ll show up here. In the meantime, explore our latest picks.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-3">
                        <Link to={"/"}
                            className="px-6 py-3 bg-gray-900 text-white rounded-2xl text-sm font-medium hover:bg-gray-800">
                            Start shopping
                        </Link>
                        <a href="/categories"
                            className="px-6 py-3 border border-gray-300 rounded-2xl text-sm font-medium hover:bg-gray-50">
                            Browse categories
                        </a>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4 text-left mt-6">
                        <a href="/wishlist" className="block p-4 border border-gray-200 rounded-xl hover:border-gray-300">
                            <div className="font-medium mb-1">View wishlist</div>
                            <p className="text-sm text-gray-600">See items you’ve saved and add them to your cart.</p>
                        </a>
                        {/* <a href="/deals" className="block p-4 border border-gray-200 rounded-xl hover:border-gray-300">
                            <div className="font-medium mb-1">Today’s deals</div>
                            <p className="text-sm text-gray-600">Discover popular items and limited-time offers.</p>
                        </a> */}
                        <a href="/help/orders" className="block p-4 border border-gray-200 rounded-xl hover:border-gray-300">
                            <div className="font-medium mb-1">Need help?</div>
                            <p className="text-sm text-gray-600">Learn how ordering, shipping, and returns work.</p>
                        </a>
                    </div>
                    <p className="text-xs text-gray-500 mt-6">
                        Tip: Once you place an order, you can track it from this page.
                    </p>
                </div>
            </div>
        </>
    )
}

export default UserOrders