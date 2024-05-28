import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import{ Descriptions }from"antd"
import {  useSelector } from 'react-redux';


const ShowContractors = () => {

    const [state , setState] = useState({})

    const params = useParams()

    const token = useSelector(state => state.token);


    useEffect(()=>{
        axios.get(`https://backend.profferdeals.com/api/admin/contractors/${params.id}` , {
            headers : {
                Authorization : `Bearer ${token}`
            }
        }).then((res) =>{
            setState(res.data.data)
        }).catch((err)=>{})
    },[])
    const items = [
        
        {
          key: '2',
          label: 'name',
          children: state.name,
          span : 3
        },
        {
          key: '3',
          label: 'email',
          children: state.email,
          span : 3
        },
        {
          key: '5',
          label: 'phone',
          children: state.phone,
          span : 3
        },
      ];
  return (
    <div>
            <Descriptions bordered className='description' title="User Info" items={items}  />
    </div>
  )
}

export default ShowContractors
