import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Instance from '../Axios'
import Navbar from '../components/Header'
import Footer from '../components/Footer'

function Myorder() {
  const [order, setorder] = useState(null)
  // const [products, setproducts] = useState([])
  // const [items, setitems] = useState([])

  const params = useParams()

  const data = async () => {
    try {
      const response = await Instance.get(`/order/myorder/${params.id}`)
      console.log(response.data);
      setorder(response.data.order)
      // setproducts(response.data.products)
      // setitems(response.data.items)
    }
    catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    data();
  }, [])
  //  console.log(order);
  return (
    <>
      <Navbar />
      {order ? (
        <div className="bg-gray-50">
          <div className="max-w-3xl mx-auto p-6">
            <div className="bg-white shadow-lg rounded-2xl p-6">
              <div className="mb-4">
                <h1 className="text-2xl font-bold">Order Details - {order._id}</h1>
                <p className="text-sm text-gray-500">Placed on {order.createdAt}</p>
              </div>


              <div className="flex items-center gap-2 text-green-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinejoin="round" strokeWidth="2" d="M3 3h18l-1 9H4L3 3z" />
                </svg>
                <span className="font-medium">{order.shippingStatus}</span>
              </div>


              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Customer Information</h3>
                <p>customer 1</p>
                <p>customer1@gmail.com</p>
                <p className="text-gray-600">Address 1</p>
              </div>

              {order.items.map((i, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Items</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>{i.quantity} × {i.productname}</span>
                      <span>{i.price}</span>
                    </div>
                  </div>
                </div>
              ))}


              <div className="border-t pt-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 7h20M2 11h20M2 15h20" />
                  </svg>
                  <span>online</span>
                </div>
                <p className="text-xl font-bold">Total: ${order.total+300}</p>
              </div>
            </div>
          </div>
        </div>
      ) :
        (
          <h1>hello</h1>
        )
      }
      <Footer />
    </>
  )
}

export default Myorder