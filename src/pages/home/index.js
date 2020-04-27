import React, { useState, useEffect } from 'react'
import Marquee from '@/components/home/marquee'
import Adver from '@/components/home/adver'
import List from '@/components/home/list'
import { fetchGet } from '@/utils/flfetch'
import storeHoc from '@/components/hoc/storeHoc'

export default storeHoc((props) => {
    let [cate, setCate] = useState([])
    let [adver, setAdver] = useState([])
    let [list, setList] = useState([])
    let [page, setPage] = useState(0)
    useEffect(() => {
        getCate()
        getAdver()
        return () => {
            setCate = null
            setAdver = null
            setList = null
            setPage=null
        }
    }, [])
    useEffect(()=>{
        getList()
    },[page])
    const changePage = ()=>{
        setPage && setPage(++page)
    }
    const getCate = async () => {
        let { data: cate } = await fetchGet('api/catelist')
        setCate && setCate(cate)
    }
    const getAdver = async () => {
        let { data: adver } = await fetchGet('api/homead')
        setAdver && setAdver(adver)
    }
    const getList = async () => {
        let { data: newlist } = await fetchGet(`api/homelist/${page}/1`)
        setList && setList([...list,...newlist])
    }
    return (
        <React.Fragment>
            <Marquee cate={cate}></Marquee>
            <Adver adver={adver}></Adver>
            <List list={list} changePage={changePage}></List>
        </React.Fragment>
    )
})