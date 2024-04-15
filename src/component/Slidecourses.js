import React from 'react'
import { FaRegUser } from "react-icons/fa6";

const Slidecourses = ({image , avatar , course , desc , view , price}) => {
  return (
            <div>
                    <div className="slide">
                        <div className="imge">
                            <img className="course" src={image} />
                            <img className="avatar" src={avatar} />
                        </div>
                        <br />
                        <div className="text">
                            <h4>{course}</h4>
                            <p>{desc}</p>
                        </div>  
                        <hr />
                        <div className="info">
                            <div>
                                <FaRegUser />
                                {view}
                            </div>
                            <div>{price}</div>
                        </div>
                    </div>
            </div>
  )
}

export default Slidecourses
