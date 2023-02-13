import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom"
import Home from './pages/home'
import styled from "styled-components";

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

  const checkActive = (availableKey, currentKey) =>{
    return availableKey === currentKey? 'router-unit-active': 'router-unit'
  }

  return (
    <Wrapper>
      <div className={'main-content'} style={{minHeight: `${pageSize.height}px`}}>
        <Router>
          <div className={'header-content'}>
            <div className={'side-title'} onClick={()=>window.location.href = '/'}>RB Demo</div>
            <div className={'router-common'}>
              <div className={checkActive(activeKey, '/home')}>
                <Link
                  to={'/home'}
                  onClick={()=>setActiveKey('/home')}
                >Home
                </Link>
                <div className={'bottom-mark'} />
              </div>
              <div className={checkActive(activeKey, '/aboutUs')}>
                <Link
                  to={'/aboutUs'}
                  onClick={()=>setActiveKey('/aboutUs')}
                >About Us
                </Link>
                <div className={'bottom-mark'} />
              </div>
            </div>
          </div>

          <div className={'page-content'}>
            {/* 重定向默认页面到home页面 */}
            <Redirect from={'/'} to={'/home'} />
            <Route path={'/home'}  exact component={Home} />
          </div>
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
    & > div {
      min-width: 120px;
      max-width: 120px;
      background: lightgreen;
      text-align: center;
      margin-right: 10px;
    }
  }
  .router-common > .router-unit-active > a, .router-common > .router-unit > a {
    // color: #203d50
    color: #4b6e84;
    font-size: 24px;
    font-weight: 500;
  }
`

export default App;
