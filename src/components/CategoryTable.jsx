import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Instance from '../Axios'

function CategoryTable() {
    const [category, setcategory] = useState([])

    const data = async () => {
        const response = await Instance.get("/category/",)
        console.log(response);
        
        setcategory(response.data)
    }
    useEffect(() => {
        data();
    }, []);
    const editCategory = async (id) => {
        console.log(id);
        const response = await Instance.patch(`/admin/useredit/${id}`)
        data();
    }
    return (
        <>
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
                                <td className='w-1/4 '><button className='w-20 h-10 rounded text-black font-bold  bg-green-600' onClick={() => { editCategory(i._id) }}>Action</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CategoryTable