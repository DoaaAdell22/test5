import React from 'react'
import Header from '../../component/Header/Header'
import Sidebar from '../../component/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        <div className='index'>
            <Sidebar />
            <div className='content'>
                <Header />
                <div className='Body'>
                    <div className='container'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Root

