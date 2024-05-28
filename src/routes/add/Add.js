import React, { useState } from 'react'
import "./Add.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast';
import { Button , Form , Input } from 'antd';


const Add = () => {
    const [loading , setLoading] = useState(false)


    const navigate = useNavigate()

    const backHandler = () =>{
      
        return navigate(-1)
      }


      const handler = (values) =>{
        setLoading(true)
              axios.post("https://jsonplaceholder.typicode.com/posts" , values).then(()=>{
              setLoading(false)
              toast.success('Successfully added user!')
              setTimeout(() => {
              backHandler();
              } , 2000)
              }
              ).catch((err)=>{
                toast.error(err.data.message)})
      }  
      
  return (
    <div>
          
      <div className='form-add'>
            <Form onFinish={handler} layout='vertical'>
            <Form.Item
            rules={[
              {
                  required : true,
                  message:'please Enter Name'
              }
            ]}
            label={'Name'} name={"Name"}>
            <Input placeholder='please Enter Name' />
            </Form.Item>
            <Form.Item
            rules={[
              {
                required : true,
                message:'please Enter Email'
              }
              ]}
              label={'Email'} name={"Email"}>
            <Input placeholder='please Enter Email' />
            </Form.Item>
            <Form.Item
            rules={[
              {
                required : true,
                message:'please Enter Phone'
              }
            ]}
            label={'Phone'} name={"Phone"}>
            <Input placeholder='please Enter Phone' />
            </Form.Item>
            <Form.Item
            rules={[
              {
                required : true,
                message:'please Enter Password'
              }
            ]}
            label={"Password"} name={"password"}>
            <Input.Password placeholder='please Enter Password' />
            </Form.Item>
            <Button loading={loading} htmlType='submit'>Add</Button>
            </Form>
      </div>
    </div> 
  )
}

export default Add
