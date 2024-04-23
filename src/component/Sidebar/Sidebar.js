import React from 'react'
import { FaRegChartBar , FaRegUser ,  FaDiagramProject , FaGraduationCap , FaRegCircleUser , FaRegCreditCard  } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { FaRegFile } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { FaUserFriends } from "react-icons/fa";





const Sidebar = () => {
  return (
    <div>
        <div className="sidbar">
                <h3>Elzero</h3>
                <ul>
                    <li>
                        <NavLink  to="/">
                            <FaRegChartBar />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="setting">
                            <IoSettingsSharp />
                            <span>Setting</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to="profile">
                            <FaRegUser />
                            <span>Profile</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to="projects">
                            <FaDiagramProject />
                            <span>Projects</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to="courses">
                            <FaGraduationCap />
                            <span>Courses</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to="friends">
                            <FaRegCircleUser />
                            <span>Friends</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to="files">
                            <FaRegFile />
                            <span>Files</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to="plans">
                            <FaRegCreditCard />
                            <span>Plans</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to = "users" >
                            <FaUserFriends />
                            <span>Users</span>
                        </NavLink>
                    </li>
                </ul>
        </div>
    </div>
  )
}

export default Sidebar
