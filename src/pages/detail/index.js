import React, { useState, useEffect } from 'react'
import Header from '@/components/detail/header'
import Comment from '@/components/detail/comment'
import { fetchGet } from '@/utils/flfetch'

export default (props) => {
    let [detail, setDetail] = useState({})
    let [comment, setComment] = useState([])
    let [page, setPage] = useState(0)
    useEffect(() => {
        getDetail()
        return () => {
            setDetail = null
            setComment = null
            setPage = null
        }
    }, [])
    const changePage = () => {
        setPage && setPage(++page)
    }
    const getDetail = async () => {
        let { data: detail } = await fetchGet(`api/detail/info/${props.match.params.id}`)
        setDetail && setDetail(detail)
    }
    useEffect(() => {
        getComment()
    }, [page])
    const getComment = async () => {
        let { data: newcomment } = await fetchGet('api/detail/comment/0')
        setComment && setComment([...comment, ...newcomment])
    }
    return (
        <React.Fragment>
            <Header detail={detail}></Header>
            <Comment comment={comment} changePage={changePage}></Comment>
        </React.Fragment>
    )
}