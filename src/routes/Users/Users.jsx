/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import { Button, Table } from "antd";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const Users = () => {

    const [loading , setLoading] = useState(false)
    const [data , setData] = useState([]);
    const navigate = useNavigate()
    const token = useSelector(state => state.token);

    const deleter = (elementId) =>{
        const removing = data.filter((el , idx) => el.id !== elementId );
        setData(removing)
    }

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
            title: 'address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        // {
        //     title: 'profile_image',
        //     dataIndex: 'profile_image',
        //     key: 'profile_image',
        // },
        {
            title : "actions",
            dataIndex : "actions",
            key : "actions",
            render:(text,record)=>
                <Button icon={<FaEye style={{fontSize:"18px"}}/>} onClick={()=>{navigate(`/users/show/${record.id}`)}}/>
        }
        
        ];
        useEffect(()=>{
            setLoading(true)
            axios.get("https://backend.profferdeals.com/api/admin/users",{
                headers:{
                    Authorization:`Bearer ${token}`
                            }
            }).then((res) => {
                setData(res.data.data)
                setLoading(false)
            }).catch((err) =>{toast.error(err.data.message)})
        } , [])
    
    return (
        <div>
            <h1>Users</h1>
            <Button type='primary' onClick={()=>{navigate("/users/add")}}> + Add a new User</Button>
            <Table loading={loading} dataSource={data} columns={columns}  style={{marginTop : "20px", width : "98%"}}  />
        </div>
    )
}

export default Users
