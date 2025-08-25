import React, { useEffect, useState } from 'react'
import Instance from '../Axios'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Header'
import FOOTER from '../components/Footer'


function UserCart() {
    const [Logging, setlogging] = useState(localStorage.getItem("UserId"))
    const [product, addproduct] = useState([])
    const [total, settotal] = useState(null)
    const [cart, setcart] = useState([])
    const navigate = useNavigate()

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
            if (response.data.success) {
                const OrderId = response.data.data._id
                console.log(OrderId);
                localStorage.setItem("OrderId", OrderId)
                navigate("/user/order")
            }
            else {
                alert("something went wrong");
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    const deleteitem = async (id) => {
        try {
            const productId = id;
            const response = await Instance.delete(`/cart/${productId}`)
            console.log(response.data);
            response();
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        response();
    }, [response])

    console.log(product);

    return (
        <>
            <Navbar />
            {total ?
                <div className="bg-gray-100 text-gray-900">
                    <main className="mx-auto max-w-3xl p-6">
                        <h1 className="mb-4 text-2xl font-bold">Shopping Cart</h1>
                        {
                            product.map((i, index) => (
                                <div key={index} className="space-y-4">
                                    <div className="flex items-center justify-between bg-white p-4 rounded shadow">
                                        <div className="flex items-center space-x-4">
                                            <img src={`http://localhost:4000/${i.image}`} alt="Product 1" className="w-16 h-16 object-cover rounded" />
                                            <div>
                                                <h2 className="font-semibold">{i.name}</h2>
                                                <p className="text-sm text-gray-500">{i.discription}</p>
                                            </div>
                                        </div>
                                        <div className="text-right flex flex-col">
                                            <span className="block font-bold">{i.price}</span>
                                            <small className="text-gray-500 mb-4">Qty: {i.quantity}</small>
                                            <button onClick={() => { deleteitem(i.productId) }} className='w-15 h-10 bg-red-500 rounded shadow'>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                        < div className="mt-6 space-y-2 bg-white p-4 rounded shadow">
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
                    </main >
                </div >
                : <main className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-6">
                    <section className="w-full max-w-md">
                        <div className="bg-white shadow-sm rounded-2xl p-8 text-center border border-gray-100">
                            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-dashed">
                            </div>


                            <h1 className="text-xl font-semibold">No user cart found</h1>
                            <p className="mt-2 text-sm text-gray-600">
                                Looks like you don’t have an active cart yet. Start shopping to add items.
                            </p>


                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <button className="w-full">Start Shopping</button>
                                <button variant="outline" className="w-full">
                                </button>
                            </div>


                            <div className="mt-5 text-xs text-gray-500">
                                <a href="/" className="underline hover:no-underline">
                                    Go to Home
                                </a>
                            </div>
                        </div>


                        <p className="mt-4 text-center text-[11px] text-gray-400">
                            Tip: connect your account to sync carts across devices.
                        </p>
                    </section>
                </main>
            }
            <FOOTER/>
        </>
    )
}

export default UserCart