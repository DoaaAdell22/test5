import React, { useState  } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast';
import {Button , Form , Input} from "antd"
import { useSelector } from 'react-redux';



const Addproject = () => {
    const [loading , setLoading] =useState(false)
    const token = useSelector(state => state.token);
    const navigate = useNavigate()

    const back = () =>{
        navigate(-1) 
    }
function handleSubmit(values){
    // const formData  =new FormData()
    // Object.keys(values).forEach((key)=>{
    //     formData.append(key ,values[key] )
    // })
setLoading(true)
        axios.post("https://backend.profferdeals.com/api/admin/project-types" ,values ,  {
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
}
    return (
    <div>
        <div className='form-add' style={{paddingTop : '20px'}}>
      <Form onFinish={handleSubmit} layout='vertical'>
      <Form.Item
      rules={[
        {
            required:true,
            message:"Please Enter Name English"
        }
      ]}
      label={"Name English"} name={"name_en"}>
      <Input size='large' placeholder='Please Enter Name English'/>
      </Form.Item>
      <Form.Item
      rules={[
        {
            required:true,
            message:"Please Enter Name Arabic"
        }
      ]}
      label={"Name Arabic"} name={"name_ar"}>
      <Input size='large' placeholder='Please Enter Name Arabic'/>
      </Form.Item>
      <Button loading={loading} htmlType='submit'>Add</Button>
      </Form>
        </div>
    </div>
    )
}

export default Addproject


// <form onSubmit={(e) =>{
//     e.preventDefault()
//     const {name_en , name_ar } = e.target
//     const formData = new FormData(e.target)
//     const token  = '154|1LGtpbpOXYEZWZjaAzXlTqZFvafiLLCEaHATF2er8e83eecc'
//     setLoading(true)

// }}>
//     <FaDiagramProject style={{fontSize : "25px"}}  />
//     <h1 style={{marginTop : "-10px"}}>New project</h1>
//     <lable>Name English :</lable>
//     <input name='name_en' onChange={(e) => setNameen(e.target.value)} value={nameen} required/>
//     <br />
//     <lable>Name Arabic :</lable>
//     <input name='name_ar'  onChange={(e) => setNamear(e.target.value)} value={namear}  required/>
//     <br />
//     <Button loading={loading} htmlType='submit' type='primary'>Save</Button>
// </form>