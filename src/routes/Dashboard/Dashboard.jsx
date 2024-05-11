
import "./Dashboard.modules.css"
import { FaDollarSign , FaUser , FaRectangleList , FaRegRectangleXmark    } from "react-icons/fa6";
import { FaCode , FaSpinner  } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaTwitter , FaFacebookF , FaYoutube , FaLinkedin  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { MdDoneOutline } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import {  useSelector } from 'react-redux';
import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'




const Dashboard = () => {

    const navigate = useNavigate()

    const [like , setLike] =useState(false)
    const [social , setSocial ] =useState(false)
    const [save , setSave] = useState(false);
    const [task , setTask] = useState(
        [
        {
            title : "Record One New Video" ,
            text : "Record Python Create Exe Project"
        },
        {
            title : "Write Article " ,
            text : "Write Low Level vs High Level Languages"
        },
        {
            title : "Finish Project" ,
            text : "Publish Academy Programming Project"
        },
        {
            title : "Attend The Meetin" ,
            text : "Attend The Project Business Analysis Meetin"
        },
        {
            title : "Finish Lesson" ,
            text : "Finish Teaching Flex Box"
        }
        ]
    
    )
    
    const remover = (event , clickedIdx) =>{
        const delethandler = task.filter((el , idx) => idx !== clickedIdx);
        setTask(delethandler);
    }

    const saving = () =>{
        setSave(!save) 
    }

    const media = [
        {
            icon : <FaTwitter /> ,
            person : "90k Followers",
            link : "follow" ,
            un : "unfollow" ,
            background : "#a2c6f0" ,
            color : "#2378d7"
        },
        {
            icon : <FaFacebookF /> ,
            person : "2M Like",
            link : "Like",
            un : "unLike" ,
            background : "#bfd8f5" ,
            color : " #378ae9"
        },
        {
            icon : <FaYoutube /> ,
            person : "1M Subs",
            link : "Subscribe",
            un : "unSubscribe" ,
            background : "#f3cece" ,
            color : "#df1a1a"
        },
        {
            icon : <FaLinkedin /> ,
            person : "70K Followers",
            link : "follow",
            un : "unfollow" ,
            background : "#acccf0" ,
            color : "#3071bb"
        }
    ]

    const click = (e) => {
        setSocial(!social)
    }

    const react = () =>{
        setLike(!like)
    } 


    const token = useSelector(state => state.token);

    useEffect(()=>{

        if(!token){
            navigate('Login')
        }

    } , [token ])
    return (
        <div>
            <h1>Dashboard</h1>
                <div className="div1"></div>
                <div className="Boxs">
                        <div className="slide">
                            <div className="head">
                                <div className="adress">
                                    <h2>Welcome</h2>
                                    <h3>Elzero</h3>
                                </div>
                                <img src="/media/welcome.png" alt="" />
                            </div>
                            <div className="image"><img  src="/media/avatar.png" width="60px" alt="" /></div>
                            <div className="body">
                                <div>
                                    <span>Osama Elzero</span>
                                    <p>Developer</p>
                                </div>
                                <div>
                                    <span>80</span>
                                    <p>Project</p>
                                </div>
                                <div>
                                    <span>8500$</span>
                                    <p>Earned</p>
                                </div>
                            </div>
                            <div className="button"><Link to="profile">Profile</Link></div>
                        </div>
                        <div className="slide">
                            <h2>Quick Draft</h2>
                            <p>Write A Draft Your Ideas</p>
                            <form >
                                <input type="text" name="Titlel" placeholder="Title" />
                                <input type="text" id="in" name="subject" placeholder="Your Thought"  />
                            </form>
                            <div className="butt">
                                <input type="submit" value={save ? "reset" :"save"} onClick={saving}  />
                                {save ? <MdDoneOutline style={{color : "blue" , marginLeft : "4px"}} /> : ""}
                                </div>
                        </div>
                        <div className="slide">
                            <h2>Yearly Targets</h2>
                            <p>Target of the year</p>
                            <div className="target">
                                <div className="money">
                                    <div className="icon">
                                        <FaDollarSign />
                                    </div>
                                    <div className="det">
                                        <h3>Money</h3>
                                        <p>20.000 $</p>
                                        <div className="d1"></div>
                                    </div>
                                </div>
                                <div className="projects">
                                    <div className="icon">
                                        <FaCode />
                                    </div>
                                    <div className="det">
                                        <h3>Projects</h3>
                                        <p>24</p>
                                        <div className="d2"></div>
                                    </div>
                                </div>    
                                <div className="team">
                                    <div className="icon">
                                        <FaUser />
                                    </div>
                                    <div className="det">
                                        <h3>Team</h3>
                                        <p>12</p>
                                        <div className="d3"></div>
                                    </div>    
                                </div>
                            </div>
                        </div>        
                        <div className="slide">
                            <h2>Tickets Statistics</h2>
                            <p>Everything About Support Tickets</p>
                            <div className="tickets">
                                <div className="t1">
                                    <FaRectangleList className='i' />
                                    <div>2500</div>
                                    <p>Total</p>
                                </div>
                                <div className="t2">
                                    <FaSpinner className='i' />
                                    <div>500</div>
                                    <p>Pending</p>
                                </div>
                                <div className="t3">
                                    <FaRegCircleCheck   className='i' />
                                    <div>1900</div>
                                    <p>Closed</p>
                                </div>
                                <div className="t4">
                                    <FaRegRectangleXmark   className='i' />
                                    <div>100</div>
                                    <p>Deleted</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="slide">
                            <h2>Latest News</h2>
                            <div className="news">
                                <div className="parent">
                                    <div className="child">
                                        <img src="../media/news-01.png" alt="" />
                                        <div className="det">
                                            <h3>Created SASS Section</h3>
                                            <p>New SASS Examples & Tutorials</p>
                                        </div>
                                    </div>
                                    <div className="info">3 Days Ago</div>
                                </div>
                                <hr />
                                <div className="parent">
                                    <div className="child">
                                        <img src="../media/news-02.png" alt="" />
                                        <div className="det">
                                            <h3>Changed The Design</h3>
                                            <p>A Brand New Website Design</p>
                                        </div>
                                    </div>
                                    <div className="info">5 Days Ago</div>
                                </div>
                                <hr />
                                <div className="parent">
                                    <div className="child">
                                        <img src="../media/news-03.png" alt="" />
                                        <div className="det">
                                            <h3>Team Increased</h3>
                                            <p>3 Developers Joined The Team</p>
                                        </div>
                                    </div>
                                    <div className="info">7 Days Ago</div>
                                </div>
                                <hr />
                                <div className="parent">
                                    <div className="child">
                                        <img src="../media/news-04.png" alt="" />
                                        <div className="det">
                                            <h3>Added Payment Gateway</h3>
                                            <p>Many New Payment Gateways Added</p>
                                        </div>
                                    </div>
                                    <div className="info">9 Days Ago</div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <h2>Latest Tasks</h2>
                            <div className="tasks">
                                {task.map(function(el ,idx){
                                    return  (
                                    <Fragment>    
                                    <div className="task"> 
                                        <div className="t">
                                            <h3>{el.title}</h3>
                                            <p>{el.text}</p>
                                        </div>
                                        <div className="icon">
                                            <button style={{border : "none"}} onClick={(e)=> remover(e , idx )} ><RiDeleteBin6Line  /></button>
                                        </div>
                                    </div>
                                    <hr />
                                    </Fragment>
                                            )}
                                )}
                            </div>
                        </div>
                        <div className="slide">
                            <h2>Top Search Items</h2>
                            <div className="item" id="it">
                                <h3>Keyword</h3>
                                <p>Search Count </p>
                            </div>
                            <div className="item">
                                <h3>Programming</h3>
                                <div>220</div>
                            </div>
                            <div className="item">
                                <h3>JavaScript</h3>
                                <div>180</div>
                            </div>
                            <div className="item">
                                <h3>PHP</h3>
                                <div>160</div>
                            </div>
                            <div className="item">
                                <h3>Code</h3>
                                <div>145</div>
                            </div>
                            <div className="item">
                                <h3>Design</h3>
                                <div>110</div>
                            </div>
                            <div className="item">
                                <h3>Logic</h3>
                                <div>95</div>
                            </div>
                        </div>
                        <div className="slide">
                            <h2>Latest Uploads</h2>
                            <div className="files">
                                <div className="upload">
                                    <div className="up">
                                        <img  src="../media/pdf.svg" alt="" />
                                        <div className="file">
                                            <div>my-file.pdf</div>
                                            <p>Elzero</p>
                                        </div>
                                    </div>
                                    <div className="info">2.9mb</div>
                                </div>
                                <hr />
                                <div className="upload">
                                    <div className="up">
                                        <img src="../media/avi.svg" alt="" />
                                        <div className="file">
                                            <div>My-Video-File.avi</div>
                                            <p>Admin</p>
                                        </div>
                                    </div>
                                    <div className="info">4.9mb</div>
                                </div>
                                <hr />
                                <div className="upload">
                                    <div className="up">
                                        <img src="../media/psd (1).svg" alt="" />
                                        <div className="file">
                                            <div>My-Psd-File.pdf</div>
                                            <p>Osama</p>
                                        </div>
                                    </div>
                                    <div className="info">4.5mb</div>
                                </div>
                                <hr />
                                <div className="upload">
                                    <div className="up">
                                        <img src="../media/zip (1).svg" alt="" />
                                        <div className="file">
                                            <div>My-Zip-File.pdf</div>                                    
                                            <p>User</p>
                                        </div>
                                    </div>
                                    <div className="info">8.9mb</div>
                                </div>
                                <hr />
                                <div className="upload">
                                    <div className="up">
                                        <img src="../media/dll (1).svg" alt="" />
                                        <div className="file">
                                            <div>My-DLL-File.pdf</div>
                                            <p>Admin</p>
                                        </div>
                                    </div>
                                    <div className="info">4.9mb</div>                              
                                </div>
                                <hr />
                                <div className="upload">
                                    <div className="up">
                                        <img src="../media/eps (1).svg" alt="" />
                                        <div className="file">
                                            <div>My-Eps-File.pdf </div>
                                            <p>Designer</p>
                                        </div>
                                    </div>
                                    <div className="info">8.9mb</div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <h2>Last Project Progress</h2>
                            <div className="project">
                                <ul>
                                    <li>
                                        <div ></div>
                                        Got The Project
                                    </li>
                                    <li>
                                        <div></div>
                                        Started The Project
                                    </li>
                                    <li>
                                        <div></div>
                                        The Project About To Finish
                                    </li>
                                    <li>
                                        <div id="anim"></div>
                                        Test The Project
                                    </li>
                                    <li>
                                        <div></div>
                                        Finish The Project & Get Money
                                    </li>
                                </ul>
                                <img src="../media/project.png" alt="" />
                            </div>
                        </div>
                        <div className="slide">
                            <h2>Reminders</h2>
                            <div className="rem">
                                <div className="check">
                                    <div className="blue"></div>
                                    <div className="main">
                                        <p>Check My Tasks List</p>
                                        <p>28/09/2022 - 12:00am</p>
                                    </div>
                                </div>
                                <div className="check">
                                    <div className="green"></div>
                                    <div className="main">
                                        <p>Check My Projects</p>
                                        <p>26/10/2022 - 12:00am</p>
                                    </div>
                                </div>
                                <div className="check">
                                    <div className="orange"></div>
                                    <div className="main">
                                        <p>Check My Client</p>
                                        <p>05/11/2022 - 12:00am</p>
                                    </div>
                                </div>
                                <div className="check">
                                    <div className="red"></div>
                                    <div className="main">
                                        <p>Finish The Development Workshop </p>
                                        <p>20/12/2022 - 12:00am</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <h2>Latest Post</h2>
                            <div className="post">
                                <div className="person">
                                    <img src="../media/avatar.png" alt="" />
                                    <div className="name">
                                        <h4>Osama Elzero</h4>
                                        <p>About 3 Hours Ago</p>
                                    </div>
                                </div>
                                <hr />
                                <p>You Can Fool All Of The People Some Of The Time
                                    , And Some Of The People 
                                    All Of The Time, But You Can't Fool
                                    All Of The People All Of The Time.</p>
                                <hr />
                                <br />
                                <div className="info">
                                    <div className="like">
                                        <FaRegHeart onClick={react} style={like ? {color : "red" } : {color : ""}} />
                                        <span style={{marginLeft : "5px"}} >{like ? "1,9k" : "1,8k"}</span>
                                    </div>
                                    <div className="comment">
                                        <FaRegComment />
                                        <span style={{marginLeft : "5px"}} >500</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <h2>Social Media Stats</h2>
                            <div className="social">
                                {media.map(function(el) {
                                    return (
                                        <div>
                                            <div className="card" style={{background : el.background}}>
                                                <div className="icon">
                                                    <div className="i" style={{backgroundColor : el.color}}>
                                                        {el.icon}
                                                    </div>
                                                    <div>{el.person}</div>
                                                </div>
                                                <Link className="link" style={{backgroundColor : el.color}} to="" onClick={click}>{!social? el.link : el.un}</Link>
                                            </div>
                                        </div>)
                                    })}
                            </div>
                        </div>
                        <div className="slide">
                            <h2>Projects</h2>
                            <table >
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                    
                                        <th>Finish Data</th>
                                    
                                        <th>Client</th>
                                    
                                        <th>Price</th>
                                    
                                        <th>Team</th>
                                    
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Ministry Wikipedia	</td>
                                        <td>10 May 2022	</td>
                                        <td>Ministry</td>
                                        <td>$5300	</td>
                                        <td>
                                            <img src="/media/team-01.png" alt="" />
                                            <img src="/media/team-02.png" alt="" />
                                            <img src="/media/team-03.png" alt="" />
                                            <img src="/media/team-04.png" alt="" />
                                        </td>
                                        <td>
                                            <div>Pending </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Elzero Shop</td>
                                        <td>12 Oct 2021</td>
                                        <td>Elzero Company</td>
                                        <td>$1500</td>
                                        <td>
                                            <img src="/media/team-01.png" alt="" />
                                            <img src="/media/team-02.png" alt=""/>
                                            <img src="/media/team-04.png" alt="" />
                                        </td>
                                        <td>
                                            <div>In Progress</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Bouba App</td>
                                        <td>05 Sep 2021</td>
                                        <td>Bouba</td>
                                        <td>$800</td>
                                        <td>
                                            <img src="/media/team-02.png" alt="" />
                                            <img src="/media/team-03.png" alt="" />
                                        </td>
                                        <td>
                                            <div>Completed</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Mahmoud Website	</td>
                                        <td>22 May 2021		</td>
                                        <td>Mahmoud</td>
                                        <td>$600</td>
                                        <td>
                                            <img src="/media/team-01.png" alt="" />
                                            <img src="/media/team-02.png" alt="" />
                                        </td>
                                        <td>
                                            <div>Completed</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Sayed Website</td>
                                        <td>24 May 2021</td>
                                        <td>Sayed</td>
                                        <td>$300</td>
                                        <td>
                                            <img src="/media/team-01.png" alt="" />
                                            <img src="/media/team-03.png" alt="" />
                                        </td>
                                        <td>
                                            <div>Rejected</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Arena Application</td>
                                        <td>01 Mar 2021	</td>
                                        <td>Arena Company</td>
                                        <td>$2600</td>
                                        <td>
                                            <img src="/media/team-01.png" alt="" />
                                            <img src="/media/team-02.png" alt="" />
                                            <img src="/media/team-03.png" alt="" />
                                            <img src="/media/team-05.png" alt="" />
                                        </td>
                                        <td>
                                            <div>Completed</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>
        </div>
    )
}

export default Dashboard;
