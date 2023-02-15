import React from 'react'
import styled from "styled-components";
import HomeConstant from "../HomeConstant";

const HomeMiddle = () => {
  return (
    <Wrapper>
      <div className={'middle-content'}>
        <div className={'middle-info-card'}>
          <div className={'info-card-title'}>{HomeConstant.MIDDLE_INFO_CATD.CARD1.title}</div>
          <div className={'info-card-sub-title'}>{HomeConstant.MIDDLE_INFO_CATD.CARD1.subTitle}</div>
          <div className={'info-card-detail'}>{HomeConstant.MIDDLE_INFO_CATD.CARD1.detail}</div>
        </div>
        <div className={'middle-info-card'}>
          <div className={'info-card-title'}>{HomeConstant.MIDDLE_INFO_CATD.CARD2.title}</div>
          <div className={'info-card-sub-title'}>{HomeConstant.MIDDLE_INFO_CATD.CARD2.subTitle}</div>
          <div className={'info-card-detail'}>{HomeConstant.MIDDLE_INFO_CATD.CARD2.detail}</div>
        </div>
        <div className={'middle-info-card'}>
          <div className={'info-card-title'}>{HomeConstant.MIDDLE_INFO_CATD.CARD3.title}</div>
          <div className={'info-card-sub-title'}>{HomeConstant.MIDDLE_INFO_CATD.CARD3.subTitle}</div>
          <div className={'info-card-detail'}>{HomeConstant.MIDDLE_INFO_CATD.CARD3.detail}</div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  margin-top: 20px;
  .middle-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px 10px;
    .middle-info-card {
      border: 2px solid lightgray;
      border-radius: 6px;
      padding: 10px 5px;
      .info-card-title {
        font-size: 24px;
        font-weight: 700;
      }
      .info-card-sub-title {
        font-weight: 700;
        font-size: 18px;
        border-bottom: 1px dashed #000;
      }
      .info-card-detail {
        font-size: 14px;
        margin-top: 5px;
      }
    }
  }
`

export default HomeMiddle
