import React, { useState } from 'react'
import "./Add.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast';
import { FaUser } from "react-icons/fa";
import { Button} from 'antd';


const Add = () => {

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


    const [name , setName] =useState("")
    const [password ,setPassword] = useState("")
    const [phone , setPhone] = useState("")
    const [email ,setEmail] =useState('')
    const [loading , setLoading] = useState(false)


    const navigate = useNavigate()
    const backHandler = (e) =>{
      if(name && phone && password){
        return navigate(-1)
      }else {
        return ""
      }
      
  }

  return (
    <div>
          
      <div className='mainn'>
            <form onSubmit={(e) =>{
            e.preventDefault()
            const {name , phone , password , email} = e.target
            const formData = new FormData(e.target); 

          setLoading(true)
          axios.post("https://jsonplaceholder.typicode.com/posts" , formData).then(()=>{
          setLoading(false)
          toast.success('Successfully added user!')
          setTimeout(() => {
          backHandler();
          } , 2000)
          }
          ).catch((err)=>{
            toast.error(err.data.message)})
              }}>
              <FaUser style={{fontSize : "25px"}}  />
              <h1 style={{marginTop : "-10px"}}>New User</h1>
              <lable>Name :</lable>
              <input name='name' value={name} onChange={(e) => setName(e.target.value)} />
              <br />
              <lable>Email :</lable>
              <input name='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}  />
              <br />
              <lable>Phone :</lable>
              <input name='name' value={name} onChange={(e) => setPhone(e.target.value)} />
              <br />
              <lable>Password :</lable>
              <input name='name' value={name} onChange={(e) => setPassword(e.target.value)} />
              <br />
              <Button loading={loading} htmlType='submit' type='primary'>Save</Button>
            </form>
      </div>
    </div> 
  )
}

export default Add
