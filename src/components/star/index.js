import React, { useState, useEffect } from 'react'

export default (props) => {
    let { star } = props
    let [starnum,setStarnum] = useState(star)
    let arr= [1,2,3,4,5]
    const changeStar =(e)=>{
        setStarnum(e)
    }
    return (<span> 
        {
            arr.map((item,idx)=>(
                item>starnum?<i key={idx} onClick={()=>{changeStar(item)}} className="icon-star-o"></i> :<i key={idx} onClick={()=>{changeStar(item)}} className="icon-star" style={{color:'#EC1A37'}}></i>
            ))
        }
    </span>)
}