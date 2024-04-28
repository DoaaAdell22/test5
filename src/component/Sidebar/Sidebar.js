import React, { Fragment } from 'react'
import { FaRegChartBar , FaRegUser ,  FaDiagramProject , FaGraduationCap , FaRegCircleUser , FaRegCreditCard  } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { FaRegFile } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { FaUserFriends } from "react-icons/fa";
import { FaHardHat } from "react-icons/fa";

import { useLocation } from 'react-router-dom';



const options = [ 
    {
        title : "Dashboard" ,
        to : "/" ,
        icon : <FaRegChartBar />
    },
    {
        title : "Setting" ,
        to : "setting" ,
        icon : <IoSettingsSharp />
    },
    {
        title : "Profile" ,
        to : "profile" ,
        icon : <FaRegUser />
    },
    {
        title : "Projects" ,
        to : "projects" ,
        icon : <FaDiagramProject />
    },
    {
        title : "Courses" ,
        to : "courses" ,
        icon : <FaGraduationCap />
    },
    {
        title : "Friends" ,
        to : "friends" ,
        icon : <FaRegCircleUser />
    },
    {
        title : "Files" ,
        to : "files" ,
        icon : <FaRegFile />
    },
    {
        title : "Plans" ,
        to : "plans" ,
        icon : <FaRegCreditCard />
    },
    {
        title : "Users" ,
        to : "users" ,
        icon : <FaUserFriends />
    },
    {
        title : "Contractors" ,
        to : "Contractors" ,
        icon : <FaHardHat />
    },
    {
        title : "Project Types" ,
        to : "ProjectTypes" ,
        icon :<FaDiagramProject />
    },

]


const Sidebar = () => {
    const { pathname } = useLocation();
console.log({pathname})
  return (
    <div>
        <div className="sidbar">
                <div><h3>Elzero</h3></div>
                <ul>
                {
                    options.map((el) => {
                        return(
                        <Fragment>
                            <li>
                                <NavLink className={"/"+el.to===pathname?"active":""}  to={el.to}>
                                    {el.icon}
                                    <span>{el.title}</span>
                                </NavLink>
                            </li>
                        </Fragment>
                        )
                    } 
                )
                }
                    
                </ul>
        </div>
    </div>
  )
}

export default Sidebar
