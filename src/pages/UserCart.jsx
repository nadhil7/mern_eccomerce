import React, { useEffect, useState } from 'react'
import Instance from '../Axios'

function UserCart() {
    const [Logging, setlogging] = useState(localStorage.getItem("UserId"))
    const [product, addproduct] = useState([])
    const [total, settotal] = useState(null)
    const [cart, setcart] = useState([])

    const response = async () => {
        try {
            const cart = await Instance.get(`/cart/`)
            const addproduct1 = (cart.data)
            settotal(addproduct1.total)
            addproduct(addproduct1.items)
        }
        catch (err) {
            console.log(err);
        }
    }
    const createorder = async () => {
        try {
            const response = await Instance.post("/order/create")
            console.log(response.data);
            
        }
        catch (err) {
            console.log(err);
            
        }
    }

    useEffect(() => {
        response();
    }, [])

    console.log(total);

    return (
        <>
            <div className="bg-gray-100 text-gray-900">
                <main className="mx-auto max-w-3xl p-6">
                    <h1 className="mb-4 text-2xl font-bold">Shopping Cart</h1>

                    {product.map((i, index) => (
                        <div key={index} className="space-y-4">
                            <div className="flex items-center justify-between bg-white p-4 rounded shadow">
                                <div className="flex items-center space-x-4">
                                    <img src={`http://localhost:4000/${i.image}`} alt="Product 1" className="w-16 h-16 object-cover rounded" />
                                    <div>
                                        <h2 className="font-semibold">{i.name}</h2>
                                        <p className="text-sm text-gray-500">{i.discription}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="block font-bold">{i.price}</span>
                                    <small className="text-gray-500">Qty: {i.quantity}</small>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="mt-6 space-y-2 bg-white p-4 rounded shadow">
                        {/* <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span className="font-medium">$129.97</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span className="font-medium">$5.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Tax (10%)</span>
                            <span className="font-medium">$13.50</span>
                        </div> */}
                        <hr className="my-2" />
                        <div className="flex justify-between text-lg font-bold">
                            <span>Total</span>
                            <span>{total}</span>
                        </div>
                        <button onClick={() => createorder()} className="w-full bg-blue-600 text-white py-2 rounded mt-3 hover:bg-blue-700">
                            Checkout
                        </button>
                    </div>
                </main>
            </div>
        </>
    )
}

export default UserCart