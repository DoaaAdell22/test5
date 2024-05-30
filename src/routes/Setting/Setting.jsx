import React from 'react'
import "./Setting.modules.css"
import { Link } from 'react-router-dom'
import { FaTwitter , FaFacebookF , FaLinkedin ,  FaYoutube } from "react-icons/fa";
import Title from '../../component/Title';
import { Switch } from "antd";
import {  Radio, Space  } from 'antd';
import { useState } from 'react';
import { Flex } from 'antd';

const Setting = () => {

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    }

        const [value, setValue] = useState(1);
        const onchange = (e) => {
            console.log('radio checked', e.target.value);
            setValue(e.target.value);
        }

        const [val, setVal] = useState(1);
        const onchanger = (e) => {
            console.log('radio checked', e.target.value);
            setVal(e.target.value);
        }
        const [change , setChange] =useState(false);
        const changerHandler = () => {
            setChange(!change)
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
                                    {change?<input  id="email" type="email" /> : <input  id="email" type="email" placeholder="o@nn.sa" disabled/> }
                                    <Link onClick={changerHandler} to="#">{change ? "reset" : "change"}</Link>
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
                                    <FaTwitter style={{color : '#1dacbe'}} className='i' />
                                    <input  type="text" placeholder="Twitter Username" />
                                </div>
                                <div className="username">
                                    <FaFacebookF style={{color : 'blue'}} className='i'/>
                                    <input  type="text" placeholder="FaceBook Username" />
                                </div>
                                <div className="username">
                                    <FaLinkedin style={{color : '#1f64a5'}} className='i'/>
                                    <input  type="text" placeholder="Linkedin Username" />
                                </div>
                                <div className="username">
                                    <FaYoutube style={{color : 'red'}} className='i'/>
                                    <input  type="text" placeholder="Youtube Username" />                                
                                </div>
                            </div>
                    </div>
                    <div className="slide">
                        <h2>Widgets Control</h2>
                        <p>Show/Hide Widgets</p>
                        <div className="widg">
                            <Radio.Group onChange={onchanger} value={val}>
                                <Space direction="vertical">
                                    <Radio value={1}>Quick Draft</Radio>
                                    <Radio value={2}>Yearly Targets</Radio>
                                    <Radio value={3}>Tickets Statistics</Radio>
                                    <Radio value={4}>Latest News</Radio>
                                    <Radio value={5}>Top Search Items</Radio>
                                </Space>
                            </Radio.Group>
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
                            <Flex style={{display : "flex", justifyContent : "center", alignItems : "center"}} vertical gap="middle">
                                <Radio.Group defaultValue="b" buttonStyle="solid">
                                    <Radio.Button  value="a"  style={{width : "150px", height : "40px"}}>Megaman</Radio.Button>
                                    <Radio.Button value="b" style={{width : "150px" , height : "40px"}}>Zero</Radio.Button>
                                    <Radio.Button value="c" style={{width : "150px" , height : "40px"}}>Sigma</Radio.Button>
                                </Radio.Group>
                            </Flex>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Setting
