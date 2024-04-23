import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./UserData.css"
import { useParams } from 'react-router-dom'
import{ Descriptions }from"antd"

;
const Usersdata = () => {

  const [value , setValue] = useState({})

  const params = useParams()
  


  useEffect(()=>{

axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then((res)=>{
  
  setValue(res.data)
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
      label: 'userId',
      children: value.userId,
    },
    {
      key: '3',
      label: 'title',
      children: value.title,
    },
    {
      key: '4',
      label: 'body',
      children: value.body,
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
