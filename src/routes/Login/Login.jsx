import React, { useState } from 'react'
import { Button , Input, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import  tokener  from '../../Redu/Action';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { BsTwitterX } from "react-icons/bs";




const Login = () => {
    const navigate = useNavigate()

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const dispatch = useDispatch();
    const token = useSelector(state => state.token);

    const y = (token) => {
        dispatch(tokener(token));
    };

    useEffect(()=>{

        if(token){
            navigate('/')
        }

    } , [token])



    return (
        <div className='bod'>
            <div className='lay' >
                <form  
                        onSubmit={(e) => {
                        e.preventDefault();

                        const {email , password} = e.target

                        const formdata = new FormData(e.target)

                        const tokenn  = '154|1LGtpbpOXYEZWZjaAzXlTqZFvafiLLCEaHATF2er8e83eecc'
                    
                        axios.post("https://backend.profferdeals.com/api/admin/login" , formdata , {
                            headers : {
                                Authorization : `Bearer ${tokenn}`
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
                        <Button  type="primary" htmlType='submit'> Login</Button>
                        <p >You Dont have an account? <Link style={{textDecoration : 'underline' }}> Create new account</Link></p>
                        <hr style={{width : '250px'}}/>
                        <h5 style={{textAlign : 'center'}}>Login with</h5>
                        <div className='Log'>
                            <Button style={{backgroundColor : 'white'}}type="primary" shape="circle" icon={<FcGoogle style={{fontSize : '19px'}} />}></Button>
                            <Button style={{backgroundColor : 'white'}}type="primary" shape="circle" icon={<BsTwitterX    style={{fontSize : '19px', color : 'black'}} />}></Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>        
    )
}

export default Login
