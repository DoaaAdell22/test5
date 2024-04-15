import React from 'react'
import "./Friends.modules.css"
import Slidefriends from "../../component/Slidefriends.js"


const Friends = () => {

const slides = [
    {
    image : "../media/friend-01.jpg"  ,
    name : "Ahmed Naser" ,
    job : "JavaScript Developer" ,
    info1 : "99 Friend" ,
    info2 : "15 Projects" ,
    info3 : "25 Articles" ,
    Date : "Joined 02/10/2021"
    }, 
    {
    image :"../media/friend-02.jpg" ,
    name : "Omar Fathy" ,
    job : "Cloud Developer" ,
    info1 : "30 Friend" ,
    info2 : "11 Projects" ,
    info3 : "12 Articles" ,
    Date : "Joined 02/08/2020"
    }, 
    {
        image : "../media/friend-03.jpg" ,
        name : "Omar Ahmed" ,
        job : "Mobile Developer",
        info1 : "  80 Friend<" ,
        info2 : "20 Projects " , 
        info3 : "18 Articles" ,
        Date : "Joined 02/06/2020" 
    }, 
    {
        image : "../media/friend-04.jpg" ,
        name : "Shady Nabil" ,
        job : "Back-End Developer",
        info1 : " 70 Friend< " ,
        info2 : "30 Projects " , 
        info3 : "18 Articles" ,
        Date : "Joined 28/06/2020" 
    }, 
    {
        image :"../media/friend-05.jpg" ,
        name : "Mohamed Ibrahim" ,
        job : "Algorithm Developer",
        info1 : "80 Friend " ,
        info2 : " 30 Projects" , 
        info3 : "18 Articles" ,
        Date : "Joined 28/08/2020" 
    }, 
    {
        image : "../media/friend-04.jpg" ,
        name : "Amr Hendawy" ,
        job : "Back-End Developer",
        info1 : "70 Friend " ,
        info2 : "30 Projects " , 
        info3 : "18 Articles" ,
        Date : "Joined 28/06/2020" 
    }, 
    {
        image :"../media/friend-02.jpg",
        name : "Mahmoud Adel" ,
        job : "Cloud Developer",
        info1 : " 30 Friend<" ,
        info2 : " 11 Projects" , 
        info3 : "12 Articles" ,
        Date : "Joined 02/08/2020" 
    }, 
    {
        image :"../media/friend-05.jpg" ,
        name : "Ahmed Abuzaid" ,
        job : "Content Creator",
        info1 : "80 Friend " ,
        info2 : " 30 Projects" , 
        info3 : "18 Articles" ,
        Date : "Joined 28/08/2020<" 
    }, 
    {
        image :"../media/friend-01.jpg" ,
        name : "Gareeb Elshiekh" ,
        job : "JavaScript Developer",
        info1 : " 90 Friend " ,
        info2 : " 15 Projects" , 
        info3 : "25 Articles" ,
        Date : "Joined 02/10/2020" 
    }, 
    {
        image :"../media/friend-03.jpg" ,
        name : "Hamza" ,
        job : "Front-End Developer",
        info1 : "80 Friend " ,
        info2 : "20 Projects " , 
        info3 : "18 Articles" ,
        Date : "Joined 02/06/2020" 
    }
]


    return (
        <div>
            <h1>Friends</h1>
            <div className="div1"></div>
            <div className="Box-friend">
                { slides.map((el) => <Slidefriends img = {el.image} name = {el.name} job = {el.job} info1 = {el.info1} info2 = {el.info2} info3 = {el.info3} Date = {el.Date} /> ) }
            </div>
        </div>
    )
}

export default Friends
