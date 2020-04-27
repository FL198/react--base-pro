import React, { Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
const Home = lazy(() => import('@/pages/home'))
const Login = lazy(() => import('@/pages/login'))
const User = lazy(() => import('@/pages/user'))
const City = lazy(() => import('@/pages/city'))
const Search = lazy(() => import('@/pages/search'))
const Detail = lazy(() => import('@/pages/detail'))

export default () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/home' component={Home}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/user' component={User}></Route>
                <Route path='/city' component={City}></Route>
                <Route path='/detail/:info/:id' component={Detail}></Route>
                <Route path='/search/0/:city/:category/:keywords?' component={Search}></Route>
                <Redirect to='/'></Redirect>
            </Switch>
        </Suspense>)
}