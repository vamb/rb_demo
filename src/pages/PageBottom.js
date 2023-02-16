import React from 'react'
import styled from "styled-components";

const PageBottom = () => {

  return (
    <Wrapper>
      <div className={'page-bottom'}>
        <div className={'page-bottom-one'}>
          <div className={'bottom-details'}>
            <span className={'item'}>隐私协议</span>
            <span className={'item'}>应用权限</span>
            <span className={'item'}>用户注册协议</span>
            <span className={'item'}>游戏使用许可及服务协议</span>
            <span className={'item'}>家长监护</span>
            <span>联系我们</span>
          </div>
          <div className={'bottom-details-two'}>
            <div className={'item'}>沪ICP备17022476号-1</div>
            <div className={'item'}>沪网文〔2018〕0803-067号</div>
            <div className={'item'}>ISBN 978-7-498-05646-7</div>
            <div className={'item'}> 国新出审〔2019〕49号 </div>
            <div className={'item'}> 沪公网安备 31010402005145号 </div>
          </div>
          <div className={'bottom-info-msg'}>
            亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听。
          </div>
        </div>
        <div className={'page-bottom-two'}>

        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  .page-bottom {
    background: #141516;
    margin-bottom: 50px;
    padding: 1rem 0;
    border-top: 1px solid #535353;
    color: #fff;
    .page-bottom-one {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      .bottom-details {
        display: inline-block;
        & > span {
          text-align: center;
          font-size: 12px;
          cursor: pointer;
        }
        & > span:hover {
          text-decoration: underline;
          text-decoration-color: #fff;
        }
        .item:after {
          content: '|';
          display: inline-block;
          margin: 0 15px;
        }
      }
      .bottom-details-two {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        font-size: 12px;
        transform: scale(0.9);
        margin: 5px 0;
        & > div {
          margin: 0 20px;
          text-align: center;
          cursor: pointer;
        }
        & > div:hover {
          text-decoration: underline;
          text-decoration-color: #fff !important;
        }
      }
      .bottom-info-msg {
        font-size: 12px;
        transform: scale(0.9);
        cursor: pointer
        text-align: center;
        &:hover {
          text-decoration: underline;
          text-decoration-color: #fff !important;
        }
      }
    }
  }
`

export default PageBottom
