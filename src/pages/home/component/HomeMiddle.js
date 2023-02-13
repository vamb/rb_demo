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

          <div className={'middle-info-card'}>
            <div className={'info-card-title'}>{HomeConstant.MIDDLE_INFO_CATD.CARD3.title}</div>
            <div className={'info-card-sub-title'}>{HomeConstant.MIDDLE_INFO_CATD.CARD3.subTitle}</div>
            <div className={'info-card-detail'}>{HomeConstant.MIDDLE_INFO_CATD.CARD3.detail}</div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`

`

export default HomeMiddle
