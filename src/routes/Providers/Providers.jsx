
import React, { useEffect, useState } from 'react'
import { Button, Table } from "antd";
import axios from 'axios';
import { FaEye } from "react-icons/fa";
import { useNavigate,  } from 'react-router-dom';

const Providers = () => {

    const [contractors , setContractors] = useState([])
    const [loading , setLoading] = useState(false)
    const navigate = useNavigate()

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title : "actions",
            dataIndex : "actions",
            key : "actions",
            render:(text,record)=>
            <Button icon={<FaEye style={{fontSize:"18px"}}/>} onClick={()=>{navigate(`/Contractors/show/${record.id}`)}}/>
        },
        
        ];
        const token  = '154|1LGtpbpOXYEZWZjaAzXlTqZFvafiLLCEaHATF2er8e83eecc'
        useEffect(()=>{
            setLoading(true)
            axios.get("https://backend.profferdeals.com/api/admin/contractors",{
                headers:{
                    Authorization : `Bearer ${token}`
                }
            }).then((res) =>{
                console.log(res)
                setContractors(res.data.data)
                setLoading(false)
            })
        },[])
  return (
    <div>
        <h1>Contractors</h1>
        <Table loading={loading} dataSource={contractors} columns={columns}  style={{marginTop : "20px", width : "98%"}}  />
    </div>
  )
}

export default Providers
