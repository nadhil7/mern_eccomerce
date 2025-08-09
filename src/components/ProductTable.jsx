import Instance from '../Axios'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ProductTable() {
    const [product, setproduct] = useState([])
    const [Status, setstatus] = useState("");

    const data = async () => {
        const response = await Instance.get("/product/",)
        console.log(response.data);

        setproduct(response.data)
    }
    useEffect(() => {
        data();
    }, []);
    const EditProduct = async (id) => {
        
    }

    return (
        <>
            <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 py-6 ">
                <table className="table-fixed ml-56 w-10/12 text-center">
                    <thead className='text-center'>
                        <tr className="bg-gray-100">
                            <th className="w-1/4  p-4 text-gray-600 font-bold uppercase">Index</th>
                            <th className="w-1/4  p-4 text-gray-600 font-bold uppercase">Name</th>
                            <th className="w-1/4  p-4 text-gray-600 font-bold uppercase">categoryName</th>
                            <th className="w-1/4  p-4 text-gray-600 font-bold uppercase">brand</th>
                            <th className="w-1/4  p-4 text-gray-600 font-bold uppercase">Price</th>
                            <th className="w-1/4  p-4 text-gray-600 font-bold uppercase">Edit</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white ">
                        {product.map((i, index) =>
                            <tr key={index}>
                                <td className='w-2/4 p-4 font-semibold  text-xl'>{index + 1}</td>
                                <td className="w-2/4 p-4 font-semibold text-xl">{i.name}</td>
                                <td className="w-2/4 p-4 font-semibold text-xl">{i.categoryname}</td>
                                <td className="w-2/4 p-4 font-semibold text-xl">{i.brand}</td>
                                <td className="w-2/4 p-4 font-semibold text-xl">{i.price}</td>
                                <td className='w-1/4 '><button className='w-20 h-10 rounded text-black font-bold  bg-green-600' onClick={() => { EditProduct(i._id) }}>Edit</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProductTable