import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Home from './pages/home'
import styled from "styled-components";
import './App.css';

function App() {
  const [ activeKey, setActiveKey ] = useState('/home')
  return (
    <Wrapper>
      <Router>
        <Link
          to={'/home'}
          onClick={()=>setActiveKey('/home')}
        >
          Home
        </Link>
        <Route path={'/home'}  exact component={Home} />
      </Router>
    </Wrapper>
  );
}

const Wrapper = styled('div')`

`

export default App;
