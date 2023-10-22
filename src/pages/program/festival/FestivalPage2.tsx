import styled from "styled-components";
import { Wrapper } from "../../main/StMain";
import Navibar from "../../../components/navigation/Navibar";
import Footer from "../../../components/footer/Footer";
import Triangle from "../../../assets/images/program/img-triangle.svg";
import buttonArrow from "../../../assets/images/main/button-arrow-white.svg";
import festival1 from "../../../assets/images/program/img-festival2.jpg";
import buttonArrowBlack from "../../../assets/images/main/button-arrow-black.svg";
import { Link } from "react-router-dom";

const FestivalPage2 = () => {
  return (
    <Wrapper>
      <Navibar />
      <FestivalWrap>
        <img src={festival1} alt='크리에이티브포스어워즈' className='bg' />
        <PaddingWrap>
          <img src={Triangle} alt='도형' className='Triangle' />
          <Title>크리에이티브포스 어워즈</Title>
          <Divider />
          <Contents>
            <div className='right'>
              <div>
                <img src={festival1} alt='팬 페스티벌' />
              </div>
            </div>

            <div className='left'>
              <p className='date'>일정</p>
              <p>• 23. 12. 31.(일) 14:00 ~ 17:00</p>
              <p className='date'>장소</p>
              <p>• DDP 컨퍼런스홀</p>
              <p className='date'>내용</p>
              <p>
                • 서울시와 서울경제진흥원이 육성 ‧ 지원하는 크리에이티브포스
                어워즈
                <br />
                • 2023년 우수 크리에이티브포스 멤버 6팀 (*서울시장상)
                <br />
                • 2023년 우수 뷰티 크리에이티브포스 멤버 5팀 (*서울시장상)
                <br />• 2023년 우수 틱톡 크리에이터 13팀
                <br />• 크리에이티브포스 멤버 네트워킹
              </p>
              <p className='date'>협력</p>
              <p>• 틱톡 코리아</p>
              <div>
                <Link to='/festival'>
                  <button>
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

export default FestivalPage2;

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

      button:hover {
        background: white;
        transition: 0.2s;
        color: black;
      }

      button:hover img {
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

      div {
        button {
          margin-top: 30px;
          margin-bottom: 0px;
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

  @media (max-width: 420px) {
    .left {
      font-size: 16px;

      div {
        button {
          width: 100%;
          margin-top: 20px;
          margin-bottom: 0px;
        }
      }
    }
  }
`;
