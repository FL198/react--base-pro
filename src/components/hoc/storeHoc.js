import React from 'react'
import { connect } from 'react-redux'
import { chooseCity } from '@/actions'
export default (Component) => {
    const mapStateToProps = state => {
        return {
            city: state
        }
    }
    const mapDispatchToProps = {
        chooseCity
    }
    function reduxComp(props) {
        return (<Component {...props}></Component>)
    }
    return connect(mapStateToProps, mapDispatchToProps)(reduxComp)
}