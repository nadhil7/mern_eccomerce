import React, { useEffect, useReducer, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Instance from '../Axios';

function OrderManagement() {
    // states
    const [order, setOrder] = useState([]);

    // reducer function
    const setpayment = async (state, action) => {
        try {
            const { orderId, status } = action.payload;
            console.log("OrderId:", orderId, "Status:", status);

            if (status === "shipped") {
                const response = await Instance.patch(`/order/shipstatus/${orderId}`, { shippingstatus: status });
                console.log(response.data);

            } else if (status === "preparing for ship") {
                const response = await Instance.patch(`/order/shipstatus/${orderId}`, { shippingstatus: status });
                console.log(response.data);
            } else if (status == "pending") {
                const response = await Instance.patch(`/order/status/${orderId}`, { paymentStatus: status });
                console.log(response.data);
            }
            else if (status == "paid") {
                const response = await Instance.patch(`/order/status/${orderId}`, { paymentStatus: status });
                console.log(response.data);
            }
            else {
                console.log("not valid");

            } return status;
        } catch (err) {
            console.log(err);
            return state;
        }
    };

    const [Shippingstatus, dispatch] = useReducer(setpayment);

    const [state, setState] = useReducer(async (stateInside, action) => {
        const validShippingStatus = ["shipped", "preparing for ship"];
        const validPaymentStatus = ["paid", "pending"];

        const payload = action.payload;


        if (validShippingStatus.includes(payload.status)) {
            const response = await Instance.patch(`/order/shipstatus/${payload.orderId}`, { shippingstatus: payload.status });
            console.log(response.data);
        } else if (validPaymentStatus.includes(payload.status)) {
            const response = await Instance.patch(`/order/status/${payload.orderId}`, { paymentStatus: payload.status });
            console.log(response.data);
        } else console.log("invalid")

        return stateInside
    })



    // fetch orders
    const orders = async () => {
        try {
            const response = await Instance.get("/admin/orders");
            setOrder(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        orders();
    }, []);

    return (
        <>
            <Sidebar />
            {order ? (<div>
                <div className="ml-64 p-10 flex items-end justify-end">
                    <table className="-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th className="px-6 py-3">Index</th>
                                <th className="px-6 py-3">UserName</th>
                                <th className="px-6 py-3">ProductName</th>
                                <th className="px-6 py-3">Price</th>
                                <th className="px-6 py-3">Quantity</th>
                                <th className="px-6 py-3">Subtotal</th>
                                <th className="px-6 py-3">Total</th>
                                <th className="px-6 py-3">Shipping Status</th>
                                <th className="px-6 py-3">Payment Status</th>
                                <th className="px-6 py-3">Order Date</th>
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

                                    <th className='w-2/4 p-4 font-semibold text-black text-xl'>
                                        <select
                                            className='w-full h-full'
                                            name="Shipping status"
                                            id={`${i._id}`}
                                            onChange={(e) =>
                                                dispatch({
                                                    type: "SET_SHIPPING_STATUS",
                                                    payload: { orderId: i._id, status: e.target.value }
                                                })
                                            }
                                            defaultValue={i.shippingStatus}
                                        >
                                            <option value="preparing for ship">preparing for ship</option>
                                            <option value="shipped">shipped</option>
                                        </select>
                                    </th>

                                    {/* Payment Status */}
                                    <th className='w-2/4 p-4 font-semibold text-black text-xl'>
                                        <select name="payment-status"
                                            id={`${i._id}`}
                                            onChange={(e) =>
                                                dispatch({
                                                    type: "SET_PAYMENT_STATUS",
                                                    payload: { orderId: i._id, status: e.target.value }
                                                })
                                            }
                                            defaultValue={i.paymentStatus}>
                                            <option value="pending">pending</option>
                                            <option value="paid">paid</option>
                                        </select>
                                    </th>

                                    <th className='w-2/4 p-4 font-semibold text-black text-xl'>
                                        {new Date(i.createdAt).toLocaleString()}
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>)
                :
                (<div class="flex flex-col items-center justify-center py-16">
                    <svg class="w-24 h-24 text-gray-400 mb-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 32 L61 32 M32 3 L32 61" />
                    </svg>

                    <h2 class="text-2xl font-semibold text-gray-700 mb-2">No Orders Found</h2>

                    <p class="text-gray-500 mb-4">You don’t have any orders yet. Start by placing an order.</p>

                    <button class="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                        Shop Now
                    </button>
                </div>)}


        </>
    );
}

export default OrderManagement;
