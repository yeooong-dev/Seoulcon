import styled from "styled-components";
import { Wrapper } from "../../main/StMain";
import Navibar from "../../../components/navigation/Navibar";
import Footer from "../../../components/footer/Footer";
import Triangle from "../../../assets/images/program/img-triangle.svg";
import performance1 from "../../../assets/images/program/img-performance1.jpg";
import performance2 from "../../../assets/images/program/img-performance2.jpg";
import buttonArrow from "../../../assets/images/main/button-arrow-white.svg";
import { Link } from "react-router-dom";

const Performance = () => {
  return (
    <Wrapper>
      <Navibar />
      <FestivalWrap>
        <PaddingWrap>
          <img src={Triangle} alt='도형' className='Triangle' />
          <Title>공연&엔터테인먼트</Title>
          <Divider />
          <Contents>
            <div className='box'>
              <img
                src={performance1}
                alt='K-POP 공연 & 카운트다운'
                className='conImg'
              />
              <div className='center'>
                <b>K-POP 공연 & 카운트다운</b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 31.(일) 19:00 ~ 23. 1. 1.(월) 01:00</span>
                </div>
                <div>
                  <span className='date'>장소</span>
                  <span>DDP 아트홀 1관</span>
                </div>
                <Link to='/performancePage'>
                  <button>
                    바로가기 <img src={buttonArrow} alt='detail' />
                  </button>
                </Link>
              </div>
            </div>

            <div className='box'>
              <img
                src={performance2}
                alt=' K-POP 랜덤플레이댄스'
                className='conImg'
              />
              <div className='center'>
                <b> K-POP 랜덤플레이댄스</b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 30.(토) ~ 12. 31.(일)</span>
                </div>
                <div>
                  <span className='date'>장소</span>
                  <span>DDP 어울림광장</span>
                </div>
                <Link to='/performancePage2'>
                  <button>
                    바로가기
                    <img src={buttonArrow} alt='detail' />
                  </button>
                </Link>
              </div>
            </div>
          </Contents>
        </PaddingWrap>
      </FestivalWrap>
      <Footer />
    </Wrapper>
  );
};

export default Performance;

const FestivalWrap = styled.div`
  width: 100%;
  height: 1200px;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  position: relative;

  .Triangle {
    position: absolute;
    top: -100px;
    left: 60px;
  }
`;

const PaddingWrap = styled.div`
  width: 80%;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-top: -150px;
`;

const Divider = styled.hr`
  width: 100%;
  background: rgba(58, 58, 58, 1);
  opacity: 0.3;
  margin-bottom: 30px;
`;

const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 100px;

  .box {
    width: 49.5%;
    margin-bottom: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
    }

    .conImg {
      filter: brightness(0.3);
    }

    .center {
      position: absolute;

      b {
        display: inline-block;
        color: rgba(191, 255, 106, 1);
        font-size: 30px;
        margin-bottom: 30px;
      }

      div {
        font-size: 18px;

        .date {
          margin-right: 10px;
          width: 50px;
          height: 26px;
          border: 1px solid rgba(191, 255, 106, 1);
          padding: 0.05rem 0.2rem;
          border-radius: 50px;
          display: inline-block;
          margin-bottom: 8px;
          line-height: 26px;
          font-size: 16px;
        }
      }
    }

    button {
      width: 220px;
      height: 52px;
      border-radius: 50px;
      background: none;
      color: white;
      border: 1px solid white;
      font-size: 16px;
      cursor: pointer;
      margin-top: 35px;

      img {
        width: 12px;
        height: 12px;
        margin-left: 5px;
      }
    }
  }
`;
