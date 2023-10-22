import styled from "styled-components";
import { Wrapper } from "../main/StMain";
import Navibar from "../../components/navigation/Navibar";
import Footer from "../../components/footer/Footer";
import FestivalImg4 from "../../assets/images/program/img-festival4.jpg";
import buttonArrow from "../../assets/images/main/button-arrow-white.svg";
import buttonArrowBlack from "../../assets/images/main/button-arrow-black.svg";

const Attend = () => {
  return (
    <Wrapper>
      <Navibar />
      <FestivalWrap>
        <PaddingWrap>
          <Title>신청하기</Title>
          <Divider />
          <Contents>
            <div className='box'>
              <img src={FestivalImg4} alt='페스티벌' className='conImg' />
              <div className='center'>
                <b>페스티벌</b>
                <button>
                  신청하기 <img src={buttonArrow} alt='detail' />
                </button>
              </div>
            </div>

            <div className='box'>
              <img src={FestivalImg4} alt='컨퍼런스' className='conImg' />
              <div className='center'>
                <b>컨퍼런스</b>
                <button>
                  바로가기
                  <img src={buttonArrow} alt='detail' />
                </button>
              </div>
            </div>

            <div className='box'>
              <img
                src={FestivalImg4}
                alt='콘텐츠&패션&뷰티'
                className='conImg'
              />
              <div className='center'>
                <b>콘텐츠&패션&뷰티</b>
                <button>
                  바로가기 <img src={buttonArrow} alt='detail' />
                </button>
              </div>
            </div>

            <div className='box'>
              <img
                src={FestivalImg4}
                alt='공연&엔터테인먼트'
                className='conImg'
              />
              <div className='center'>
                <b>공연&엔터테인먼트</b>
                <button>
                  바로가기
                  <img src={buttonArrow} alt='detail' />
                </button>
              </div>
            </div>
          </Contents>
        </PaddingWrap>
      </FestivalWrap>
      <Footer />
    </Wrapper>
  );
};

export default Attend;

const FestivalWrap = styled.div`
  width: 100%;
  height: auto;
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

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  margin-top: 120px;
  z-index: 9;

  @media (max-width: 375px) {
    font-size: 26px;
  }
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

    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      pointer-events: none;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(47, 83, 0, 0.5) 100%
      );
      transition: 0.3s;
      opacity: 0;
      z-index: 1;
    }

    &:hover::after {
      opacity: 1;
    }

    .conImg {
      width: 100%;
      height: auto;
      transition: transform 0.5s, filter 0.3s;
      will-change: transform, filter;
      filter: brightness(0.3);
    }

    img {
      width: 100%;
    }

    &:hover .conImg {
      filter: none;
      transform: scale(1.1);
      transition: 0.5s;
    }

    .center {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      z-index: 2;

      b {
        display: inline-block;
        color: rgba(191, 255, 106, 1);
        font-size: 30px;
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

    button:hover {
      background: white;
      color: black;
      transition: 0.2s;
    }

    button:hover img {
      content: url(${buttonArrowBlack});
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;

    .box {
      width: 100%;
    }
  }
`;
