import React, { useState } from 'react'
import "./Add.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {Toaster , toast } from 'react-hot-toast';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaUser } from "react-icons/fa";





const Add = () => {

  


    const [name , setName] =useState("")
    const [password ,setPassword] = useState("")
    const [phone , setPhone] = useState("")
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
      <div><Toaster/></div>
      <div className= "mainn">
        <div className ="form">
          <form onSubmit={(e) =>{
              e.preventDefault()

              const {name , phone , password} = e.target

              console.log(name.value)
              const formData = new FormData(e.target); 

              setLoading(true)
              axios.post("https://jsonplaceholder.typicode.com/posts" , formData).then(()=>{
              setLoading(false)
              toast.success('Successfully added user!')
              setTimeout(() => {
                backHandler();
              } , 2000)
              
              }
            ).catch(()=>{

            })
            
            }}>
            <FaUser style={{fontSize : "25px"}} />
            <h1 style={{marginTop : "-10px"}}>New User</h1>
            <lable>Name :</lable>
            <input name='name' type='text' placeholder="write your name" value={name} onChange={(e) => setName(e.target.value)}  />
            <br />
            <lable>phone :</lable>
            <input name='phone' type='text' value={phone} onChange={(e) => setPhone(e.target.value)} />
            <br />
            <lable>Password :</lable>
            <input name='password' type='password' placeholder='please write a password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <input type='submit'    value="save" style={{color: "#d2691e", border : "none", backgroundColor : "white", padding : "10px"}}  />
            {loading ? <AiOutlineLoading3Quarters /> :  "" }
          </form>
        </div>
      </div>
    </div>
  )
}

export default Add
