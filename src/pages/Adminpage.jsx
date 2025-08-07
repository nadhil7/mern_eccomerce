import React from 'react'
import Sidebar from '../components/Sidebar'
import Table from '../components/Table'
function Adminpage() {
    return (
        <>
            <section>
                <div className='flex gap-40'>
                    <Sidebar />
                    <Table/>
                </div>
            </section>
        </>
    )
}

export default Adminpage