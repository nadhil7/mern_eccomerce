import React from 'react'
import Sidebar from '../components/Sidebar'
import ProductTable from '../components/ProductTable'

function ProductManagement() {
  return (
    <>
      <section>
        <Sidebar/>
        <ProductTable/>
      </section>
    </>
  )
}

export default ProductManagement