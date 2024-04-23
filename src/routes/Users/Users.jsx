import React, { useEffect, useState } from 'react'
import { Button, Table } from "antd";
import axios from 'axios';
import { Link } from 'react-router-dom';


const Users = () => {


    const [data , setData] = useState([]);
  
    const deleter = (elementId) =>{
        const removing = data.filter((el , idx) => el.id !== elementId );
        setData(removing)
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
            render:(text,record)=>
            <div style={{display : "flex", alignItems : "center", justifyContent : "center", gap : "10px"}} >
                <Link to = {`/users/show/${record.id}`}>show</Link> 
                <Link to = {`/users/edit/${record.id}`}>edit</Link> 
                <Button onClick={() => deleter(record.id)}>remove</Button> 
            </div>
            
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
