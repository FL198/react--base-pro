import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Nav1 from '@/components/nav1'
import Nav2 from '@/components/nav2'
import Nav3 from '@/components/nav3'

export default withRouter((props) => {
    let [navType, setNavType] = useState('nav1')
    useEffect(() => {
        let pathname = props.location.pathname
        if (pathname === '/' || pathname === '/home' || pathname === '/user' || pathname === '/login') {
            setNavType('nav1')
        }
        else if (pathname.includes('search')) {
            setNavType('nav3')
        }
        else {
            setNavType('nav2')
        }
    }, [props.location.pathname])
    return ((navType === 'nav1' && <Nav1></Nav1>) || (navType === 'nav2' && <Nav2></Nav2>) || (navType === 'nav3' && <Nav3></Nav3>))
})