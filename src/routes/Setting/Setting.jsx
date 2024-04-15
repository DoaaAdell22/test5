import React from 'react'
import "./Setting.modules.css"
import { Link } from 'react-router-dom'
import { FaTwitter , FaFacebookF , FaLinkedin ,  FaYoutube } from "react-icons/fa";
import Title from '../../component/Title';
import { FaServer } from "react-icons/fa6";
import { Switch } from "antd";
import { Input, Radio, Space } from 'antd';
import { useState } from 'react';



const Setting = () => {

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    }

        const [value, setValue] = useState(1);
        const onchange = (e) => {
          console.log('radio checked', e.target.value);
          setValue(e.target.value);
        }

    return (
        <div>
                    <Title>Settings</Title>
                    <div className="div1"></div>
                    <div className="Boxs-setting">
                        <div className="slide">
                            <h2>Site Control</h2>
                            <p>Control The Website If There Is Maintenance</p>
                            <div className="control">
                                <div className="text">
                                    <div>Website Control</div>
                                    <p>Open/Close Website And Type The Reason</p>
                                </div>
                                <Switch defaultChecked onChange={onChange} />
                            </div>
                            <br />
                            <textarea placeholder="Close Message Content"></textarea>
                        </div>
                        <div className="slide">
                            <h2>General Info</h2>
                            <p>General Information About Your Account</p>
                            <form action="">
                                <div>
                                    <label forhtml="First" >First name</label>
                                    <input id="First" type="text" placeholder="First name" />
                                </div>
                                <div>
                                    <label forhtml="last">Last Name  </label>
                                    <input id="last" type="text" placeholder="Last Name " />   
                                </div>                            
                                <div>
                                    <label forhtml="email">email</label>
                                    <input id="email" type="email" placeholder="o@nn.sa" disabled />
                                    <Link to="#">change</Link>
                                </div>
                            </form>
                        </div>
                        <div className="slide">
                            <h2>Security Info</h2>
                            <p>Security Information About Your Account</p>
                            <div className="secu">
                                <div className="pass">
                                    <div>Password</div>
                                    <p>Last Change On 25/10/2021</p>
                                </div>
                                <button id="button1">
                                    <Link to="#">Change</Link>
                                </button>
                            </div>
                            <hr />
                            <div className="secu">
                                <div className="fact">
                                    <div>Two-Factor Authentication</div>
                                    <p>Enable/Disable The Feature</p>
                                </div>
                                <Switch defaultChecked onChange={onChange} />
                            </div>
                            <hr />
                            <div className="secu">
                                <div className="device">
                                    <div>Devices</div>
                                    <p>Check The Login Devices List</p>
                                </div>
                                <button id="button2">
                                    <Link to="#">Devices</Link>
                                </button>
                            </div>
                        </div>
                        <div className="slide">
                            <h2>Social Info</h2>
                            <p>Social Media Information</p>
                            <div className="social">
                                <div className="username">
                                    <FaTwitter className='i' />
                                    <input  type="text" placeholder="Twitter Username" />
                                </div>
                                <div className="username">
                                    <FaFacebookF className='i'/>
                                    <input  type="text" placeholder="FaceBook Username" />
                                </div>
                                <div className="username">
                                    <FaLinkedin className='i'/>
                                    <input  type="text" placeholder="Linkedin Username" />
                                </div>
                                <div className="username">
                                    <FaYoutube className='i'/>
                                    <input  type="text" placeholder="Youtube Username" />                                
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <h2>Widgets Control</h2>
                            <p>Show/Hide Widgets</p>
                            <div className="widg">
                                <div>
                                    <input type="checkbox" name="" id="Quick Draft" checked />
                                    <label for="Quick Draft">Quick Draft</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="" id="Yearly Targets" checked />
                                    <label for="Yearly Targets">Yearly Targets</label>  
                                </div>
                                <div>
                                    <input type="checkbox" name="" id="Tickets Statistics" checked />
                                    <label for="Tickets Statistics">Tickets Statistics</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="" id="Latest News" checked />
                                    <label for="Latest News">Latest News</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="" id="Latest Tasks" />
                                    <label for="Latest Tasks">Latest Tasks</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="" id="Top Search Items" checked />
                                    <label for="Top Search Items">Top Search Items</label>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <h2>Backup Manager</h2>
                            <p>Control Backup Time And Location</p>
                            <div className="backup">
                                <Radio.Group onChange={onchange} value={value}>
                                    <Space direction="vertical">
                                        <Radio value={1}>Daily</Radio>
                                        <Radio value={2}>Weekly</Radio>
                                        <Radio value={3}>Monthly</Radio>
                                    </Space>
                                </Radio.Group>
                            </div>
                            <hr />
                            <div className="manger">
                                <input type="radio" name="servers" id="server-one" />
                                <div className='serve'>
                                    <label  forhtml="server-one">
                                        <FaServer className='i'/>
                                        Megaman
                                    </label>
                                </div>
                                <input type="radio" name="servers" id="server-two" checked />
                                <div className='serve'>
                                    <label  forhtml="server-two">
                                        <FaServer className='i'/>
                                        Zero
                                    </label>
                                </div>
                                <input type="radio" name="servers" id="server-three" />
                                <div className='serve'> 
                                    <label  forhtml="server-three">
                                        <FaServer className='i' />
                                        Sigma
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default Setting
