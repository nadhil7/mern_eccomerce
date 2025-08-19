import React, { useEffect } from 'react'
import Instance from '../Axios'

function ProductShow() {
    const data = async () => {
        try {
            const response = await Instance.get(`/product/find/${id}`)
            console.log(response.data);

        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        data();
    }, [])
    return (
        <>
            <div>
                <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
                    <div className="w-full max-w-2xl bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src="<!-- YOUR_IMAGE_URL -->"
                            alt="Product Name"
                            className="w-full h-auto object-cover"
                        />
                        <div className="p-6">
                            <h1 className="text-3xl font-bold mb-4">Product Name</h1>
                            <p className="text-gray-700 mb-6">
                                Product description goes here. Keep it concise and to the point.
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-semibold text-green-600">$99.99</span>
                                <a
                                    href="#"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition"
                                >
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductShow