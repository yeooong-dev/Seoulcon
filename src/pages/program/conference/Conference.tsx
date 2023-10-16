import styled from "styled-components";
import { Wrapper } from "../../main/StMain";
import Navibar from "../../../components/navigation/Navibar";
import Footer from "../../../components/footer/Footer";
import Triangle from "../../../assets/images/program/img-triangle.svg";
import Conference1 from "../../../assets/images/program/img-conference1.jpg";
import Conference2 from "../../../assets/images/program/img-conference2.jpg";
import Conference3 from "../../../assets/images/program/img-conference3.jpg";
import buttonArrow from "../../../assets/images/main/button-arrow-white.svg";
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
                alt='크리에이터 팬미팅'
                className='conImg'
              />
              <div className='center'>
                <b>크리에이터 팬미팅</b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 30.(토) ~ 12. 31.(일)</span>
                </div>
                <div>
                  <span className='date'>장소</span>
                  <span>DDP 디자인랩 2층 매거진 라이브러리</span>
                </div>
                <Link to='/conferencePage'>
                  <button>
                    바로가기 <img src={buttonArrow} alt='detail' />
                  </button>
                </Link>
              </div>
            </div>

            <div className='box'>
              <img src={Conference2} alt='한류 세미나' className='conImg' />
              <div className='center'>
                <b>한류 세미나</b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 30.(토)</span>
                </div>
                <div>
                  <span className='date'>장소</span>
                  <span>DDP 아트홀 컨퍼런스홀</span>
                </div>
                <Link to='/conferencePage2'>
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
                alt='미디어 기자단 포럼'
                className='conImg'
              />
              <div className='center'>
                <b>미디어 기자단 포럼</b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 31.(일)</span>
                </div>

                <div>
                  <span className='date'>장소</span>
                  <span>DDP 아트홀 컨퍼런스홀</span>
                </div>
                <Link to='/conferencePage3'>
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

  .Triangle {
    position: absolute;
    top: -100px;
    left: 60px;
  }
`;

const PaddingWrap = styled.div`
  width: 80%;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-top: 120px;
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
    margin-bottom: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
    }

    .conImg {
      filter: brightness(0.3);
    }

    .center {
      position: absolute;

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
  }
`;
