import React from 'react'
import { withRouter } from 'react-router-dom'
import './style.scss'
import { NavBar, Icon } from 'antd-mobile';
export default withRouter((props) => {
    let pathStr = ''
    if (props.location.pathname.includes('city')) {
        pathStr = '选择城市'
    } else {
        pathStr = '商户详情'
    }
    return (<NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => { props.history.go(-1) }}
    >{pathStr}</NavBar>)
})