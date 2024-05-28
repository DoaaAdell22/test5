import React from 'react'
import "./Header.css"
import { IoMdNotificationsOutline } from "react-icons/io";
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { useDispatch } from 'react-redux';
import  {removeToken}  from '../../Redu/Action';
import { Button, Tooltip } from 'antd';
import { IoMdLogOut } from "react-icons/io";
import {  useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  
  const z = () => {
    dispatch(removeToken());
};
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

const onSearch = (value, _e, info) => console.log(info?.source, value);
  const profile = () =>{
    return navigate('profile')
  }
  return (
    
      <div >
          <div className="header">
              <div className="search">
                  <Space direction="vertical">
                  <Search
                  placeholder="input search text"
                  onSearch={onSearch}
                  style={{
                    width: 200,
                  }}
                  />
                  </Space>
              </div>
              <div className="icons">
                  <div className="notiv">
                      <IoMdNotificationsOutline />
                  </div>
                  <img src="../media/avatar.png" alt="" onClick={profile} style={{cursor : 'pointer'}} />
                  <Tooltip title="Logout">
                    <Button style={{backgroundColor : '#3fc7cc', marginRight : '10px'}} onClick={z} type="primary" shape="circle" icon={<IoMdLogOut style={{fontSize : '16px'}} />} />
                  </Tooltip>
              </div>
          </div>
      </div>
  )
}

export default Header
