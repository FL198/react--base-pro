import React from 'react';
import {HashRouter} from 'react-router-dom'
import MyRoute from '@/router'
import './App.css'
import '@/static/css/common.css'
import '@/static/css/font.css'
import Tab from '@/components/tab'
import ToogleNav from '@/components/navToggle'

function App() {
  return (
    <HashRouter>
      <ToogleNav></ToogleNav>
      <MyRoute></MyRoute>
      <Tab></Tab>
    </HashRouter>
  )
}

export default App;
