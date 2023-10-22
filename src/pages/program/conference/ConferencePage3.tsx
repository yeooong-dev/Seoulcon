import styled from "styled-components";
import { Wrapper } from "../../main/StMain";
import Navibar from "../../../components/navigation/Navibar";
import Footer from "../../../components/footer/Footer";
import Triangle from "../../../assets/images/program/img-triangle.svg";
import buttonArrow from "../../../assets/images/main/button-arrow-white.svg";
import buttonArrowGreen from "../../../assets/images/main/button-arrow-green.svg";
import buttonArrowBlack from "../../../assets/images/main/button-arrow-black.svg";
import festival1 from "../../../assets/images/program/img-conference3.jpg";
import { Link } from "react-router-dom";

const ConferencePage3 = () => {
  return (
    <Wrapper>
      <Navibar />
      <FestivalWrap>
        <img src={festival1} alt='팬 페스티벌' className='bg' />
        <PaddingWrap>
          <img src={Triangle} alt='도형' className='Triangle' />
          <Title>미디어 기자단 포럼</Title>
          <Divider />
          <Contents>
            <div className='right'>
              <div>
                <img src={festival1} alt='팬 페스티벌' />
              </div>
            </div>

            <div className='left'>
              <p className='date'>일정</p>
              <p>• 23. 12. 31.(일)</p>
              <p className='date'>장소</p>
              <p>• DDP 아트홀 컨퍼런스홀</p>
              <p className='date'>내용</p>
              <p>
                • 전 세계 주요 언론이 바라보는 K-콘텐츠 관련 인사이트 공유
                <br />• K-콘텐츠의 글로벌 파급효과 및 한류의 지속 확산
              </p>
              <p className='date'>협력</p>
              <p>• TV조선</p>

              <div className='btnBox'>
                <button className='green'>
                  신청하기 <img src={buttonArrowGreen} alt='detail' />
                </button>
                <Link to='/conference'>
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

export default ConferencePage3;

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

  .bg {
    width: 100%;
    height: 100%;
    opacity: 0.2;
    filter: blur(10px);
    -webkit-filter: blur(10px);
    position: absolute;
    overflow: hidden;
  }

  @media (max-width: 768px) {
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
  color: rgba(191, 255, 106, 1);
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
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 100px;

  .left {
    width: 50%;
    display: flex;
    flex-direction: column;
    z-index: 9;

    .btnBox {
      width: 500px;
      display: flex;
    }

    p {
      line-height: 35px;
    }

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
      text-align: center;
      margin-bottom: -10px;
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
        margin-bottom: 100px;
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
    position: absolute;
    right: 0;

    img {
      width: 80%;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;

    .left {
      width: 100%;
      margin-top: 50px;
    }

    .right {
      width: 100%;
      position: static;

      img {
        width: 100%;
      }
    }
  }

  @media (max-width: 420px) {
    .left {
      font-size: 16px;

      .btnBox {
        width: 100%;
        flex-direction: column;

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
