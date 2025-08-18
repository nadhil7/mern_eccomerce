import React, { useEffect, useState } from 'react'
import Instance from '../Axios'

function UserCart() {
    const [Logging, setlogging] = useState(localStorage.getItem("UserId"))
    const [product, addproduct] = useState([])
    const [cart, setcart] = useState([])

    const response = async () => {
        try {
            const cart = await Instance.get(`/cart/`)
            console.log(cart.data);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        response();
    }, [])
    return (
        <>
            <div className="bg-gray-100 p-6">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between border-b pb-4">
                            <div className="flex items-center space-x-4">
                                <img src={null} alt="Product Image" className="w-20 h-20 object-cover rounded" />
                                <div>
                                    <h2 className="text-lg font-semibold">Product Name</h2>
                                    <p className="text-gray-500">₹1,200</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className="px-2 py-1 bg-gray-200 rounded">-</button>
                                <span>1</span>
                                <button className="px-2 py-1 bg-gray-200 rounded">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 border-t pt-4">
                        <div className="flex justify-between text-lg font-semibold">
                            <span>Total</span>
                            <span>₹1,200</span>
                        </div>
                        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserCart