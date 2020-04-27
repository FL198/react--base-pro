import React, { useState, useEffect } from 'react'
import Star from '@/components/star'
import { Card } from 'antd-mobile';
import './style.scss'

export default (props) => {
    let { detail } = props
    return (JSON.stringify(detail) === '{}' ? <div></div> : <Card>
        <Card.Header
            title={<div id='desc'>
                <h3>{detail.title}</h3>
                <div><Star star={detail.star}></Star> ¥ {detail.price}</div>
                <p>{detail.subTitle}</p>
            </div>}
            thumb={detail.img}
        />
        <Card.Body>
            <div dangerouslySetInnerHTML={{ __html: detail.desc }}></div>
        </Card.Body>
    </Card>)
}