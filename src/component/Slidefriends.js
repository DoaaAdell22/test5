import React from 'react'
import { BsTelephoneFill } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FiSmile } from "react-icons/fi";
import { FaCodeCommit } from "react-icons/fa6";
import { FaRegNewspaper } from "react-icons/fa6";


const Slidefriends = ({img , name , job , info1 , info2 , info3 , Date}) => {
    
  return (
        <div>
                <div className="slide">
                    <div className="contact">
                        <Link to="#"><BsTelephoneFill /></Link>
                        <Link to="#"><FaRegEnvelope /></Link>
                    </div>
                    <div className="profile">
                        <img src={img} /> 
                        <div className="text">
                            <h4>{name}</h4>
                            <p>{job}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="icon">
                        <div>
                            <FiSmile />
                            <span> {info1}</span>
                        </div>
                        <div>
                            <FaCodeCommit />
                            <span> {info2}</span>
                        </div>
                        <div>
                            <FaRegNewspaper />
                            <span>{info3}</span>
                        </div>
                    </div>
                    <hr />
                    <div className="info">
                        <p>{Date}</p>
                        <div>
                            <Link to="/profile">Profile</Link>
                            <Link to="#">Remove</Link>
                        </div>
                    </div>
                </div>
        </div>
  )
}

export default Slidefriends
