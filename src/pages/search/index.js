import React, { useState, useEffect } from 'react'
import List from '@/components/home/list'
import { fetchGet } from '@/utils/flfetch'
export default (props) => {
    let {city,category} = props.match.params
    let [list, setList] = useState([])
    let [page, setPage] = useState(0) 
    useEffect(() => {
        getList()
        return () => {
            setList = null
            setPage = null
        }
    }, [page])
    const getList = async () => {
        let {data:newlist} = await fetchGet(`api/search/${page}/${city}/${category}`)
        setList([...list,...newlist])
    }
    const changePage = ()=>{
        setPage(++page)
    }
    return (<List list={list} changePage={changePage}></List>)
}