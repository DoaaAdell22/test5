import React, { useEffect, useState } from 'react'
import { Table } from "antd";
import axios from 'axios';
import { Link } from 'react-router-dom';


const Users = () => {


    const [data , setData] = useState([]);
    const [del , setDele] = useState([
        {
            title: 'userId',
            dataIndex: 'userId',
            key: 'userId',
        },
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'body',
            dataIndex: 'body',
            key: 'body',
        },
        {
            title : "actions",
            dataIndex : "actions",
            key : "actions",
            render:(text,record)=><Link to = {`/users/show/${record.id}`}>show</Link> 
            
        },
        {
            title : "actions",
            dataIndex : "actions",
            key : "actions",
            render:(text,record)=><Link><button onClick={(e ,idx) => deleter(e , idx)}>remove</button></Link> 
            
        },
    ])

    
    const deleter = (e , clickedIdx) =>{
        const removing = del.filter((el , idx) => idx !== clickedIdx );
        setDele(removing)
    }
    
        
        const columns = [
        {
            title: 'userId',
            dataIndex: 'userId',
            key: 'userId',
        },
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'body',
            dataIndex: 'body',
            key: 'body',
        },
        {
            title : "actions",
            dataIndex : "actions",
            key : "actions",
            render:(text,record)=><Link to = {`/users/show/${record.id}`}>show</Link> 
            
        },
        {
            title : "actions",
            dataIndex : "actions",
            key : "actions",
            render:(text,record)=><Link onClick={(e ,idx) => deleter(e , idx)}>remove</Link> 
            
        },
        {
            title : "actions",
            dataIndex : "actions",
            key : "actions",
            render:(text,record)=><Link to = {null}>edit</Link> 
            
        },
        ];

        useEffect(()=>{



            axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
                setData(res.data)
    
            }).catch(() =>{})
        } , [])
    
        
    return (
        <div>
            
            <h1>Users</h1>
            <Link to = "/add"><button style={{cursor : "pointer", border : "none", color : "white", backgroundColor : "blue"}}> + Add a new User</button></Link>
            <Table dataSource={data} columns={columns}  style={{marginTop : "20px", width : "95%"}}  />;
        </div>
    )
}

export default Users
