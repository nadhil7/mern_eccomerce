import Instance from '../Axios'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ProductTable() {
    const [product, setproduct] = useState([])
    const [show, setshow] = useState(false);
    const [update, setupdate] = useState("")
    const [editid, seteditid] = useState("")

    const data = async () => {
        const response = await Instance.get("/product/",)
        setproduct(response.data)
    }
    useEffect(() => {
        data();
    }, []);
    const EditProduct = async (i) => {
        setshow(true);
        setupdate(i);
        seteditid(id)
    }
    const productedit = async (id) => {
        setshow(false);
        try {
            if (editid) {
                const formData = new formData();
                formData.append("name", name);
                formData.append("brand", brand);
                formData.append("categoryname", categoryname);
                formData.append("discription", discription);
                formData.append("price", price);
                const response = await Instance.post(`product/edit/${id}`,formData,{headers:{"Content-Type":"multipart/form-data"}});
                setproduct(response.data)
                seteditid(null)
                setupdate(null)
            }
            else {
                const formData = new formData();
                formData.append("name", name);
                formData.append("brand", brand);
                formData.append("categoryname", categoryname);
                formData.append("discription", discription);
                formData.append("price", price);
                const response = await Instance.post(`product/add`,formData,{headers:{"Content-Type":"multipart/form-data"}});
                setproduct(response.data)
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    // const addproduct = async () => {
    //     try {
    //         const response = await Instance.post("/product/add");
    //         console.log(response.data);
    //     }
    //     catch (err) {
    //         console.log(err);
    //     }
    // }
    return (
        <>
            <div className='flex justify-end p-4'>
                <button onClick={() => { setshow(true) }} className='p-4 bg-green-400 rounded-2xl font-bold'>Add +</button>
            </div>
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
                                    <td className='w-full flex flex-col gap-2 items-center justify-center'>
                                        <button className='w-20 h-8 rounded text-black font-bold  bg-green-600' onClick={() => { EditProduct(i) }}>Edit</button>
                                        <button className='w-20 h-8 rounded text-black font-bold  bg-red-600'>delete</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {show && <div className='bg-gray-500 w-fit h-full p-10 flex flex-col justify-center items-center gap-10'>
                    <h3 className='text-xl font-bold text-gray-900'>Edit here</h3>
                    <input type="text" className='bg-gray-300 h-7 border' onChange={(e)=>{}} placeholder='name' value={update.name} />
                    <input type="text" className='bg-gray-300 h-7 border' placeholder='categoryname' value={update.categoryname} />
                    <input type="text" className='bg-gray-300 h-7 border' placeholder='brand' value={update.brand} />
                    <input type="text" className='bg-gray-300 h-7 border' placeholder='discription' value={update.discription} />
                    <input type="text" className='bg-gray-300 h-7 border' placeholder='price' value={update.price} />
                    <input type="file" className='bg-gray-300 h-7 border w-45' />
                    <div className='w-40'>
                        <img src={`http://localhost:4000/${update.image}`} alt="" />
                    </div>
                    <div className='flex justify-center items-center gap-4  '>
                        <button className='p-2 bg-gray-400 rounded text-center' onClick={() => { setshow(false) }}>Cancel</button>
                        <button className='p-2 bg-green-700 rounded text-center' onClick={() => { productedit(update._id) }}>Save</button>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default ProductTable