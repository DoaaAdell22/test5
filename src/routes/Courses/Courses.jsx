import React from 'react'
import "./Courses.modules.css"
import Slidecourses from '../../component/Slidecourses';

const Courses = () => {


const card = [
    {
        image : "../media/course-01.jpg" ,
        avatar : "../media/team-01.png" ,
        course : "Mastering Web Design" ,
        desc : "Master The Art Of Web Designing And Mocking , Prototyping And Creating Web Design Architecture",
        view : "950",
        price : "$ 165"
    },
    {
        image : "../media/course-02.jpg" ,
        avatar : "../media/team-02.png" ,
        course : "Data Structure And Algorithms" ,
        desc : "Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering",
        view : "1150" ,
        price : "$ 210"
    },
    {
        image : "../media/course-03.jpg" ,
        avatar : "../media/team-03.png" ,
        course : "Responsive Web Design" ,
        desc : "Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints" ,
        view : " 650" ,
        price : "$ 90"
    },
    {
        image : "../media/course-04.jpg" ,
        avatar : "../media/team-03.png" ,
        course : "Mastering Python" ,
        desc : "Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life" ,
        view : " 950" ,
        price : "$ 250"
    },
    {
        image : "../media/course-05.jpg" ,
        avatar : "../media/team-03.png" ,
        course : "PHP Examples" ,
        desc : "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture" ,
        view : " 850" ,
        price : "$ 150"
    },
    {
        image : "../media/course-02.jpg" ,
        avatar : "../media/team-02.png" ,
        course : "Data Structure And Algorithms" ,
        desc : " Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering " ,
        view : " 1150" ,
        price : "$ 210"
    },
    {
        image : "../media/course-03.jpg" ,
        avatar : "../media/team-01.png" ,
        course : "Responsive Web Design" ,
        desc : "Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints" ,
        view : "650 " ,
        price : "$ 90"
    },
    {
        image : "../media/course-01.jpg" ,
        avatar : "../media/team-01.png" ,
        course : "Mastering Web Design" ,
        desc : "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Archticture" ,
        view : " 850" ,
        price : "$ 145"
    },
    {
        image : "../media/course-05.jpg" ,
        avatar : "../media/team-03.png" ,
        course : "PHP Examples" ,
        desc : "PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases" ,
        view : "850 " ,
        price : "$ 150"
    },
    {
        image : "../media/course-04.jpg" ,
        avatar : "../media/team-03.png" ,
        course : "Mastering Python" ,
        desc : "Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life" ,
        view : "950 " ,
        price : "$ 250"
    }
]



    return (
            <div>
                <h1>Courses</h1>
                <div className="div1"></div>
                <div className="Box-courses">
                    {card.map((el) => <Slidecourses image={el.image} avatar = {el.avatar} courser = {el.course} desc ={el.desc} view = {el.view} price={el.price} /> )}
                </div>
            </div>
)
}

export default Courses
