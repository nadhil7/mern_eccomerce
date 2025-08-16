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
                                    <th className='w-2/4 p-4 font-semibold text-black text-xl'>{i.userId.name}</th>
                                    {i.items.map((p) => (
                                        <React.Fragment key={p._id ?? p.Index}>
                                            <th className='w-2/4 p-4 font-semibold text-black text-xl'>{p.productId.name}</th>
                                            <th className='w-2/4 p-4 font-semibold text-black text-xl'>{p.price}</th>
                                            <th className='w-2/4 p-4 font-semibold text-black text-xl'>{p.quantity}</th>
                                            <th className='w-2/4 p-4 font-semibold text-black text-xl'>{p.subtotal}</th>
                                        </React.Fragment>
                                    ))}
                                    <th className='w-2/4 p-4 font-semibold text-black text-xl'>{i.total}</th>
                                    <th className='w-2/4 p-4 font-semibold text-black text-xl'>{i.shippingStatus}</th>
                                    <th className='w-2/4 p-4 font-semibold text-black text-xl'>{i.paymentStatus}</th>
                                    <th className='w-2/4 p-4 font-semibold text-black text-xl'> {new Date(i.createdAt).toLocaleString()}</th>
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