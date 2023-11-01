import styled from "styled-components";
import { Wrapper } from "../../main/StMain";
import Navibar from "../../../components/navigation/Navibar";
import Footer from "../../../components/footer/Footer";
import Triangle from "../../../assets/images/program/img-triangle.svg";
import contents1 from "../../../assets/images/program/img-contents1.jpg";
import contents2 from "../../../assets/images/program/img-contents2.jpg";
import contents3 from "../../../assets/images/program/img-contents3.jpg";
import contents4 from "../../../assets/images/program/img-contents4.jpg";
import contents5 from "../../../assets/images/program/img-contents5.jpg";
import contents6 from "../../../assets/images/program/img-contents6.jpg";
import buttonArrow from "../../../assets/images/main/button-arrow-white.svg";
import buttonArrowBlack from "../../../assets/images/main/button-arrow-black.svg";
import { Link } from "react-router-dom";

const Contents = () => {
  return (
    <Wrapper>
      <Navibar />
      <FestivalWrap>
        <PaddingWrap>
          <img src={Triangle} alt='도형' className='Triangle' />
          <Title>콘텐츠, 패션, 뷰티</Title>
          <Divider />
          <ContentsBox>
            <div className='box'>
              <img
                src={contents1}
                alt='스트릿 패션&스니커즈 전시'
                className='conImg'
              />
              <div className='center'>
                <b>스트릿 패션 & 스니커즈 전시</b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 30.(토) ~ 12. 31.(일) 10:00 ~ 18:00</span>
                </div>
                <div>
                  <span className='date'>장소</span>
                  <span>DDP 디자인랩 1층 D숲</span>
                </div>
                <Link to='/contentsPage'>
                  <button>
                    바로가기 <img src={buttonArrow} alt='detail' />
                  </button>
                </Link>
              </div>
            </div>

            <div className='box'>
              <img
                src={contents1}
                alt='아티스트 콜라보 전시'
                className='conImg'
              />
              <div className='center'>
                <b>아티스트 콜라보 전시</b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 30.(토) ~ 12. 31.(일)</span>
                </div>
                <div>
                  <span className='date'>장소</span>
                  <span>DDP 어울림광장</span>
                </div>
                <Link to='/contentsPage2'>
                  <button>
                    바로가기 <img src={buttonArrow} alt='detail' />
                  </button>
                </Link>
              </div>
            </div>

            <div className='box'>
              <img
                src={contents2}
                alt='쇼플루언서 라이브 세일즈쇼'
                className='conImg'
              />
              <div className='center'>
                <b>쇼플루언서 라이브 세일즈쇼</b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 30.(토) ~ 12. 31.(일) 10:00 ~ 18:00</span>
                </div>
                <div>
                  <span className='date'>장소</span>
                  <span>DDP 디자인랩 2층 회의실</span>
                </div>
                <Link to='/contentsPage3'>
                  <button>
                    바로가기
                    <img src={buttonArrow} alt='detail' />
                  </button>
                </Link>
              </div>
            </div>

            <div className='box'>
              <img
                src={contents3}
                alt='뷰티 ‧ 패션 체험 공간'
                className='conImg'
              />
              <div className='center'>
                <b>뷰티 ‧ 패션 체험 공간</b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 30.(토) 10:00 ~ 18:00</span>
                </div>

                <div>
                  <span className='date'>장소</span>
                  <span>DDP 디자인랩 2층 멤버십라이브러리</span>
                </div>
                <Link to='/contentsPage4'>
                  <button>
                    바로가기 <img src={buttonArrow} alt='detail' />
                  </button>
                </Link>
              </div>
            </div>

            <div className='box'>
              <img src={contents4} alt='생활맥주 쇼륨' className='conImg' />
              <div className='center'>
                <b>생활맥주 쇼륨</b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 30.(토) ~ 12. 31.(일) 10:00 ~ 18:00</span>
                </div>

                <div>
                  <span className='date'>장소</span>
                  <span>DDP 아트홀 고객지원실</span>
                </div>
                <Link to='/contentsPage5'>
                  <button>
                    바로가기
                    <img src={buttonArrow} alt='detail' />
                  </button>
                </Link>
              </div>
            </div>

            <div className='box'>
              <img
                src={contents5}
                alt='포토부스(인생네컷)'
                className='conImg'
              />
              <div className='center'>
                <b>포토부스(인생네컷)</b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 30.(토) ~ 12. 31.(일) 10:00 ~ 18:00</span>
                </div>

                <div>
                  <span className='date'>장소</span>
                  <span>DDP 디자인랩 데크라운지</span>
                </div>
                <Link to='/contentsPage6'>
                  <button>
                    바로가기 <img src={buttonArrow} alt='detail' />
                  </button>
                </Link>
              </div>
            </div>
          </ContentsBox>
        </PaddingWrap>
      </FestivalWrap>
      <Footer />
    </Wrapper>
  );
};

export default Contents;

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
  }

  @media (max-width: 768px) {
    padding-bottom: 50px;

    .Triangle {
      display: none;
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

const ContentsBox = styled.div`
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
        margin: 3px auto;

        .date {
          margin-right: 10px;
          font-weight: bold;
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
