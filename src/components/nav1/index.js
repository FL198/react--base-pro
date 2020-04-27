import React from 'react'
import { withRouter } from 'react-router-dom'
import { NavBar, Icon, SearchBar } from 'antd-mobile';
import storeHoc from '@/components/hoc/storeHoc'
import './style.scss'

export default storeHoc(withRouter((props) => {
    let { city } = props
    return (<NavBar
        mode="light"
        onLeftClick={() => { props.history.push('/city') }}
        leftContent={<div>{city}<Icon type="down" /></div>}
        rightContent={<span className="icon-user"></span>}
    ><SearchBar placeholder="请输入关键字" onSubmit={val => { props.history.push(`/search/0/${city}/all/${val}`) }} /></NavBar>)
}))
