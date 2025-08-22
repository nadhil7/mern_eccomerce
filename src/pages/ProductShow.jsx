import React, { useEffect, useState } from 'react'
import Instance from '../Axios'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'

function ProductShow() {
    const { id } = useParams();
    const navigate = useNavigate()
    const [product, setproduct] = useState([])
    const [count, setcount] = useState(1)

    const data = async () => {
        try {
            const response = await Instance.get(`/product/find/${id}`)
            setproduct(response.data.productdata)
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        data();
    }, [])

    const productId = product._id
    const addingtocart = async () => {
        try {
            const UserId = localStorage.getItem("UserId");
            if (!UserId) {
                navigate("/login");
                alert("first login  to make cart")
            }
            else {

                const response = await Instance.post(`/cart/${productId}`, { quantity1: count })
                console.log(UserId);
                if (response.data.success) {
                    alert("product added to cart ");
                }
                else {
                    alert("product adding blocked");
                }
            }

        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div>
                <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
                    <div className="w-full max-w-2xl bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src={`http://localhost:4000/${product.image}`}
                            alt="Product Name"
                            className="w-96 h-auto object-cover"
                        />
                        <div className="p-6">
                            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                            <p className="text-gray-700 mb-6">
                                {product.discription}
                            </p>
                            <div className='flex justify-end mb-5'>
                                <button className='w-7 h-7 bg-gray-300 rounded shadow' onClick={() => setcount((c) => c + 1)}>+</button>
                                <p className='w-10 h-10 ml-3'>{count}</p>
                                <button className='w-7 h-7 bg-gray-300 rounded shadow' onClick={() => count > 1 ? setcount((c) => c - 1) : 1}>-</button>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-semibold text-green-600">${product.price}</span>
                                <div onClick={() => addingtocart()}
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition">
                                    AddToCart
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductShow