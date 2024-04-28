import React from 'react'
import "./Header.css"
import { IoMdNotificationsOutline } from "react-icons/io";
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';



const Header = () => {


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

  return (
    <div >
        <div class="header">
            <div class="search">
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
