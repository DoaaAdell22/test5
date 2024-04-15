import React from 'react'
import { FaDownload } from "react-icons/fa6";

const Slidefiles = ({image , file , name , date ,size}) => {
  return (
            <div>
                    <div className="slide">
                            <div className="down">
                                <FaDownload />
                            </div>
                            <div className="image">
                                <img src={image} alt="" />
                                <p>{file}</p>
                            </div>
                            <div className="nam">{name}</div>
                            <hr />
                            <div className="info">
                                <div>{date}</div>
                                <div>{size}</div>
                            </div>
                    </div>
            </div>
  )
}

export default Slidefiles
