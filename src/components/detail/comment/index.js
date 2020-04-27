import React, { useState } from 'react'
import { List, PullToRefresh } from 'antd-mobile';
import Star from '@/components/star'
import './style.scss'
const Item = List.Item;

export default (props) => {
    let { comment,changePage } = props
    return (comment.length > 0 ? <PullToRefresh
        damping={60}
        direction={'up'}
        indicator={{ deactivate: '下拉刷新' }}
        onRefresh={() => {
            changePage()
        }}
        style={{
            height: document.documentElement.clientHeight - 315,
            overflow: 'auto',
        }}>
        <List id='comment'>
            <h3>用户点评</h3>
            {
                comment.map((item, idx) => (
                    <Item key={idx} multipleLine={false}>
                        <div className="icon-user"></div>
                        <div>
                            {item.username} <p><Star star={item.star}></Star></p><p>{item.comment}</p>
                        </div>
                    </Item>
                ))
            }
        </List>
    </PullToRefresh> : <div></div>)
}