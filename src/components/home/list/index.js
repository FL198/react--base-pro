import React from 'react'
import { Link } from 'react-router-dom'
import { PullToRefresh, List } from 'antd-mobile';
import './style.scss'
const Item = List.Item;
const Brief = Item.Brief;

export default (props) => {
    let { list, changePage } = props
    return (<div id='list'>
        <PullToRefresh
            damping={60}
            direction={'up'}
            indicator={{ deactivate: '下拉刷新' }}
            onRefresh={() => {
                changePage()
            }}
            style={{
                height: document.documentElement.clientHeight - 100,
                overflow: 'auto',
            }}
        >
            <List renderHeader={() => '猜你喜欢'} className="my-list">
                {
                    list.map((item, idx) => (
                        <Link key={idx} to={`/detail/${item.title}/${idx}`}>
                            <Item
                                align='top'
                                extra={<div><p>{item.distance}米</p><br /><p id='sale'>已售{item.number}</p></div>}
                                thumb={item.img}
                                onClick={() => { }}
                            >
                                <p id='title'>{item.title}</p> <Brief>{item.subTitle}<p id='price'>¥28</p></Brief>
                            </Item>
                        </Link>
                    ))
                }
            </List>
        </PullToRefresh>
    </div>)
}