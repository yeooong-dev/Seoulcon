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
                src={contents2}
                alt='24년 콘텐츠 제작 발표회'
                className='conImg'
              />
              <div className='center'>
                <b>24년 콘텐츠 제작 발표회</b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 30.(토) ~ 12. 31.(일)</span>
                </div>
                <div>
                  <span className='date'>장소</span>
                  <span>DDP 디자인랩 3층 디자인 홀</span>
                </div>
                <Link to='/contentsPage2'>
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
                alt='워너브라더스 100주년 전시'
                className='conImg'
              />
              <div className='center'>
                <b>워너브라더스 100주년 전시</b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 30.(토) ~ 12. 31.(일)</span>
                </div>

                <div>
                  <span className='date'>장소</span>
                  <span>DDP 뮤지엄 전시 1관</span>
                </div>
                <Link to='/contentsPage3'>
                  <button>
                    바로가기 <img src={buttonArrow} alt='detail' />
                  </button>
                </Link>
              </div>
            </div>

            <div className='box'>
              <img
                src={contents4}
                alt='쇼플루언서 라이브세일즈 쇼'
                className='conImg'
              />
              <div className='center'>
                <b>쇼플루언서 라이브세일즈 쇼</b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 30.(토) ~ 12. 31.(일)</span>
                </div>

                <div>
                  <span className='date'>장소</span>
                  <span>DDP 디자인랩 2층</span>
                </div>
                <Link to='/contentsPage4'>
                  <button>
                    바로가기
                    <img src={buttonArrow} alt='detail' />
                  </button>
                </Link>
              </div>
            </div>

            <div className='box'>
              <img src={contents5} alt='서울의 뷰티, 패션' className='conImg' />
              <div className='center'>
                <b>
                  [B the B]
                  <br />
                  서울의 뷰티 ‧ 패션
                </b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 30.(토) ~ 12. 31.(일)</span>
                </div>

                <div>
                  <span className='date'>장소</span>
                  <span>DDP 디자인랩 B the B</span>
                </div>
                <Link to='/contentsPage5'>
                  <button>
                    바로가기 <img src={buttonArrow} alt='detail' />
                  </button>
                </Link>
              </div>
            </div>

            <div className='box'>
              <img src={contents6} alt='혁신기술시연' className='conImg' />
              <div className='center'>
                <b>
                  [서울테크밋업]
                  <br />
                  혁신기술시연
                </b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 30.(토) ~ 12. 31.(일)</span>
                </div>

                <div>
                  <span className='date'>장소</span>
                  <span>DDP 디자인랩 3층 디자인 홀</span>
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

  .Triangle {
    position: absolute;
    top: -100px;
    left: 60px;
  }

  @media (max-width: 768px) {
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
        line-height: 40px;
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
