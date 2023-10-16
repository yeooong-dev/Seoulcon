import styled from "styled-components";
import { Wrapper } from "../../main/StMain";
import Navibar from "../../../components/navigation/Navibar";
import Footer from "../../../components/footer/Footer";
import Triangle from "../../../assets/images/main/img-triangle.svg";
import FestivalImg1 from "../../../assets/images/program/img-festival1.jpg";
import FestivalImg2 from "../../../assets/images/program/img-festival2.jpg";
import FestivalImg3 from "../../../assets/images/program/img-festival3.jpg";
import FestivalImg4 from "../../../assets/images/program/img-festival4.jpg";
import FestivalImg5 from "../../../assets/images/program/img-festival5.jpg";
import buttonArrow from "../../../assets/images/main/button-arrow-white.svg";
import { Link } from "react-router-dom";

const Festival = () => {
  return (
    <Wrapper>
      <Navibar />
      <FestivalWrap>
        <PaddingWrap>
          <img src={Triangle} alt='도형' className='Triangle' />
          <Title>페스티벌</Title>
          <Divider />
          <Contents>
            <div className='box'>
              <img
                src={FestivalImg1}
                alt='T1 CON 팬 페스티벌'
                className='conImg'
              />
              <div className='center'>
                <b>
                  [T1 CON] <br /> 팬 페스티벌
                </b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 30.(토) 10:00 ~ 18:00</span>
                </div>
                <div>
                  <span className='date'>장소</span>
                  <span>DDP 아트홀 1관</span>
                </div>
                <Link to='/festivalPage'>
                  <button>
                    바로가기 <img src={buttonArrow} alt='detail' />
                  </button>
                </Link>
              </div>
            </div>

            <div className='box'>
              <img
                src={FestivalImg2}
                alt='크리에이티브포스 어워즈'
                className='conImg'
              />
              <div className='center'>
                <b>
                  [서울콘(SEOULCon) 어워즈]
                  <br />
                  크리에이티브포스어워즈
                </b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 30.(토) 14:00 ~ 15:50</span>
                </div>
                <div>
                  <span className='date'>장소</span>
                  <span>DDP 아트홀 2관</span>
                </div>
                <Link to='/festivalPage2'>
                  <button>
                    바로가기
                    <img src={buttonArrow} alt='detail' />
                  </button>
                </Link>
              </div>
            </div>

            <div className='box'>
              <img
                src={FestivalImg3}
                alt='apan star & 서울콘어워즈'
                className='conImg'
              />
              <div className='center'>
                <b>
                  [서울콘(SEOULCon) 어워즈]
                  <br />
                  APAN Star & 서울콘 Awards
                </b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 30.(토) 19:00 ~ 21:00</span>
                </div>

                <div>
                  <span className='date'>장소</span>
                  <span>DDP 아트홀 2관</span>
                </div>
                <Link to='/festivalPage3'>
                  <button>
                    바로가기 <img src={buttonArrow} alt='detail' />
                  </button>
                </Link>
              </div>
            </div>

            <div className='box'>
              <img src={FestivalImg4} alt='오징어게임' className='conImg' />
              <div className='center'>
                <b>
                  [오징어 게임]
                  <br />
                  피지컬 100 VS 인플루언서
                </b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 31.(일) 10:00 ~ 18:00</span>
                </div>

                <div>
                  <span className='date'>장소</span>
                  <span>DDP 아트홀 2관</span>
                </div>
                <Link to='/festivalPage4'>
                  <button>
                    바로가기
                    <img src={buttonArrow} alt='detail' />
                  </button>
                </Link>
              </div>
            </div>

            <div className='box'>
              <img
                src={FestivalImg5}
                alt='셀럽 프라이빗 EDM 파티'
                className='conImg'
              />
              <div className='center'>
                <b>셀럽 프라이빗 EDM 파티</b>
                <div>
                  <span className='date'>일정</span>
                  <span>23. 12. 30.(토) ~ 12. 31.(일)</span>
                </div>

                <div>
                  <span className='date'>장소</span>
                  <span>DDP 디자인랩 3층 디자인홀, 4층 잔디사랑방</span>
                </div>
                <Link to='/festivalPage5'>
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

export default Festival;

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
  z-index: 9;
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
  }
`;
