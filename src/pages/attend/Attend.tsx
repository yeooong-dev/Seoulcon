import styled from "styled-components";
import { Wrapper } from "../main/StMain";
import Navibar from "../../components/navigation/Navibar";
import Footer from "../../components/footer/Footer";
import FestivalImg4 from "../../assets/images/program/img-festival4.jpg";
import buttonArrow from "../../assets/images/main/button-arrow-white.svg";

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
`;

const Title = styled.h1`
  font-size: 48px;
  margin-top: 120px;
  z-index: 9;
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
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      b {
        display: inline-block;
        color: rgba(191, 255, 106, 1);
        font-size: 30px;
        margin-bottom: 30px;
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
