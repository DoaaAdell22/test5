import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import{ Descriptions }from"antd"
import {  useSelector } from 'react-redux';

const Showprojects = () => {

    const params = useParams()

    const [index , setIndex] = useState({})

    const items = [
    
        {
            key: '2',
            label: 'name_en',
            children: index.name_en,
            span : 3
        },
        {
            key: '3',
            label: 'name_ar',
            children: index.name_ar,
            span : 3
        },
        {
            key: '4',
            label: 'created_at',
            children: index.created_at,
            span : 3
        }
    ];
    const token = useSelector(state => state.token);
    useEffect(()=>{
            axios.get(`https://backend.profferdeals.com/api/admin/project-types/${params.id}` , {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }).then ((res) =>{
                setIndex(res.data.data)
            })
        },[])

    return (
    <div>
            <Descriptions bordered className='description' title="User Info" items={items}  />
    </div>
    )
}

export default Showprojects
