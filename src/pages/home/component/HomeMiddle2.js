import React from 'react'
import styled from "styled-components";

const HomeMiddle2 = () => {
  return (
    <Wrapper>
      <div className={'home-middle'}>
        <div className={'logo-unit'} >
          <img src={require('../../assets/logos/0.jpg')} alt={''} />
        </div>
        <div className={'logo-unit'} >
          <img src={require('../../assets/logos/1.jpg')} alt={''} />
        </div>
        <div className={'logo-unit'} >
          <img src={require('../../assets/logos/2.jpg')} alt={''} />
        </div>
        <div className={'logo-unit'} >
          <img src={require('../../assets/logos/3.jpg')} alt={''} />
        </div>
        <div className={'logo-unit'} >
          <img src={require('../../assets/logos/4.jpg')} alt={''} />
        </div>
        <div className={'logo-unit'} >
          <img src={require('../../assets/logos/5.jpg')} alt={''} />
        </div>
        <div className={'logo-unit'} >
          <img src={require('../../assets/logos/6.jpg')} alt={''} />
        </div>
        <div className={'logo-unit'} >
          <img src={require('../../assets/logos/7.jpg')} alt={''} />
        </div>
        <div className={'logo-unit'} >
          <img src={require('../../assets/logos/8.jpg')} alt={''} />
        </div>
        <div className={'logo-unit'} >
          <img src={require('../../assets/logos/9.jpg')} alt={''} />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  @keyframes unitHover {
    0% { filter: grayscale(1); transform: scale(1); }
    100% { filter: grayscale(0); transform: scale(1.1); }
  }
  @keyframes unitImHover {
    0% { filter: grayscale(0); transform: scale(1.1); }
    100% { filter: grayscale(1); transform: scale(1); }
  }
  .home-middle {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: 100%;
    grid-gap: 10px;
    margin-top: 20px;
    .logo-unit {
      width: 100%;
      overflow: hidden;
      border-radius: 6px;
      & > img {
        width: 100%;
        cursor: pointer;
        animation: unitImHover 0.1s steps(100) 0s 1 normal forwards running;
      }
      & > img:hover {
        animation: unitHover 0.1s steps(100) 0s 1 normal forwards running;
      }
    }
  }
`

export default HomeMiddle2
