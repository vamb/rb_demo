import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom"
import Home from './pages/home'
import styled from "styled-components";
import './App.css';

function App() {
  const [ pageSize, setPageSize ] = useState({ width: document.body.scrollWidth, height: document.body.scrollHeight })
  const [ activeKey, setActiveKey ] = useState('/home')

  const handleResize=()=>{
    const isClient = typeof window === 'object'
    if(!isClient){
      return
    }
    setPageSize({width: document.body.scrollWidth, height: document.body.scrollHeight})
  }

  useEffect(()=>{
    handleResize()
    window.addEventListener('resize', handleResize)
    setActiveKey(window.location.pathname)
    return ()=> window.removeEventListener('resize', handleResize)
  },[])

  return (
    <Wrapper>
      <div className={'main-content'} style={{minHeight: `${pageSize.height}px`}}>
        <Router>
          <Link
            to={'/home'}
            onClick={()=>setActiveKey('/home')}
          >
            Home
          </Link>
          {/* 重定向默认页面到home页面 */}
          <Redirect from={'/'} to={'/home'} />
          <Route path={'/home'}  exact component={Home} />
        </Router>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled('div')`
  background: #ebedf0;
  height: 100%;
  width: 100%;
  .main-content {
    background: #fff;
    width: 1200px;
    margin: 0 auto;
  }
`

export default App;
