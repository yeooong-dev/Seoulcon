import styled from "styled-components";
import { Wrapper } from "../../main/StMain";
import Navibar from "../../../components/navigation/Navibar";
import Footer from "../../../components/footer/Footer";
import Triangle from "../../../assets/images/program/img-triangle.svg";
import buttonArrow from "../../../assets/images/main/button-arrow-white.svg";
import buttonArrowBlack from "../../../assets/images/main/button-arrow-black.svg";
import festival1 from "../../../assets/images/program/img-contents2.jpg";
import borderImg from "../../../assets/images/program/border.svg";
import borderImg2 from "../../../assets/images/program/border2.svg";
import borderImg3 from "../../../assets/images/program/border3.svg";
import borderImg4 from "../../../assets/images/program/border4.svg";
import { Link } from "react-router-dom";

const ContentsPage2 = () => {
  return (
    <Wrapper>
      <Navibar />
      <FestivalWrap>
        <img src={festival1} alt='아티스트 콜라보 전시' className='bg' />
        <PaddingWrap>
          <img src={Triangle} alt='도형' className='Triangle' />
          <Title>아티스트 콜라보 전시</Title>
          <Divider />
          <Contents>
            <div className='right'>
              <div>
                <img src={festival1} alt='아티스트 콜라보 전시' />
              </div>
            </div>

            <div className='left'>
              <img src={borderImg} alt='일정' className='date' />
              <p>• 23. 12. 30.(토) ~ 12. 31.(일)</p>
              <img src={borderImg2} alt='장소' className='date' />
              <p>• DDP 어울림광장</p>
              <img src={borderImg3} alt='내용' className='date' />
              <p>• 아티스트와 콜라보 한 서울콘 키비주얼 ‧ 조형물 연출</p>
              <img src={borderImg4} alt='협력' className='date' />
              <p>• 그라플렉스, ㈜커넥아트</p>

              <div className='btnBox'>
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

export default ContentsPage2;

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
        margin-bottom: 200px;
        cursor: pointer;
      }

      img {
        margin-left: 5px;
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
