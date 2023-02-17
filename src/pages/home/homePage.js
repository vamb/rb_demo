import React from 'antd'
import styled from "styled-components";
import ark_caster from '../assets/arkSVGs/ark_caster.svg'
import HomeMiddle from "./component/HomeMiddle";
import HomeConstant from "./HomeConstant";
import HomeMiddle2 from "./component/HomeMiddle2";
import HomeImgGroup from "./component/HomeImgGroup";

const HomePage = () => {
  return (
    <Wrapper>
      <div className={'home-header-content'}>
        <div className={'info-content'}>
          <div className={'info-title'}>
            {HomeConstant.HEADER_CONTEXT.INFO_DATA.title}&nbsp;
            <img src={ark_caster} alt={''} />
          </div>
          <div className={'info-sub-title'}>
            <div>{HomeConstant.HEADER_CONTEXT.INFO_DATA.subTitle1}</div>
            <div>{HomeConstant.HEADER_CONTEXT.INFO_DATA.subTitle2}</div>
          </div>
          <div className={'info-desc'}>{HomeConstant.HEADER_CONTEXT.INFO_DATA.detail}</div>
        </div>
        <div className={'img-content'}>
          <img src={require('../assets/arkAgent/casterAMiYa.png')} alt={''} />
        </div>
      </div>
      <HomeMiddle2 />
      <HomeMiddle />
      <HomeImgGroup />
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  .home-header-content {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .info-content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 20%;
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
      flex-grow: 1;
      display: flex;
      place-content: center;
      & > img {
        height: 700px
      }
    }
  }
`

export default HomePage
