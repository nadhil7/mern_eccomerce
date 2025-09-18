import React, { useEffect, useState } from 'react'
import Instance from '../Axios'
import { Link, useNavigate } from 'react-router-dom'


function ProductListing() {
    const [product, setproduct] = useState([])
    const navigate = useNavigate()

    const data = async () => {
        try {
            const response = await Instance.get("/product/")
            setproduct(response.data)
            if (response.data.success) {
                navigate("")
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        data();
    }, [])
    return (
        <>
            <div>
                <select name="sort" id="">

                </select>
            </div>
            {
                product ? (
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
                            <div className='flex gap-10'>

                                {product.map((i, index) => (
                                    <Link key={index} to={`/product/show/${i._id}`}>
                                        <div className="mt-6  gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                            <div className="group relative">
                                                <img src={`${Instance.defaults.baseURL}/${i.image}`} alt={i.name}
                                                    className="aspect-square w-60 rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
                                                <div className="mt-4 flex justify-between">
                                                    <div >
                                                        <h3 className="text-sm text-gray-700">
                                                            <p>
                                                                <span aria-hidden="true" className="absolute inset-0"></span>
                                                                {i.name}
                                                            </p>
                                                        </h3>
                                                        <p className="mt-1 text-sm text-gray-500">{i.categoryname}</p>
                                                    </div>
                                                    <p className="text-sm font-medium text-gray-900">{i.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>))}

                            </div>
                        </div>
                    </div>) : (
                    <p>No products found</p>
                )
            }
        </>
    )
}

export default ProductListing