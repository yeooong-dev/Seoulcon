import styled from "styled-components";
import { Wrapper } from "../../main/StMain";
import Navibar from "../../../components/navigation/Navibar";
import Footer from "../../../components/footer/Footer";
import Triangle from "../../../assets/images/program/img-triangle.svg";
import performance1 from "../../../assets/images/program/img-performance1.jpg";
import performance2 from "../../../assets/images/program/img-performance2.jpg";
import performance3 from "../../../assets/images/program/img-conference1.jpg";
import buttonArrow from "../../../assets/images/main/button-arrow-white.svg";
import buttonArrowBlack from "../../../assets/images/main/button-arrow-black.svg";
import borderImg from "../../../assets/images/program/border.svg";
import borderImg2 from "../../../assets/images/program/border2.svg";
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
                  <img src={borderImg} alt='일정' />
                  <span>23. 12. 31.(일) 19:00 ~ 23. 1. 1.(월) 03:00 </span>
                </div>
                <div>
                  <img src={borderImg2} alt='장소' />
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
                  <img src={borderImg} alt='일정' />
                  <span>23. 12. 30.(토) 10:00 ~ 18:00</span>
                </div>
                <div>
                  <img src={borderImg2} alt='장소' />
                  <span>DDP 미래로 상부</span>
                </div>
                <Link to='/performancePage2'>
                  <button>
                    바로가기
                    <img src={buttonArrow} alt='detail' />
                  </button>
                </Link>
              </div>
            </div>

            <div className='box'>
              <img
                src={performance3}
                alt='크리에이터 팬미팅'
                className='conImg'
              />
              <div className='center'>
                <b>크리에이터 팬미팅</b>
                <div>
                  <img src={borderImg} alt='일정' />
                  <span>23. 12. 30.(토) 10:00 ~ 18:00</span>
                </div>
                <div>
                  <img src={borderImg2} alt='장소' />
                  <span>DDP 디자인랩 2층 북세미나실</span>
                </div>
                <Link to='/performancePage3'>
                  <button>
                    바로가기 <img src={buttonArrow} alt='detail' />
                  </button>
                </Link>
              </div>
            </div>

            <div className='box'>
              <img
                src={performance3}
                alt='크리에이터 팬미팅'
                className='conImg'
              />
              <div className='center'>
                <b>K-POP 댄스 어플 체험</b>
                <div>
                  <img src={borderImg} alt='일정' />
                  <span>23. 12. 31.(일) 10:00 ~ 18:00</span>
                </div>
                <div>
                  <img src={borderImg2} alt='장소' />
                  <span>DDP 디자인랩 2층 서울온</span>
                </div>
                <Link to='/performancePage4'>
                  <button>
                    바로가기 <img src={buttonArrow} alt='detail' />
                  </button>
                </Link>
              </div>
            </div>

            <div className='box'>
              <img
                src={performance3}
                alt='크리에이터 팬미팅'
                className='conImg'
              />
              <div className='center'>
                <b>K-POP XR 콘텐츠 체험</b>
                <div>
                  <img src={borderImg} alt='일정' />
                  <span>23. 12. 30.(토) ~ 12. 31.(일) 10:00 ~ 18:00</span>
                </div>
                <div>
                  <img src={borderImg2} alt='장소' />
                  <span>DDP 디자인랩 1층 미디어아트갤러리</span>
                </div>
                <Link to='/performancePage5'>
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

export default Performance;

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

  @media (max-width: 768px) {
    padding-bottom: 50px;

    .Triangle {
      display: none;
    }
  }
`;

const PaddingWrap = styled.div`
  width: 80%;
  max-width: 1544px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  margin-top: 120px;
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
    height: 360px;
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
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
        gap: 8px;
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

  @media (max-width: 900px) {
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

  @media (max-width: 700px) {
    .box {
      margin-top: -10px;
      margin-bottom: -10px;
    }
  }

  @media (max-width: 670px) {
    .box {
      margin-top: -20px;
    }
  }

  @media (max-width: 610px) {
    .box {
      height: 300px;
      min-height: 0px;
      position: relative;
      margin-top: 0px;
      margin-bottom: 20px;

      .conImg {
        height: 300px;
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

  @media (max-width: 480px) {
    .box {
      margin-top: 0px;
    }
  }
`;
