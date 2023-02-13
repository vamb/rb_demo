import React from 'antd'
import styled from "styled-components";
import ark_caster from '../arkSVGs/ark_caster.svg'

const HomePage = () => {
  return (
    <Wrapper>
      <div className={'header-content'}>
        <div className={'info-content'}>
          <div className={'info-title'}>阿米娅&nbsp;<img src={ark_caster} alt={''} /></div>
          <div className={'info-sub-title'}>
            <div>AMIYA</div>
            <div>CV:黑泽明世</div>
          </div>
          <div className={'info-desc'}>罗德岛的公开领袖，在内部拥有最高执行权。虽然，从外表上看起来仅仅是个不成熟的少女，实际上，她却是深受大家信任的合格的领袖。现在，阿米娅正带领着罗德岛，为了感染者的未来，为了让这片大地挣脱矿石病的阴霾而不懈努力。</div>
        </div>
        <div className={'img-content'}>
          <img src={require('../arkAgent/casterAMiYa.png')} />
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

export default HomePage
