import React from 'react'
import "./Header.css"
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";


const Header = () => {
  return (
    <div >
        <div class="header">
            <div class="search">
                <input type="text" name="title" placeholder="Type A Keyword" />
            </div>
            <div class="icons">
                <div class="notiv">
                    <IoMdNotificationsOutline />
                </div>
                <img src="../media/avatar.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header
