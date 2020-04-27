import React from 'react'
import './style.scss'
export default (props) => {
    let { adver } = props
    return (adver.length > 0 ? <div id='adver'>
        <h3>超值特惠</h3>
        <ul>
            {
                adver.map(item => (
                    <a key={item.img} target="_blank" href={item.link}><li><img src={require(`@/images/adver/${item.img}`)} /></li></a>
                ))
            }
        </ul>
    </div> : <div></div>)
}