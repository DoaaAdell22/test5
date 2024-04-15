import React from 'react'

import { FaCheck } from "react-icons/fa6";
import { CiCircleInfo } from "react-icons/ci";
import { FaXmark } from "react-icons/fa6";
import Slide1 from '../../component/plans/Slide1';


const Plans = () => {


const styles = {
    color : "white"
}   


    const plans = [
        {
            title : "Free" ,
            price : "0.00" ,
            color : "#0f0" , 
            features : [
                
                    {text : "Access All Text Lessons",
                    isRight : true  
                    },
                    {
                        text : "Access All Videos Lessons" ,
                        isRight : true
                    },
                    {
                        text : "Appear On Leaderboard " ,
                        isRight : true
                    },
                    {
                        text : "Browse Content Without Add " ,
                        isRight : false
                    },
                    {
                        text : "Access All Assignments" ,
                        isRight : false
                    },
                    {
                        text : "Get Daily Prizes" ,
                        isRight : false
                    },
                    {
                        text : "Earn Certificate" ,
                        isRight : false
                    },
                    {
                        text : "1 GB Space For Hosting Files " ,
                        isRight : false
                    },
                    {
                        text : "Access Badge System " ,
                        isRight : false
                    },
                    
                
            ]
        },
        {
            title : "Basic" ,
            price : "7.99" ,
            color : "#00f" , 
            features : [
                
                    {text : "Access All Text Lessons",
                    isRight : true  
                    },
                    {
                        text : "Access All Videos Lessons" ,
                        isRight : true
                    },
                    {
                        text : "Appear On Leaderboard " ,
                        isRight : true
                    },
                    {
                        text : "Browse Content Without Add " ,
                        isRight : true
                    },
                    {
                        text : "Access All Assignments" ,
                        isRight : true
                    },
                    {
                        text : "Get Daily Prizes" ,
                        isRight : true
                    },
                    {
                        text : "Earn Certificate" ,
                        isRight : true
                    },
                    {
                        text : "1 GB Space For Hosting Files " ,
                        isRight : false
                    },
                    {
                        text : "Access Badge System " ,
                        isRight : false
                    },
                    
                
            ]
        },
        {
            title : "Premium" ,
            price : "19.99" ,
            color : "orange" , 
            features : [
                
                    {text : "Access All Text Lessons",
                    isRight : true  
                    },
                    {
                        text : "Access All Videos Lessons" ,
                        isRight : true
                    },
                    {
                        text : "Appear On Leaderboard " ,
                        isRight : true
                    },
                    {
                        text : "Browse Content Without Add " ,
                        isRight : true
                    },
                    {
                        text : "Access All Assignments" ,
                        isRight : true
                    },
                    {
                        text : "Get Daily Prizes" ,
                        isRight : true
                    },
                    {
                        text : "Earn Certificate" ,
                        isRight : true
                    },
                    {
                        text : "1 GB Space For Hosting Files " ,
                        isRight : true
                    },
                    {
                        text : "Access Badge System " ,
                        isRight : true
                    },
                    
                
            ]
        }
    ]

  return (
                <div>
                    <h1>Plans</h1>
                    <div className="div1"></div>
                    <div className="Box-plan">
                        {plans.map((el) => <Slide1 title= {el.title} price={el.price} color ={el.color} features ={el.features}/>)} 
                    </div>    
                </div>
            )
}

export default Plans

