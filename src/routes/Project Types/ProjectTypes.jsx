import React, { useEffect, useState } from 'react'
import {  Table, Button } from "antd";
import axios from 'axios';
import {  useNavigate, useParams } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from 'react-hot-toast';


const ProjectTypes = () => {

    const [types , setTypes] = useState([])
    const [selectedId , setselectedId]  = useState(null)

    const [loading , setLoading] = useState(false)
const navigate = useNavigate()
    const params = useParams()

    const token  = '154|1LGtpbpOXYEZWZjaAzXlTqZFvafiLLCEaHATF2er8e83eecc'

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'name_en',
            dataIndex: 'name_en',
            key: 'name_en',
        },
        {
            title: 'name_ar',
            dataIndex: 'name_ar',
            key: 'name_ar',
        },
        {
            title: 'created_at',
            dataIndex: 'created_at',
            key: 'created_at',
        },
        {
            title : "actions",
            dataIndex : "actions",
            key : "actions",
            render:(text,record)=>
            <div style={{display:"flex", gap : "5px"}}>
                <Button icon={<FaEye style={{fontSize:"18px"}}/>} onClick={()=>{navigate(`/ProjectTypes/show/${record.id}`)}}/>
                <Button loading={selectedId === record.id} danger icon={<MdDelete style={{fontSize:"18px"}}/>} onClick={() => delHandler(record.id)}/>
            </div>
        },
        
        ];
        const repeat = () => {
            setLoading(true)
            axios.get("https://backend.profferdeals.com/api/admin/project-types",{
            headers:{
                Authorization:`Bearer ${token}`
            }
            }).then((res) => {
            setTypes(res.data.data)
                setLoading(false)
            }).catch((err) =>{ toast.error(err.data.message)})
                }
                
        useEffect(()=>{
            repeat()
        } , [])
        const delHandler = (id) => {
            setselectedId(id)
            axios.delete(`https://backend.profferdeals.com/api/admin/project-types/${id}` , {
                headers : {
                    Authorization:`Bearer ${token}`
                }
            }).then((res)=>{
                toast.success(res.data.message)
                repeat() ;
            }).catch(()=>{})
        }
    
    return (
    <div>
        <h1>Projects</h1>
        <Button type='primary' onClick={()=>{navigate('add')}} > + Add </Button>
        <Table loading={loading} dataSource={types} columns={columns}  style={{marginTop : "20px", width : "98%"}}  />
    </div>
    )
}

export default ProjectTypes
