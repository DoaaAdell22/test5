import React from 'react'
import "./Plans.modules.css"
import { FaCheck } from "react-icons/fa6";
import { CiCircleInfo } from "react-icons/ci";
import { FaXmark } from "react-icons/fa6";
const Slide1 = ({title , price ,color , features}) => {
  return (
    <div>
            <div className="slide">
                <div className="plan" style={{backgroundColor : color , outlineColor : color } } >
                        <h3>{title}</h3>
                        <p>{price}</p>
                            </div>
                            <div className="features">
                                {features.map((el)=> 
                                    <>
                                        <div className="feat">
                                            <div className="text">
                                                {el.isRight ? <FaCheck id="gr" /> : <FaXmark id="re" />}
                                                <span>{el.text}</span>
                                            </div>
                                            <div className="info">
                                                <CiCircleInfo  />
                                            </div>
                                        </div>
                                        <hr />
                                    </>
                                )  }
                            </div>
                            
                                
                            <button className="button" style={{backgroundColor : color}}>Join</button>
                        </div>
    </div>
  )
}

export default Slide1


