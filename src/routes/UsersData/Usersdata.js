import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./UserData.css"
import { useParams } from 'react-router-dom'
import{ Descriptions }from"antd"


const Usersdata = () => {

  const [value , setValue] = useState({})

  const params = useParams()
  

  const token  = '154|1LGtpbpOXYEZWZjaAzXlTqZFvafiLLCEaHATF2er8e83eecc'

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
      key: '1',
      label: 'id',
      children: value.id,
    },
    {
      key: '2',
      label: 'name',
      children: value.name,
    },
    {
      key: '3',
      label: 'email',
      children: value.email,
    },
    {
      key: '4',
      label: 'address',
      children: value.address,
    },
    {
      key: '5',
      label: 'phone',
      children: value.phone,
    },
    {
      key: '5',
      label: 'profile_image',
      children: value.profile_image,
    }
  ];
  return (
    <div>
        <div className='user'>
              <Descriptions className='description' title="User Info" items={items}  />
        </div>
    </div>
  )
}

export default Usersdata
