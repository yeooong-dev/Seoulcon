import Footer from "../../components/footer/Footer";
import Navibar from "../../components/navigation/Navibar";
import intro from "../../components/../assets/images/seoulcon/img-intro-main.svg";
import styled from "styled-components";
import { Wrapper } from "../main/StMain";
import imgSba from "../../components/../assets/images/seoulcon/img-sba.png";
import intro1 from "../../assets/images/seoulcon/img-intro1.svg";
import intro2 from "../../assets/images/seoulcon/img-intro2.svg";
import intro3 from "../../assets/images/seoulcon/img-intro3.svg";
import intro4 from "../../assets/images/seoulcon/img-intro4.svg";

const SeoulconAbout = () => {
  return (
    <Wrapper>
      <Navibar />
      <AboutWrap>
        <div className='left'>
          <img src={intro} alt='서울콘 로고' />
        </div>

        <div className='right'>
          <h1>서울콘 소개</h1>
          <p className='text'>
            2023 연말, <br />
            서울에 글로벌 인플루언서 3,000명이 몰려옵니다.
          </p>
          <p className='text'>
            서울콘 전 세계 1억명이 실시간으로 보고, <br /> 5만 명의 현장
            관람객과 함께 즐기는 FUN 하고 WOW 한 새로운 행사입니다.
          </p>
          <p className='text'>
            최초의 행사이며 서울에서 열리기에 설득력과 향후 확장성이 있고 <br />
            역사를 축적할 수 있는 전시/박람회의 영역, <br />
            그래서, '서울'에서 인플루언서와 함께, 새롭게 콘텐츠 페스티벌이
            열립니다.
          </p>

          <p className='title'>인플루언서</p>
          <p className='num'>3,000+</p>
          <p className='title'>현장 관람객</p>
          <p className='num'>50,000+</p>
          <p className='title'>실시간 뷰어</p>
          <p className='num'>100,000,000+</p>
        </div>
      </AboutWrap>

      <ListWrap>
        <div>
          <p>설득력</p>
          <p>지금 전 세계가 주목하는,</p>
        </div>

        <div>
          <p>도전성</p>
          <p>전 세계 인플루언서의 무대가 되는,</p>
        </div>

        <div>
          <p>확장성</p>
          <p>다양한 주제로 이루어진,</p>
        </div>

        <div>
          <p>지속성</p>
          <p>2023년 연말, 역사가 시작되는,</p>
        </div>
      </ListWrap>

      <SbaWrap>
        <img src={imgSba} alt='서울경제진흥원' />
        <p>
          서울경제진흥원(SBA)은 서울시의 산업을 발전시키고, 서울 중소기업
          지원업무의 전문성과 효율성을 확보하여 <br />
          중소기업에 대한 기술, 경영, 인력 등의 종합지원체계를 구축함으로써
          중소기업의 경쟁력 제고를 위해 설립된 서울시 산하기관입니다.
        </p>
        <p>
          SBA는 좋은 일자리 창출과 중소기업 성장에 기여하는 중추기관으로
          서울경제와 함께 꾸준히 성장해 왔습니다. <br />
          SBA에서 추진하는 중소기업과 스타트업 지원 프로그램, 그리고 산업 활성화
          프로그램의 핵심 목표는 지속 가능한 좋은 일자리를 만드는 것입니다.
        </p>
      </SbaWrap>
      <Footer />
    </Wrapper>
  );
};

export default SeoulconAbout;

const AboutWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: conic-gradient(
    from 0.8turn,
    rgba(255, 14, 20, 1) 0%,
    rgba(5, 5, 5, 1) 60%,
    rgba(255, 14, 20, 1) 100%
  );

  .left {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
  }

  .right {
    position: absolute;
    top: 48%;
    right: 0;
    width: 50%;
    transform: translate(0, -50%);
    color: white;

    h1 {
      font-size: 3rem;
    }

    .text {
      font-size: 1.125rem;
      line-height: 2rem;
    }

    .title {
      font-size: 0.875rem;
      margin-top: 80px;
    }

    .num {
      font-size: 3.875rem;
      margin-top: 0;
      margin-bottom: -50px;
      font-weight: bold;
    }
  }
`;

const ListWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid black;
    position: relative;
    overflow: hidden;

    p:first-child {
      font-weight: bold;
      font-size: 48px;
      padding-left: 32rem;
    }

    p:last-child {
      font-size: 30px;
      color: rgba(199, 199, 199, 1);
      font-weight: bold;
      margin-left: 30rem;
    }
  }

  div:hover {
    background: black;
    transition: 0.5s;
    color: white;

    &::before {
      content: "";
      display: block;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      width: 100%;
      height: 100%;
      position: absolute;
      top: -100px;
      right: -1070px;
    }
  }

  div:nth-child(1):hover::before {
    content: url(${intro1});
  }

  div:nth-child(2):hover::before {
    content: url(${intro2});
  }

  div:nth-child(3):hover::before {
    content: url(${intro3});
  }

  div:nth-child(4):hover::before {
    content: url(${intro4});
  }
`;

const SbaWrap = styled.div`
  width: 100%;
  height: 374px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  background-color: #000;
  color: #fff;

  img {
    width: 163px;
    max-width: 300px;
    margin-bottom: 20px;
  }

  p {
    max-width: 1000px;
    text-align: center;
    margin-bottom: 10px;
    line-height: 1.8rem;
  }
`;
