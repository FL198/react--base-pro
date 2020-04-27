import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import storeHoc from '@/components/hoc/storeHoc'

export default storeHoc((props) => {
    let cityArr = ['北京', '上海', '杭州', '广州', '苏州', '深圳', '南京', '天津', '重庆', '厦门', '武汉', '西安']
    let { chooseCity, city } = props
    const clickHandler = (item) => {
        chooseCity(item)
        props.history.go(-1)
    }
    return (<div id='city'>
        <h1>{city}</h1>
        <h3>热门城市</h3>
        <ul>
            {
                cityArr.map((item, idx) => (
                    <a key={idx} onClick={() => { clickHandler(item) }}><li>{item}</li></a>
                ))
            }
        </ul>
    </div>)
})