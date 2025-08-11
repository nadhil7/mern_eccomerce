import Instance from '../Axios'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ProductTable() {
    const [product, setproduct] = useState([])
    const [show, setshow] = useState(false);
    const [update, setupdate] = useState("")

    const data = async () => {
        const response = await Instance.get("/product/",)
        setproduct(response.data)
    }
    useEffect(() => {
        data();
    }, []);
    const EditProduct = async (id) => {
        setshow(true);
        const response = await Instance.get(`/product/find/${id}`)
        setupdate(response.data.productdata);
    }
    const productedit =async(id)=>{
        console.log(id);
        setshow(false);
    }

    return (
        <>
            <div className='w-full h-full items-center flex flex-col justify-center'>
                <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 py-6 ">
                    <table className="table-fixed ml-56 w-10/12 text-center">
                        <thead className='text-center'>
                            <tr className="bg-gray-100">
                                <th className="w-1/4  p-4 text-gray-600 font-bold uppercase">Index</th>
                                <th className="w-1/4  p-4 text-gray-600 font-bold uppercase">Name</th>
                                <th className="w-1/4  p-4 text-gray-600 font-bold uppercase">category</th>
                                <th className="w-1/4  p-4 text-gray-600 font-bold uppercase">brand</th>
                                <th className="w-1/4  p-4 text-gray-600 font-bold uppercase">Price</th>
                                <th className="w-1/4  p-4 text-gray-600 font-bold uppercase">Image</th>
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
                                    <td className="w-2/4 p-4 font-semibold text-xl"><img src={`http://localhost:4000/${i.image}`} alt="" /></td>
                                    <td className='w-1/4 '><button className='w-20 h-10 rounded text-black font-bold  bg-green-600' onClick={() => { EditProduct(i._id) }}>Edit</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {show && <div className='bg-gray-500 w-3/12 h-full  flex flex-col justify-center items-center gap-10'>
                    <h3 className='text-xl font-bold text-gray-900'>Edit here</h3>
                        <input type="text"  className='bg-gray-300 h-7 border' value={update.name} />
                        <input type="text" className='bg-gray-300 h-7 border' value={update.categoryname} />
                        <input type="text" className='bg-gray-300 h-7 border' value={update.brand} />
                        <input type="text" className='bg-gray-300 h-7 border' value={update.discription} />
                        <input type="text" className='bg-gray-300 h-7 border' value={update.price} />
                        <input type="image" className='bg-gray-300 h-7 border' />
                        <div className='flex justify-center items-center gap-4  '>
                        <button className='p-2 bg-gray-400 rounded text-center'>Cancel</button>
                        <button className='p-2 bg-green-700 rounded text-center' onClick={() => { productedit(update._id)}}>Save</button>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default ProductTable