import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'antd-mobile';
import storeHoc from '@/components/hoc/storeHoc'
import './style.scss'

export default storeHoc((props) => {
    let { cate, city } = props
    return (cate.length > 0 ? <Carousel infinite>
        {
            cate.map((dataArr, idx) => (
                <ul key={idx}>
                    {
                        dataArr.map(item => (
                            <li key={item.name}>
                                <Link to={`/search/0/${city}/${item.to}`}>
                                    <img src={require(`@/images/marquee/${item.img}`)} alt={item.name} />
                                    <p>{item.name}</p>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            ))
        }
    </Carousel> : <div></div>)
})