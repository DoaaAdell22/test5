import React from 'react'
import { CiStar } from "react-icons/ci";
import "./Profile.modules.css"

const Profile = () => {
    return (
                <div>
                    <h1>Profile</h1>
                    <div className="div1"></div>
                    <div className="Box-profile">
                        <div className="slide">
                            <div className="profile">
                                <div className="avatar">
                                    <img src="../media/avatar.png" alt="" />
                                    <h3>Osama Elzero</h3>
                                    <p>Level 20</p>
                                    <div className="rate"></div>
                                    <div className="star">
                                        <CiStar className='istar'/>
                                        <CiStar className='istar'/>
                                        <CiStar  className='istar'/>
                                        <CiStar className='istar'/>
                                        <CiStar className='istar'/>
                                    </div>
                                    <span>550 Rating</span>
                                </div>
                                <div className="information">
                                    <div className="gene">
                                        <h4>General Information</h4>
                                        <div className="det">
                                            <div><span>Full Name</span> Osama Mohamed</div>
                                            <div><span>Gender:</span> Male</div>
                                            <div><span>Country:</span> Egypt</div>
                                        </div>
                                        <label >
                                            <input className="checkbox" type="checkbox" checked />
                                            <div className="button"></div>
                                        </label>
                                    </div>
                                    <hr />
                                    <div className="gene">
                                        <h4>Personal Information</h4>
                                        <div className="det">
                                            <div><span>Email:</span> o@nn.sa</div>
                                            <div><span>Phone:</span> 019123456789</div>
                                            <div><span>Date Of Birth:</span> 25/10/1982</div>
                                        </div>
                                        <label >
                                            <input className="checkbox" type="checkbox" />
                                            <div className="button"></div>
                                        </label>
                                    </div>
                                    <hr />
                                    <div className="gene">
                                        <h4>Job Information</h4>
                                        <div className="det">
                                            <div><span>Title: </span>Full Stack Developer</div>
                                            <div><span>Programming Language:</span> Python</div>
                                            <div><span>Years Of Experience:</span> 15+</div>
                                        </div>
                                        <label >
                                            <input className="checkbox" type="checkbox" checked />
                                            <div className="button"></div>
                                        </label>
                                    </div>
                                    <hr />
                                    <div className="gene">
                                        <h4>Billing Information</h4>
                                        <div className="det">
                                            <div><span>Payment Method:</span> Paypal</div>
                                            <div><span>Email:</span> email@website.com</div>
                                            <div><span>Subscription:</span> Monthly</div>
                                        </div>
                                        <label >
                                            <input className="checkbox" type="checkbox" />
                                            <div className="button"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <h2>My Skills</h2>
                            <p>Complete Skills List</p>
                            <div className="skill">
                                <div>
                                    <span>HTML</span>
                                    <span>Pugjs</span>
                                    <span>HAML</span>
                                </div>
                                <hr />
                                <div>
                                    <span>CSS</span>
                                    <span>SASS</span>
                                    <span>Stylus</span>
                                </div>
                                <hr />
                                <div>
                                    <span>JavaScript</span>
                                    <span>TypeScript</span>
                                </div>
                                <hr />
                                <div>
                                    <span>Vuejs</span>
                                    <span>Reactjs</span>
                                </div>
                                <hr />
                                <div>
                                    <span>Jest</span>
                                    <span>Jasmine</span>
                                </div>
                                <hr />
                                <div>
                                    <span>PHP</span>
                                    <span>Laravel</span>
                                </div>
                                <hr />
                                <div>
                                    <span>Python</span>
                                    <span>Django</span>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <h2>Latest Activities</h2>
                            <p>Latest Activities Done By The User</p>
                            <div className="activities">
                                <div className="activity">
                                    <div className="icon">
                                        <img src="../media/activity-01.png" alt="" />
                                        <div className="text">
                                            <div>Store</div>
                                            <p>Bought The Mastering Python Course</p>
                                        </div>
                                    </div>
                                    <div className="time">
                                        <div>18:10</div>
                                        <p>Yesterday</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="activity">
                                    <div className="icon">
                                        <img src="../media/activity-02.png" alt="" />
                                        <div className="text">
                                            <div>Academy</div>
                                            <p>Got The PHP Certificate
                                            </p>
                                        </div>
                                    </div>
                                    <div className="time">
                                        <div>16:05
                                        </div>
                                        <p>Yesterday</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="activity">
                                    <div className="icon">
                                        <img src="../media/activity-03.png" alt="" />
                                        <div className="text">
                                            <div>Badges</div>
                                            <p>Unlocked The 10 Skills Badge</p>
                                        </div>
                                    </div>
                                    <div className="time">
                                        <div>18:05</div>
                                        <p>Yesterday</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="activity">
                                    <div className="icon">
                                        <img src="../media/activity-01.png" alt="" />
                                        <div classNameName="text">
                                            <div>Store</div>
                                            <p>Bought The Mastering Python Course</p>
                                        </div>
                                    </div>
                                    <div classNameName="time">
                                        <div>12:05</div>
                                        <p>Yesterday</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
  )
}

export default Profile
