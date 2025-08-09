import React from 'react'
import Adminprofilepic from '../assets/Adminprofile.png'
import Usermanagement from '../assets/userMangement.png'
import AdminLogout from '../assets/AdminLogout.png'
import category from '../assets/categorySidebar.png'
import order from '../assets/OrderSidebar.png'
import Product from '../assets/ProductManagemnet.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Sidebar() {
    return (
        <>
            <div className='w-20 hover:w-66 hover:transition-all hover:duration-700 z-10 overflow-x-hidden h-screen bg-gray-200 fixed'>
                <div className=' flex flex-col'>
                    <div className='h-25 flex justify-center gap-3 items-center hover:text-white hover:duration-700 '>
                        <img src={Adminprofilepic} className='w-10' alt="" />
                    </div>
                    <div className='flex flex-col gap-3 pb-60'>
                        <Link to={"/admin/dashboard"} className='flex bg-gray-400 h-15 items-center w-full justify-start gap-4 hover:border-2 hover:rounded-2xl px-4'>
                             <div></div>
                            <img src={Usermanagement} className='w-8' alt="" />
                            <p>User Management</p> 
                        </Link>
                         <Link to={"/admin/product"} className='flex bg-gray-400 h-15 items-center w-full justify-start gap-4 hover:border-2 hover:rounded-2xl px-4'>
                             <div></div>
                            <img src={Product} className='w-8' alt="" />
                            <p>Product Management</p> 
                        </Link>
                        <Link to={"/admin/category"} className='flex bg-gray-400 h-15 items-center w-full justify-start gap-4 hover:border-2 hover:rounded-2xl px-4'>
                             <div></div>
                            <img src={category} className='w-8' alt="" />
                            <p>Category Management</p> 
                        </Link>
                        <Link to={"/admin/order"} className='flex bg-gray-400 h-15 items-center w-full justify-start gap-4 hover:border-2 hover:rounded-2xl px-4'>
                             <div></div>
                            <img src={order} className='w-8' alt="" />
                            <p>Order Management</p> 
                        </Link>
                    </div>
                </div>
                <div className='flex bg-gray-200 h-15 items-center w-full justify-start gap-4 hover:border-2 hover:rounded-2xl px-4'>
                    <div></div>
                    <img src={AdminLogout} className='w-8' alt="" />
                    <p>Logout</p>
                </div>
            </div>
        </>
    )
}

export default Sidebar