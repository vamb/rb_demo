import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom"
import Home from './pages/home'
import PageBottom from "./pages/PageBottom";
import styled from "styled-components";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";

function App() {
  const [ pageSize, setPageSize ] = useState({ width: document.body.scrollWidth, height: document.body.scrollHeight })
  const [ activeKey, setActiveKey ] = useState('/home')
  const [ btnMaskFloat, setBtnMaskFloat ] = useState(0)

  const handleResize=()=>{
    const isClient = typeof window === 'object'
    // const pageBottomObj = document.querySelector('.page-bottom') //140px height
    // console.log('width, height, pageBottomHeight', document.body.scrollWidth, document.body.scrollHeight, pageBottomObj?.scrollHeight)
    if(!isClient){
      return
    }
    setPageSize({width: document.body.scrollWidth, height: document.body.scrollHeight})
  }

  const calculateBtnMask = (availableKey) => {
    switch (availableKey) {
      case '/home':
        setBtnMaskFloat(-130)
        break
      case '/aboutUs':
        setBtnMaskFloat(0)
        break
    }
  }

  useEffect(()=>{
    handleResize()
    calculateBtnMask(activeKey)
  },[activeKey])

  useEffect(()=>{
    handleResize()
    window.addEventListener('resize', handleResize)
    setActiveKey(window.location.pathname)
    return ()=> window.removeEventListener('resize', handleResize)
  },[])

  const checkActive = (availableKey, currentKey) =>{
    return availableKey === currentKey? 'router-unit-active': 'router-unit'
  }

  return (
    <Wrapper>
      <div
        className={'main-content'}
        // style={{minHeight: `${pageSize.height}px`}}
      >
        <Router>
          <div className={'header-content'}>
            <div className={'side-title'} onClick={()=>window.location.href = '/'}>RB Demo</div>
            <div className={'router-common'}>
              <div className={checkActive(activeKey, '/home')} onClick={()=>setActiveKey('/home')}>
                <Link to={'/home'} onClick={()=>setActiveKey('/home')}>Home</Link>
              </div>
              <div className={checkActive(activeKey, '/aboutUs')} onClick={()=>setActiveKey('/aboutUs')}>
                <Link to={'/aboutUs'} onClick={()=>setActiveKey('/aboutUs')}>About Us</Link>
              </div>
              <div className={'bottom-mark'} style={{transform: `translateX(${btnMaskFloat}px)`}} />
            </div>
          </div>
          <div className={'page-content'}>
            {/* 重定向默认页面到home页面 */}
            {/*<Redirect from={'/'} to={'/home'} />*/}
            <Route path={'/home'}  exact component={Home} />
            <Route path={'/aboutUs'} exact component={AboutUsPage} />
          </div>
        </Router>
      </div>
      <PageBottom />
    </Wrapper>
  );
}

const Wrapper = styled('div')`
  background: #ebedf0;
  height: 100%;
  width: 100%;
  .main-content {
    width: 1200px;
    margin: 0 auto;
    background-image: linear-gradient(lightblue 10%, #fff 90%);
    display: flex;
    padding: 30px 100px 50px 100px;
    flex-direction: column;
  }
  .header-content {
    display: flex;
    justify-content: space-between;
    .side-title {
     font-size: 24px;
     font-weight: 700;
     cursor: pointer;
    }
  }
  .router-common {
    display: flex;
    flex-direction: row;
    position: relative;
    & > div {
      min-width: 120px;
      max-width: 120px;
      text-align: center;
      margin-right: 10px;
    }
  }
  .router-common > .router-unit-active > a, .router-common > .router-unit > a {
    color: #4b6e84;
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
  }
  .bottom-mark {
    position: absolute;
    width: 100%;
    height: 2px;
    background: #1890ff !important;
    bottom: 0;
    right: 0;
    transition-duration: 0.2s, 0.2s;
    transition-delay: 0s, 0s;
    transition-timing-function: ease-in-out, ease-in-out;
  }
`

export default App;
