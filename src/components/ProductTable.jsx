import Instance from '../Axios'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ProductTable() {
    const [product, setproduct] = useState([])
    const [show, setshow] = useState(false);
    const [editid, seteditid] = useState("")
    //states
    const [name, setname] = useState("")
    const [brand, setbrand] = useState("")
    const [categoryname, setcategoryname] = useState("")
    const [discription, setdiscription] = useState("")
    const [price, setprice] = useState("")
    const [oldimage, setoldimage] = useState("")
    const [newimage, setnewimage] = useState("")

    const data = async () => {
        const response = await Instance.get("/product/",)
        setproduct(response.data)
    }
    useEffect(() => {
        data();
    }, []);
    const EditProduct = async (i) => {
        setshow(true);
        setname(i.name);
        setcategoryname(i.categoryname)
        setbrand(i.brand)
        setprice(i.price)
        setdiscription(i.discription)
        setoldimage(i.image)
        seteditid(i._id)
        setnewimage(null)
    }
    const saveproduct = async () => {
        try {
            const formData = new FormData()
            formData.append("name", name)
            formData.append("brand", brand)
            formData.append("categoryname", categoryname)
            formData.append("discription", discription)
            formData.append("price", price)
            if (newimage) {
                formData.append("image", newimage)
            }

            if (editid) {
                const response = await Instance.put(`/product/edit/${editid}`, formData, { headers: { "Content-Type": "multypart:formdata" } })
                setproduct(response.data)
                data();
            }
            else {
                const response = await Instance.post(`/product/add`, formData, { headers: { "Content-Type": "multypart:formdata" } })
                setproduct(response.data)
                data();
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div className='flex justify-end p-4'>
                <button onClick={() => { setshow(true); saveproduct(); seteditid(null) }} className='p-4 bg-green-400 rounded-2xl font-bold'>Add +</button>
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
                {show && <div className='bg-gray-500 w-fit h-fit fixed top-5 p-10 flex flex-col justify-center items-center gap-5'>
                    <h3 className='text-xl font-bold text-gray-900'>Edit here</h3>
                    <input type="text" className='bg-gray-300 h-7 border' placeholder='name' value={name} onChange={((e) => { setname(e.target.value) })} />
                    <input type="text" className='bg-gray-300 h-7 border' placeholder='categoryname' value={categoryname} onChange={((e) => { setcategoryname(e.target.value) })} />
                    <input type="text" className='bg-gray-300 h-7 border' placeholder='brand' value={brand} onChange={((e) => { setbrand(e.target.value) })} />
                    <input type="text" className='bg-gray-300 h-7 border' placeholder='discription' value={discription} onChange={((e) => { setdiscription(e.target.value) })} />
                    <input type="text" className='bg-gray-300 h-7 border' placeholder='price' value={price} onChange={((e) => { setprice(e.target.value) })} />
                    <input type="file" className='bg-gray-300 h-7 border w-45' onChange={((e) => { setnewimage(e.target.files[0]) })} />
                    <div className='w-40'>
                        <img src={`http://localhost:4000/${oldimage}`} alt="" />
                    </div>
                    <div className='flex justify-center items-center gap-4  '>
                        <button className='p-2 bg-gray-400 rounded text-center' onClick={() => { setshow(false); seteditid(null) }}>Cancel</button>
                        <button className='p-2 bg-green-700 rounded text-center' onClick={() => { saveproduct() }} >Save</button>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default ProductTable