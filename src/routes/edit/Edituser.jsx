// import axios from 'axios'
// import React, { useEffect , useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { FaUser } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom'
// import {Toaster , toast } from 'react-hot-toast';
// import { Button } from 'antd';

// const Edituser = () => {

//   const [title , settitle] = useState('')
//   const [body , setbody] = useState('')
//   const params = useParams()
//   const [loading , setLoading] = useState(false)
  
//   const navigate = useNavigate()
//   const backHandler = (e) =>{
//         return navigate(-1)
//       }
      
// const token  = '154|1LGtpbpOXYEZWZjaAzXlTqZFvafiLLCEaHATF2er8e83eecc'
//   useEffect(()=>{

// axios.get(`https://backend.profferdeals.com/api/admin/users/posts/${params.id}`,{
//   headers:{
//     Authorization:`Bearer ${token}`
//   }
// }).then((res)=>{
  
// settitle(res.data.title)
// setbody(res.data.body)
// }).catch(()=>{

// })
//   },[])
  
//   return (
//     <div>
//         <div><Toaster/></div>
//         <div className= "mainn">
//             <div className ="form">
//                 <form onSubmit={(e) =>{
//                   e.preventDefault()
//                   const { title , body} = e.target
//                   const formData = new FormData(e.target); 
//                   setLoading(true)
//                   axios.put(`https://jsonplaceholder.typicode.com/posts/${params.id}` , formData).then(()=>{
//                   setLoading(false)
//                   toast.success('Successfully edit user!')
//                   setTimeout(() => {
//                     backHandler();
//                   } , 2000)
                  
//                   }
//                 ).catch((err)=>{
//                   setLoading(false)
//                   console.log(err)
//                   toast.error(err.response.message)
//                 })
                
//                 }}>
//                     <FaUser style={{fontSize : "25px"}} />
//                     <h1 style={{marginTop : "-10px"}}>Edit User</h1>
//                     <lable>title :</lable>
//                     <input name='title'  placeholder='please write a password' value={title} onChange={(e) => settitle(e.target.value)}  />
//                     <br/>
//                     <lable>body :</lable>
//                     <input name='body' value={body} onChange={(e) => setbody(e.target.value)}  />
//                     <br />
//                     <Button loading={loading} htmlType="submit"style={{color: "#3fc7cc", border : "none", backgroundColor : "white"}} >Save</Button>
//                 </form>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Edituser
