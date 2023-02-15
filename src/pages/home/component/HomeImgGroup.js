import React from 'react'
import styled from "styled-components";

const HomeImgGroup = () => {
  return (
    <Wrapper>
      <div className={'img-group'}>
        <div className={'one'}><img src={require('../../assets/media/1.jpg')} alt={''}/></div>
        <div className={'two'}><img src={require('../../assets/media/2.jpg')} alt={''}/></div>
        <div className={'three'}><img src={require('../../assets/media/3.jpg')} alt={''}/></div>
        <div className={'four'}><img src={require('../../assets/media/4.jpg')} alt={''}/></div>
        <div className={'five'}><img src={require('../../assets/media/5.jpg')} alt={''}/></div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  .img-group {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
    margin-top: 20px;
    .one, .two, .three, .four, .five {
      border: 1px solid lightgray;
      border-radius: 6px;
      box-sizing: border-box;
      display: flex;
      align-self: center;
      overflow: hidden;
      cursor: pointer;
    }
    & > div > img {
      width: 100%;
      transform: scale(1);
      transition-duration: 0.2s, 0.2s;
      transition-delay: 0s, 0s;
      transition-timing-function: ease-in-out, ease-in-out;
    }
    & > div > img:hover {
      transform: scale(1.1);
    }
    .one {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 3;
    }
    .two {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 2;
    }
    .three {
      grid-column-start: 4;
      grid-column-end: 5;
      grid-row-start: 1;
      grid-row-end: 2;
    }
    .four {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 2;
      grid-row-end: 3;
    }
    .five {
      grid-column-start: 4;
      grid-column-end: 5;
      grid-row-start: 2;
      grid-row-end: 3;
    }
  }
`

export default HomeImgGroup
