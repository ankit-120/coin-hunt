import React from 'react'
import './HomePage.css'
import Banner from '../components/banner/Banner'
import CoinsTable from '../components/CoinsTable'

function HomePage() {
  return (
    <div>
        <Banner />
        <CoinsTable />
        {/* <TablePagination /> */}
    </div>
  )
}

export default HomePage
