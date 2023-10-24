import styled from "styled-components";
import { Wrapper } from "../../main/StMain";
import Navibar from "../../../components/navigation/Navibar";
import Footer from "../../../components/footer/Footer";
import Triangle from "../../../assets/images/main/img-triangle.svg";
import FestivalImg1 from "../../../assets/images/program/img-festival1.jpg";
import FestivalImg2 from "../../../assets/images/program/img-festival2.jpg";
import FestivalImg3 from "../../../assets/images/program/img-festival3.jpg";
import FestivalImg4 from "../../../assets/images/program/img-festival4.jpg";
import FestivalImg5 from "../../../assets/images/program/img-festival5.jpg";
import buttonArrow from "../../../assets/images/main/button-arrow-white.svg";
import buttonArrowBlack from "../../../assets/images/main/button-arrow-black.svg";
import { Link } from "react-router-dom";

const Festival = () => {
  return (
    <Wrapper>
      <Navibar />
      <FestivalWrap>
        <PaddingWrap>
          <img src={Triangle} alt='도형' className='Triangle' />
          <Title>페스티벌</Title>
          <Divider />
          <Contents>
            <div className='box'>
              <img
                src={FestivalImg1}
                alt='T1 CON 팬 페스티벌'
                className='conImg'
              />

              <div className='center'>
                <b>T1 CON</b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 30.(토) 10:00 ~ 18:00</span>
                </div>
                <div>
                  <span className='date'>장소</span>
                  <span>DDP 아트홀 1관</span>
                </div>
                <Link to='/festivalPage'>
                  <button>
                    바로가기 <img src={buttonArrow} alt='detail' />
                  </button>
                </Link>
              </div>
            </div>

            <div className='box'>
              <img
                src={FestivalImg2}
                alt='크리에이티브포스 어워즈'
                className='conImg'
              />
              <div className='center'>
                <b>크리에이티브포스 어워즈</b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 31.(일) 14:00 ~ 17:00</span>
                </div>
                <div>
                  <span className='date'>장소</span>
                  <span>DDP 컨퍼런스홀</span>
                </div>
                <Link to='/festivalPage2'>
                  <button>
                    바로가기
                    <img src={buttonArrow} alt='detail' />
                  </button>
                </Link>
              </div>
            </div>

            <div className='box'>
              <img
                src={FestivalImg3}
                alt='apan star & 서울콘어워즈'
                className='conImg'
              />
              <div className='center'>
                <b>
                  APAN STAR 어워즈 <br /> & SEOULCON 어워즈
                </b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 30.(토) 19:00 ~ 21:00</span>
                </div>

                <div>
                  <span className='date'>장소</span>
                  <span>DDP 아트홀 2관</span>
                </div>
                <Link to='/festivalPage3'>
                  <button>
                    바로가기 <img src={buttonArrow} alt='detail' />
                  </button>
                </Link>
              </div>
            </div>

            <div className='box'>
              <img src={FestivalImg4} alt='오징어게임' className='conImg' />
              <div className='center'>
                <b>
                  피지컬 100 vs 글로벌 인플루언서
                  <br />
                  [오징어 게임]
                </b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 31.(일) 10:00 ~ 18:00</span>
                </div>

                <div>
                  <span className='date'>장소</span>
                  <span>DDP 아트홀 2관</span>
                </div>
                <Link to='/festivalPage4'>
                  <button>
                    바로가기
                    <img src={buttonArrow} alt='detail' />
                  </button>
                </Link>
              </div>
            </div>

            <div className='box'>
              <img
                src={FestivalImg5}
                alt='셀럽 프라이빗 EDM 파티'
                className='conImg'
              />
              <div className='center'>
                <b>
                  서울콘 프라이빗 파티
                  <br />
                  [EDM 등]
                </b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 30.(토) ~ 12. 31.(일)</span>
                </div>

                <div>
                  <span className='date'>장소</span>
                  <span>DDP 디자인랩 3층 디자인홀, 4층 잔디사랑방</span>
                </div>
                <Link to='/festivalPage5'>
                  <button>
                    바로가기 <img src={buttonArrow} alt='detail' />
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

export default Festival;

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
  padding-bottom:100px;

  .Triangle {
    position: absolute;
    top: -100px;
    left: 60px;
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding-bottom: 50px;
    
    .Triangle {
      display: none;
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
  position: relative;

  @media (max-width: 420px) {
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
    height: auto;
    min-height: 400px;
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
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s, filter 0.3s;
      will-change: transform, filter;
      filter: brightness(0.3);
    }

    &:hover .conImg {
      filter: none;
      transform: scale(1.1);
      transition: 0.5s;
    }

    .center {
      position: absolute;
      width: 90%;
      z-index: 2;

      b {
        display: inline-block;
        color: rgba(191, 255, 106, 1);
        font-size: 30px;
        margin-bottom: 30px;
        line-height: 43px;
      }

      div {
        font-size: 18px;

        .date {
          margin-right: 10px;
          width: 50px;
          height: 26px;
          border-radius: 50px;
          border: 1px solid #bfff6a;
          // border: 1px solid transparent;
          // border-image-source: linear-gradient(
          //   180deg,
          //   #bfff6a 0%,
          //   rgba(255, 255, 255, 0) 100%
          // );
          // border-image-slice: 1;
          // border-image-repeat: stretch;
          position: relative;
          background-clip: padding-box;
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
      pointer-events: none;

      button {
        pointer-events: auto;
      }
    }
  }

  @media (max-width: 420px) {
    .box {
      height: 300px;
      min-height: 0px;
      position: relative;

      .conImg {
        height: 300px;
        width: auto;
        object-fit: cover;
        display: block;
      }

      .center {
        div {
          width: 80%;
          margin: 10px auto;
        }

        b {
          font-size: 18px;
          margin-bottom: 10px;
          line-height: 28px;
        }

        button {
          margin-top: 10px;
        }

        div {
          span {
            font-size: 16px;
          }
        }
      }
    }
  }
`;
