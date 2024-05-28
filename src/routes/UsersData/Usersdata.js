import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./UserData.css"
import { useParams } from 'react-router-dom'
import{ Descriptions }from"antd"
import {  useSelector } from 'react-redux';


const Usersdata = () => {

  
  const token = useSelector(state => state.token);

  const [value , setValue] = useState({})

  const params = useParams()
  


  useEffect(()=>{

axios.get(`https://backend.profferdeals.com/api/admin/users/${params.id}`,{
  headers : {
      Authorization : `Bearer ${token}`
  }
}).then((res)=>{

  console.log(res)
  setValue(res.data.data)
}).catch(()=>{

})
  },[])


  const items = [
    
    {
      key: '2',
      label: 'name',
      children: value.name,
      span : 3
    },
    {
      key: '3',
      label: 'email',
      children: value.email,
      span : 3
    },
    {
      key: '4',
      label: 'address',
      children: value.address,
      span : 3
    },
    {
      key: '5',
      label: 'phone',
      children: value.phone,
      span : 3
    },
    // {
    //   key: '5',
    //   label: 'profile_image',
    //   children: value.profile_image,
    //   span : 3
    // }
  ];
  return (
    <div>
              <Descriptions bordered className='description' title="User Info" items={items}  />
    </div>
  )
}

export default Usersdata
