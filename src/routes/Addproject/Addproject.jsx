import React, { useState  } from 'react'
import { useNavigate } from 'react-router-dom'
import {FaDiagramProject} from "react-icons/fa6";
import axios from 'axios'
import { toast } from 'react-hot-toast';
import {Button} from "antd"



const Addproject = () => {
    const [namear , setNamear] = useState("")
    const [nameen , setNameen] = useState("")
    const [loading , setLoading] =useState(false)
    
    const navigate = useNavigate()

    const back = () =>{
        navigate(-1) 
    }

    return (
    <div>
        <div className='mainn'>
            <div className='form'>
                <form onSubmit={(e) =>{
                    e.preventDefault()

                    const {name_en , name_ar } = e.target

                    const formData = new FormData(e.target)

                    const token  = '154|1LGtpbpOXYEZWZjaAzXlTqZFvafiLLCEaHATF2er8e83eecc'
                    setLoading(true)
                    axios.post("https://backend.profferdeals.com/api/admin/project-types" ,formData ,  {
                        headers : {
                            Authorization : `Bearer ${token}`
                        }
                    } ).then((res) =>{
                        toast.success(res.data.message)
                        back();
                    }).catch((err)=>{
                        toast.error(err.response.data.message)
                    }).finally(()=>{
                        setLoading(false)
                    })

                }}>
                    <FaDiagramProject style={{fontSize : "25px"}}  />
                    <h1 style={{marginTop : "-10px"}}>New project</h1>
                    <lable>name_en :</lable>
                    <input name='name_en' onChange={(e) => setNameen(e.target.value)} value={nameen} required/>
                    <br />
                    <lable>name_ar :</lable>
                    <input name='name_ar'  onChange={(e) => setNamear(e.target.value)} value={namear}  required/>
                    <br />
                    <Button loading={loading} htmlType='submit' type='primary'>Save</Button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Addproject
