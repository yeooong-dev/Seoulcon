import styled from "styled-components";
import { Wrapper } from "../../main/StMain";
import Navibar from "../../../components/navigation/Navibar";
import Footer from "../../../components/footer/Footer";
import Triangle from "../../../assets/images/program/img-triangle.svg";
import buttonArrow from "../../../assets/images/main/button-arrow-white.svg";
import buttonArrowGreen from "../../../assets/images/main/button-arrow-green.svg";
import buttonArrowBlack from "../../../assets/images/main/button-arrow-black.svg";
import borderImg from "../../../assets/images/program/border.svg";
import borderImg2 from "../../../assets/images/program/border2.svg";
import borderImg3 from "../../../assets/images/program/border3.svg";
import borderImg4 from "../../../assets/images/program/border4.svg";
import festival1 from "../../../assets/images/program/img-contents1.jpg";
import { Link } from "react-router-dom";

const ContentsPage = () => {
  return (
    <Wrapper>
      <Navibar />
      <FestivalWrap>
        <img src={festival1} alt='팬 페스티벌' className='bg' />
        <PaddingWrap>
          <img src={Triangle} alt='도형' className='Triangle' />
          <Title>스트릿 패션 & 스니커즈 전시</Title>
          <Divider />
          <Contents>
            <div className='right'>
              <div>
                <img src={festival1} alt='팬 페스티벌' />
              </div>
            </div>

            <div className='left'>
              <img src={borderImg} alt='일정' className='date' />
              <p>• 23. 12. 30.(토) ~ 12. 31.(일) 10:00 ~ 18:00</p>
              <img src={borderImg2} alt='장소' className='date' />
              <p>• DDP 디자인랩 1층 D숲</p>
              <img src={borderImg3} alt='내용' className='date' />
              <p>
                • 국내 유일 스트릿 패션 & 스니커즈 전시
                <br />• GenZ세대들에게 인기 있는 서울의 대표 스트릿 브랜드
              </p>
              <img src={borderImg4} alt='협력' className='date' />
              <p>• ㈜오리지널랩, ㈜무신사</p>

              <div className='btnBox'>
                <button className='green'>
                  신청하기 <img src={buttonArrowGreen} alt='detail' />
                </button>
                <Link to='/contents'>
                  <button className='back'>
                    돌아가기 <img src={buttonArrow} alt='detail' />
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

export default ContentsPage;

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
  padding-bottom: 30px;
  overflow: hidden;

  .Triangle {
    position: absolute;
    top: -100px;
    left: 60px;
  }

  .bg {
    width: 100%;
    opacity: 0.2;
    filter: blur(10px);
    -webkit-filter: blur(10px);
    position: absolute;
    z-index: 0;
  }

  @media (max-width: 768px) {
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
  margin-top: 130px;
  line-height: 60px;
  color: rgba(191, 255, 106, 1);
  position: relative;

  @media (max-width: 420px) {
    font-size: 26px;
    line-height: 35px;
  }
`;

const Divider = styled.hr`
  width: 100%;
  background: rgba(58, 58, 58, 1);
  opacity: 0.3;
  margin-bottom: 30px;
`;

const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row-reverse;

  .left {
    width: 45%;
    display: flex;
    flex-direction: column;
    z-index: 9;

    .btnBox {
      width: 500px;
      display: flex;
      margin-top: -50px;
    }

    p {
      line-height: 35px;
      margin-bottom: 40px;
    }

    p:nth-child(even) {
      font-size: 18px;
      font-weight: 500;
    }

    .date {
      width: 74px;
      padding: 0.05rem 0.2rem;
      display: inline-block;
      margin-bottom: 8px;
      text-align: center;
      margin-bottom: -5px;
    }

    div {
      button {
        width: 220px;
        height: 52px;
        background: none;
        color: white;
        border: 1px solid white;
        border-radius: 50px;
        font-size: 16px;
        margin-top: 100px;
        margin-bottom: 150px;
        cursor: pointer;
      }

      img {
        margin-left: 5px;
      }

      .green {
        margin-right: 20px;
        border: 1px solid rgba(191, 255, 106, 1);
        color: rgba(191, 255, 106, 1);
      }
      .green:hover {
        background: rgba(191, 255, 106, 1);
        transition: 0.2s;
        color: black;
      }

      .green:hover img {
        content: url(${buttonArrowBlack});
      }

      .back:hover {
        background: white;
        transition: 0.2s;
        color: black;
      }

      .back:hover img {
        content: url(${buttonArrowBlack});
      }
    }
  }

  .right {
    width: 50%;
    display: flex;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;

    .left {
      width: 100%;
      margin-top: 50px;

      .btnBox {
        pointer-events: none;

        a {
          pointer-events: auto;
        }
      }
    }

    .right {
      width: 100%;
      position: static;

      img {
        width: 100%;
      }
    }
  }

  @media (max-width: 500px) {
    .left {
      font-size: 16px;

      .btnBox {
        width: 100%;
        flex-direction: column;
        margin-top: 10px;

        button {
          width: 100%;
          margin-top: 30px;
          margin-bottom: 30px;
        }

        button:first-child {
          margin-bottom: -10px;
        }
      }
    }
  }
`;
