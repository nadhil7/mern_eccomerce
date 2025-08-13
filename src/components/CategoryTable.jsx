import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Instance from '../Axios'

function CategoryTable() {
    const [category, setcategory] = useState([])
    const [show, setshow] = useState("")
    const [name, setname] = useState("")
    const [discription, setdiscription] = useState("")
    const [editid, seteditid] = useState("")

    const data = async () => {
        try {
            const response = await Instance.get("/category/",)
            setcategory(response.data)
        }
        catch (err) {
            console.log(err);

        }
    }
    useEffect(() => {
        data();
    }, []);

    const saveproduct = (i) => {
        setshow(true);
        setname(i.name);
        setdiscription(i.discription)
        seteditid(i._id)
    }

    const editCategory = async (id) => {
        try {
            const formData = {name,discription}
            // new FormData()
            // formData.append("name", name)
            // formData.append("discription", discription)
            if (editid) {
                console.log("hello");

                const response = await Instance.put(`/category/edit/${id}`, formData, { headers: { "Content-Type": "multipart:formdata" } })
                data();
                setcategory(response.data);
            }
            else {
                console.log("hi");
                const response = await Instance.post(`/category/`, formData)
                data();
                setcategory(response.data);
            }

        }
        catch (err) {
            console.log(err);

        }
    }
    const deleteCategory = async (id) => {
        console.log(id);
        try {
            const response = await Instance.delete(`/category/delete/${id}`)
            data();
            console.log(response.data);

        }
        catch (err) {
            console.log(err);

        }
    }
    return (
        <>
            {show && <div className='max-w-sm mx-auto fixed left-3/6 bg-gray-400 p-10 top-30 -translate-x-3/6'>
                <div className="mb-5">
                    <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Category Name</label>
                    <input type="name" id="name"
                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                           dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                            dark:focus:border-blue-500 dark:shadow-xs-light"
                        placeholder="Category Name" required onChange={(e) => { setname(e.target.value) }} />
                </div>
                <div className="mb-5">
                    <label 
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Discription</label>
                    <input type="discription" id="discription" className="shadow-xs bg-gray-50 border
                         border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                          block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                           dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
                        placeholder="Category Discription" required onChange={(e) => { setdiscription(e.target.value) }} />
                </div>
                <div className='flex justify-center items-center gap-1'>
                    <button type="submit item"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                     focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-700
                      dark:hover:bg-gray-600 dark:focus:ring-blue-800" onClick={() => { setshow(false) }}>Cancel</button>
                    <button type="submit item"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                     focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600
                      dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>{editCategory()}}>Save</button>
                </div>
            </div >}
            <div className='flex justify-end p-4'>
                <button onClick={() => { setshow(true); seteditid(null) }} className='p-4 bg-green-400 rounded-2xl font-bold'>Add +</button>
            </div>

            <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 py-6 ">
                <table className="table-fixed ml-56 w-10/12 text-center">
                    <thead className='text-center'>
                        <tr className="bg-gray-100">
                            <th className="w-1/4  p-4 text-gray-600 font-bold uppercase">Index</th>
                            <th className="w-1/4  p-4 text-gray-600 font-bold uppercase">Name</th>
                            <th className="w-1/4  p-4 text-gray-600 font-bold uppercase">Discription</th>
                            <th className="w-1/4  p-4 text-gray-600 font-bold uppercase">Action</th>
                        </tr>
                    </thead>

                    <tbody className="bg-white ">
                        {category.map((i, index) =>
                            <tr key={index}>
                                <td className='w-2/4 p-4 font-semibold  text-xl'>{index + 1}</td>
                                <td className="w-2/4 p-4 font-semibold text-xl">{i.name}</td>
                                <td className="w-2/4 p-4 font-semibold text-xl">{i.discription}</td>
                                <td className='w-full flex flex-col p-1 gap-2 items-center justify-center '>
                                    <button className='w-20 h-8 rounded text-black font-bold  bg-green-600' onClick={() => { saveproduct(i) }}>Edit</button>
                                    <button className='w-20 h-8 rounded text-black font-bold  bg-red-600' onClick={() => { deleteCategory(i._id) }}>delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default CategoryTable