import styled from "styled-components";
import { Wrapper } from "../../main/StMain";
import Navibar from "../../../components/navigation/Navibar";
import Footer from "../../../components/footer/Footer";
import Triangle from "../../../assets/images/program/img-triangle.svg";
import Conference1 from "../../../assets/images/program/img-conference1.jpg";
import Conference2 from "../../../assets/images/program/img-conference2.jpg";
import Conference3 from "../../../assets/images/program/img-conference3.jpg";
import buttonArrow from "../../../assets/images/main/button-arrow-white.svg";
import buttonArrowBlack from "../../../assets/images/main/button-arrow-black.svg";
import { Link } from "react-router-dom";

const Conference = () => {
  return (
    <Wrapper>
      <Navibar />
      <FestivalWrap>
        <PaddingWrap>
          <img src={Triangle} alt='도형' className='Triangle' />
          <Title>컨퍼런스</Title>
          <Divider />
          <Contents>
            <div className='box'>
              <img
                src={Conference1}
                alt='인플루언서 팬미팅'
                className='conImg'
              />
              <div className='center'>
                <b>인플루언서 팬미팅</b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 30.(토) 10:00 ~ 18:00</span>
                </div>
                <div>
                  <span className='date'>장소</span>
                  <span>DDP 디자인랩 2층 북세미나실</span>
                </div>
                <Link to='/conferencePage'>
                  <button>
                    바로가기 <img src={buttonArrow} alt='detail' />
                  </button>
                </Link>
              </div>
            </div>

            <div className='box'>
              <img src={Conference1} alt='한류 포럼' className='conImg' />
              <div className='center'>
                <b>한류 포럼</b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 30.(토) 13:00 ~ 17:00</span>
                </div>
                <div>
                  <span className='date'>장소</span>
                  <span>DDP 컨퍼런스홀</span>
                </div>
                <Link to='/conferencePage2'>
                  <button>
                    바로가기 <img src={buttonArrow} alt='detail' />
                  </button>
                </Link>
              </div>
            </div>

            <div className='box'>
              <img
                src={Conference2}
                alt='숏폼 콘텐츠 공모전'
                className='conImg'
              />
              <div className='center'>
                <b>숏폼 콘텐츠 공모전</b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 30.(토) 10:00 ~ 18:00</span>
                </div>
                <div>
                  <span className='date'>장소</span>
                  <span>DDP 디자인랩 2층 서울온</span>
                </div>
                <Link to='/conferencePage3'>
                  <button>
                    바로가기
                    <img src={buttonArrow} alt='detail' />
                  </button>
                </Link>
              </div>
            </div>

            <div className='box'>
              <img
                src={Conference3}
                alt='크리에이터
                글로벌 진출 솔루션 세미나'
                className='conImg'
              />
              <div className='center'>
                <b>크리에이터 글로벌 진출 솔루션 세미나</b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 31.(일) 14:00 ~ 18:00</span>
                </div>

                <div>
                  <span className='date'>장소</span>
                  <span>DDP 디자인랩 3층 디자인홀</span>
                </div>
                <Link to='/conferencePage4'>
                  <button>
                    바로가기 <img src={buttonArrow} alt='detail' />
                  </button>
                </Link>
              </div>
            </div>

            <div className='box'>
              <img src={Conference3} alt='서울테크밋업' className='conImg' />
              <div className='center'>
                <b>서울테크밋업</b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 30.(토) 11:00 ~ 14:00</span>
                </div>

                <div>
                  <span className='date'>장소</span>
                  <span>DDP 디자인랩 3층 디자인홀</span>
                </div>
                <Link to='/conferencePage5'>
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

export default Conference;

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
  padding-bottom: 100px;

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
      transition: transform 0.5s, filter 0.3s;
      will-change: transform, filter;
      filter: brightness(0.3);
      object-fit: cover;
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
      width: 90%;
      z-index: 2;

      b {
        display: inline-block;
        color: rgba(191, 255, 106, 1);
        font-size: 30px;
        margin-bottom: 30px;
        font-weight: bold;
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
        height: 100%;
        width: auto;
        object-fit: cover;
        display: block;
      }

      .center {
        div {
          width: 90%;
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
