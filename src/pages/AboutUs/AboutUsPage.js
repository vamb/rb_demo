import React from 'react'
import styled from "styled-components";
import AboutUsConstant from "./AboutUsConstant";
import ark_warrior from "../assets/arkSVGs/ark_warrior.svg";

const AboutUsPage = () => {
  return (
    <Wrapper>
      <div className={'header-content'}>
        <div className={'info-content'}>
          <div className={'info-title'}>
            {AboutUsConstant.HEADER_CONTEXT.INFO_DATA.title}&nbsp;
            <img src={ark_warrior} alt={''} />
          </div>
          <div className={'info-sub-title'}>
            <div>{AboutUsConstant.HEADER_CONTEXT.INFO_DATA.subTitle1}</div>
            <div>{AboutUsConstant.HEADER_CONTEXT.INFO_DATA.subTitle2}</div>
          </div>
          <div className={'info-desc'}>{AboutUsConstant.HEADER_CONTEXT.INFO_DATA.detail}</div>
        </div>
        <div className={'img-content'}>
          <img src={require('../assets/arkAgent/warriorChen.png')} alt={''} />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  .header-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // background: lightyellow;
    .info-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 160px;
      .info-title {
        font-size: 48px;
        font-weight: 700;
        display: flex;
        flex-direction: row;
        align-items: center;
        & > img {
          border: 2px solid #000;
          margin-top: 7px;
          padding: 3px;
        }
      }
      .info-sub-title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 14px;
        font-weight: 700;
        margin: 10px 0;
      }
      .info-desc {
        font-size: 12px;
        font-weight: 500;
      }
    }
    .img-content {
      & > img {
        height: 700px
      }
    }
  }
`

export default AboutUsPage
