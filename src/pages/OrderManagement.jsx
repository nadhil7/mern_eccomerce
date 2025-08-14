import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Instance from '../Axios';

function OrderManagement() {
    //states
    const [order, setorder] = useState([]);

    const orders = async () => {
        try {
            const response = await Instance.get("/admin/orders")
            console.log(response.data);

            setorder(response.data)
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        orders();
    }, [])
    return (
        <>
            <Sidebar />
            <div>
                <div className="ml-64 p-10 flex items-end justify-end">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Index
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    UserName
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ProductName
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Quantity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Subtotal
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Total
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Shipping Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Payment Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Order Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.map((i, index) => (
                                <tr key={i._id}>
                                    <th className='w-2/4 p-4 font-semibold text-black text-xl'>{index + 1}</th>
                                    <th className='w-2/4 p-4 font-semibold text-black text-xl'>{ }</th>
                                    <th className='w-2/4 p-4 font-semibold text-black text-xl'>{i.index + 1}</th>
                                    <th className='w-2/4 p-4 font-semibold text-black text-xl'>{i.index + 1}</th>
                                    <th className='w-2/4 p-4 font-semibold text-black text-xl'>{i.index + 1}</th>
                                    <th className='w-2/4 p-4 font-semibold text-black text-xl'>{i.index + 1}</th>
                                    <th className='w-2/4 p-4 font-semibold text-black text-xl'>{i.index + 1}</th>
                                    <th className='w-2/4 p-4 font-semibold text-black text-xl'>{i.index + 1}</th>
                                    <th className='w-2/4 p-4 font-semibold text-black text-xl'>{i.index + 1}</th>
                                    <th className='w-2/4 p-4 font-semibold text-black text-xl'>{i.index + 1}</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default OrderManagement