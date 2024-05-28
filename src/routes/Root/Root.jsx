import React from 'react'
import Header from '../../component/Header/Header'
import Sidebar from '../../component/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import {  useSelector } from 'react-redux';
import { Navigate ,useNavigate } from 'react-router-dom'

const Root = () => {

    const navigate = useNavigate()

    const token = useSelector(state => state.token);

    if(!token){
        return <Navigate to={'Login'}/>
      }
    
  return (
    <div>
        <div className='index'>
            <Sidebar />
            <div className='content'>
                <Header />
                <div className='Body'>
                        <Outlet />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Root

