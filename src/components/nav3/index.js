import React from 'react'
import { withRouter } from 'react-router-dom'
import { NavBar, Icon, SearchBar } from 'antd-mobile';

export default withRouter((props) => {
    let { city } = props
    return (<NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => { props.history.go(-1) }}
    ><SearchBar placeholder="请输入关键字" onSubmit={val => { props.history.push(`/search/0/${city}/${val}`) }} /></NavBar>)
})