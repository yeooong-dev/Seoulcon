import styled from "styled-components";
import { Wrapper } from "../../main/StMain";
import Navibar from "../../../components/navigation/Navibar";
import Footer from "../../../components/footer/Footer";
import Triangle from "../../../assets/images/program/img-triangle.svg";
import buttonArrow from "../../../assets/images/main/button-arrow-white.svg";
import buttonArrowGreen from "../../../assets/images/main/button-arrow-green.svg";
import festival1 from "../../../assets/images/program/img-performance1.jpg";
import { Link } from "react-router-dom";

const PerformancePage = () => {
  return (
    <Wrapper>
      <Navibar />
      <FestivalWrap>
        <img src={festival1} alt='팬 페스티벌' className='bg' />
        <PaddingWrap>
          <img src={Triangle} alt='도형' className='Triangle' />
          <Title>K-POP 공연 & 카운트다운</Title>
          <Divider />
          <Contents>
            <div className='left'>
              <p className='date'>일정</p>
              <p>• 23. 12. 30.(토) 10:00 ~ 18:00</p>
              <p className='date'>장소</p>
              <p>• DDP 아트홀 1관</p>
              <p className='date'>내용</p>
              <p>
                • E스포츠 구단 T1의 한 해를 마무리하는 팬 페스티벌
                <br />• 팬들과 함께 진행하는 팬 페스티벌
                <br />• 선수와 관객들이 함께하는 각종 프로그램 및 이벤트 매치
                <br />• 팬미팅, 팬 토크쇼 등 다양한 이벤트, T1구단 굿즈 판매
              </p>
              <p className='date'>협력</p>
              <p>• SK텔레콤 T1구단</p>
              <div>
                <button className='green'>
                  신청하기 <img src={buttonArrowGreen} alt='detail' />
                </button>
                <Link to='/performance'>
                  <button>
                    돌아가기 <img src={buttonArrow} alt='detail' />
                  </button>
                </Link>
              </div>
            </div>
            <div className='right'>
              <div>
                <img src={festival1} alt='팬 페스티벌' />
              </div>
            </div>
          </Contents>
        </PaddingWrap>
      </FestivalWrap>
      <Footer />
    </Wrapper>
  );
};

export default PerformancePage;

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
`;

const PaddingWrap = styled.div`
  width: 80%;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-top: 120px;
  color: rgba(191, 255, 106, 1);
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
  margin-bottom: 180px;

  .left {
    width: 50%;
    display: flex;
    flex-direction: column;
    z-index: 9;

    p {
      line-height: 30px;
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
`;
