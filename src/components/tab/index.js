import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { TabBar } from 'antd-mobile';
import './style.scss'

export default withRouter((props) => {
    let [selectedTab, setSelectedTab] = useState('home')
    return (<TabBar>
        <TabBar.Item
            title="主页"
            icon={<div className='icon-photo'></div>}
            selectedIcon={<div className='icon-photo'></div>
            }
            selected={selectedTab === 'home'}
            onPress={() => {
                setSelectedTab('home');
                props.history.push('/')
            }}
        >
        </TabBar.Item>
        <TabBar.Item
            icon={
                <div className='icon-key'></div>
            }
            selectedIcon={
                <div className='icon-key'></div>
            }
            title="登录"
            selected={selectedTab === 'login'}
            onPress={() => {
                setSelectedTab('login')
                props.history.push('/login')
            }}
        >
        </TabBar.Item>
        <TabBar.Item
            icon={
                <div className='icon-star'></div>
            }
            selectedIcon={
                <div className='icon-star'></div>
            }
            title="用户"
            selected={selectedTab === 'user'}
            onPress={() => {
                setSelectedTab('user')
                props.history.push('/user')
            }}
        >
        </TabBar.Item>
    </TabBar>)
})