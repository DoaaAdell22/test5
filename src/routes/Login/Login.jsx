import React, { useState } from 'react'
import { Button , Input, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import  tokener  from '../../Redu/Action';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom'
import './Login.css'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";




const Login = () => {
    const navigate = useNavigate()

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const dispatch = useDispatch();
    const token = useSelector(state => state.token);

    const y = (token) => {
        dispatch(tokener(token));
    };



    if(token){
        return <Navigate to={'/'}/>
    }


    return (
        <div className='bod'>
            <div className='lay' >
                <form  
                        onSubmit={(e) => {
                        e.preventDefault();

                        const {email , password} = e.target

                        const formdata = new FormData(e.target)

                    
                        axios.post("https://backend.profferdeals.com/api/admin/login" , formdata , {
                            headers : {
                                Authorization : `Bearer ${token}`
                            }
                        }
                        ).then((res)=>{
                            const {token , message} = res.data;
                            y(token)
                            toast.success(message)
                        }).catch((err)=>{
                            toast.error(err.data.message)
                        })
                    }}>
                    <div className='inp'>
                        <h1 style={{textAlign : 'center'}} >Login</h1>
                        <lable  > <MdEmail style={{color : 'rgb(55 116 218)'}} />  Email </lable>
                        <Input name='email' type='email'  placeholder='write your Email' onChange={(e) => setEmail(e.target.value)} value={email} style={{margin : '15px 0', width : '300px'}}/>
                        <br />
                        <lable> <RiLockPasswordFill style={{color : 'rgb(55 116 218)'}} /> Password</lable>
                        <Space direction="vertical">
                            <Input.Password name='password' placeholder="input password" onChange={(e) => setPassword(e.target.value)} value={password} style={{margin : '15px 0' , width : '300px'}} />
                        </Space> 
                        <br />
                        <Button size='large' type="primary" htmlType='submit'> Login</Button>
                        
                        
                    </div>
                </form>
            </div>
        </div>        
    )
}

export default Login
