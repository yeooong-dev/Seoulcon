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
      <Wrap>
        <PaddingWrap>
          <AboutWrap>
            <div className='left'>
              <img src={intro} alt='서울콘 로고' />
            </div>

            <div className='right'>
              <h1>서울콘 소개</h1>
              <p className='text'>
                2023년의 끝, 그리고 2024년의 시작.
                <br />
                서울에 글로벌 인플루언서 3,000명이 몰려옵니다.
              </p>
              <p className='text'>
                서울콘은 전 세계 1억 명이 실시간으로 시청하고,
                <br />
                5만 명의 현장 관람객이 함께 즐기는 FUN 하고 WOW한 새로운
                행사입니다.
              </p>
              <p className='text'>
                최초로, 서울에서 열릴만 하며
                <br />
                확장성이 있고 역사를 축적할 수 있는 전시/박람회의 영역,
              </p>
              <p className='text'>
                그래서, ‘서울’에서 인플루언서와 ‘함께, 새롭게’ 콘텐츠 페스티벌을
                개최합니다.
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
            <div className='listbox'>
              <p className='left'>설득력</p>

              <div className='right'>
                <p>지금 전 세계가 주목하는,</p>
                <img src={intro1} alt='설득력' />
              </div>
            </div>

            <div className='listbox'>
              <p className='left'>도전성</p>

              <div className='right'>
                <p>전 세계 인플루언서의 무대가 되는,</p>
                <img src={intro2} alt='도전성' className='second' />
              </div>
            </div>

            <div className='listbox'>
              <p className='left'>확장성</p>

              <div className='right'>
                <p>다양한 주제로 이루어진,</p>
                <img src={intro3} alt='확장성' />
              </div>
            </div>

            <div className='listbox'>
              <p className='left'>지속성</p>
              <div className='right'>
                <p>2023년 연말, 역사가 시작되는,</p>
                <img src={intro4} alt='지속성' />
              </div>
            </div>
          </ListWrap>

          <SbaWrap>
            <img src={imgSba} alt='서울경제진흥원' />
            <b>“서울을 생각합니다. 또한 당신의 미래를”</b>
            <p>
              서울 경제 진흥을 위한 효율적으로 정책을 추진하고,
              <br />
              중소기업의 종합적∙체계적 지원 및 육성을 위해 서울경제진흥원은
              끊임없이 노력하고 있습니다.
            </p>
            <p>
              서울경제진흥원은 서울특별시의 경제 진흥 및 활성화를 위해 창업
              촉진, 기업 성장, 산업 육성에 기여함을 목적으로
              <br />
              중소기업진흥에 관한 법률 및 동법 시행령과 서울경제진흥원 설립 및
              운영 조례에 따라 설립되었으며
              <br />
              서울시민, 스타트업, 기업이 체감하는 경제 활성화 및 성과 창출을
              위해 소통과 협력을 기반으로 다양한 사업을 추진하고 있습니다.
            </p>
          </SbaWrap>
        </PaddingWrap>
      </Wrap>
      <Footer />
    </Wrapper>
  );
};

export default SeoulconAbout;

const Wrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  position: relative;

  .circle {
    position: absolute;
    top: -200px;
    left: 100px;
  }

  @media (max-width: 768px) {
    .circle {
      display: none;
    }
  }
`;

const PaddingWrap = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AboutWrap = styled.div`
  width: 100%;
  height: 1040px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding-bottom: 100px;
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

    img {
      width: 962px;
      object-fit: cover;
    }
  }

  .right {
    width: 50%;
    margin-left: 50%;
    color: white;
    padding-right: 3rem;

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

  @media (max-width: 1300px) {
    height: 1000px;

    .left {
      top: 0;
      left: -150px;
    }

    .right {
      margin-top: 50px;
    }
  }

  @media (max-width: 1200px) {
    height: 1050px;

    .left {
      top: 0;
      left: -150px;
    }

    .right {
      margin-top: 50px;
    }
  }

  @media (max-width: 1100px) {
    height: 1000px;

    .left {
      top: 0;
      left: -120px;
      img {
        width: 800px;
      }
    }

    .right {
      margin-top: 50px;
    }
  }

  @media (max-width: 960px) {
    justify-content: center;
    align-items: center;
    height: 1350px;
    flex-direction: column;
    position: relative;

    .left {
      left: 50%;
      transform: translate(-50%, 0%);
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
      }
    }

    .right {
      position: absolute;
      width: 90%;
      top: 450px;
      left: -44%;
    }
  }

  @media (max-width: 750px) {
    .right {
      top: 450px;
    }
  }

  @media (max-width: 640px) {
    .right {
      top: 400px;
    }
  }

  @media (max-width: 560px) {
    height: 1200px;

    .left {
      img {
        width: 678px;
      }
    }

    .right {
      left: -45%;
      top: 400px;

      h1 {
        font-size: 26px;
      }

      .text {
        font-size: 16px;
        line-height: 2rem;
      }

      .num {
        font-size: 32px;
      }
    }
  }

  @media (max-width: 390px) {
    height: 1200px;

    .right {
      top: 400px;
    }
  }

  @media (max-width: 350px) {
    height: 1300px;
  }

  @media (max-width: 295px) {
    height: 1400px;
  }
`;

const ListWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;

  .listbox {
    width: 100%;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1.5px solid black;
    position: relative;
    overflow: hidden;

    .left {
      width: 50%;
      font-weight: bold;
      font-size: 48px;
      margin-right: 100px;
      text-align: center;
    }

    .right {
      width: 50%;
      position: relative;

      img {
        opacity: 0;
        visibility: hidden;
        transform: translateX(0);
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out,
          visibility 0.3s ease-in-out;
        z-index: 1;
        position: absolute;
        bottom: 0;
        left: 0;
      }

      p {
        font-size: 30px;
        color: rgba(199, 199, 199, 1);
        font-weight: bold;
        position: relative;
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  .listbox:hover {
    background: black;
    transition: 0.5s;

    .left,
    .right p {
      color: white;
    }

    &::before {
      content: "";
      display: block;
      background-image: inherit;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      transition: transform 0.3s ease;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
    }
  }

  .listbox .right img {
    transform: translateX(0);
    transition: transform 0.3s ease-in-out;
  }

  .listbox:hover .right img {
    opacity: 1;
    visibility: visible;
    transform: translateX(-20px);
  }

  .listbox:nth-of-type(1) .right img {
    top: -150px;
    left: -45px;
  }

  .listbox:nth-of-type(2) .right img {
    top: -240px;
    left: -20px;
  }

  .listbox:nth-of-type(3) .right img {
    top: -200px;
    left: -100px;
  }

  .listbox:nth-of-type(4) .right img {
    top: -150px;
    left: -40px;
  }

  @media (max-width: 768px) {
    .listbox {
      position: relative;
      height: 200px;
      pointer-events: none;
      display: flex;

      .right {
        width: 100%;
        p {
          width: 100%;
          color: black;
          position: absolute;
          top: -8px;
          left: 0;
          padding-left: 2rem;
        }

        img {
          width: 150px;
          opacity: 1;
          visibility: visible;
        }

        .second {
          width: 100px;
        }
      }

      .left {
        width: 100%;
        position: absolute;
        top: -8px;
        left: 0;
        text-align: left;
        padding-left: 2rem;
      }
    }
    .listbox:nth-of-type(1) .right img {
      top: -75px;
      left: 72%;
    }

    .listbox:nth-of-type(2) .right img {
      top: -80px;
      left: 76%;
    }

    .listbox:nth-of-type(3) .right img {
      top: -70px;
      left: 73%;
    }

    .listbox:nth-of-type(4) .right img {
      top: -75px;
      left: 75%;
    }
  }

  @media (max-width: 605px) {
    .listbox {
      .right {
        p {
          font-size: 26px;
        }

        img {
          width: 130px;
        }

        .second {
          width: 90px;
        }
      }
    }

    .listbox:nth-of-type(1) .right img {
      top: -65px;
      left: 72%;
    }

    .listbox:nth-of-type(2) .right img {
      top: -70px;
      left: 76%;
    }

    .listbox:nth-of-type(3) .right img {
      top: -60px;
      left: 73%;
    }

    .listbox:nth-of-type(4) .right img {
      top: -65px;
      left: 75%;
    }
  }

  @media (max-width: 518px) {
    .listbox {
      height: 144px;

      .left{
        font-size: 26px;
        top: 10px;
        left: -15px;
      }
      .right {
        p {
          font-size: 18px;
          left: -15px;
        }

        img {
          width: 100px;
        }

        .second {
          width: 70px;
        }
      }
    }

    .listbox:nth-of-type(1) .right img {
      top: -50px;
      left: 68%;
    }

    .listbox:nth-of-type(2) .right img {
      top: -55px;
      left: 73%;
    }

    .listbox:nth-of-type(3) .right img {
      top: -50px;
      left: 67%;
    }

    .listbox:nth-of-type(4) .right img {
      top: -50px;
      left: 70%;
    }
  }
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
    margin-bottom: 30px;
  }

  b {
    font-size: 22px;
    margin-bottom: 20px;
  }

  p {
    max-width: 1000px;
    text-align: center;
    margin-bottom: 0px;
    line-height: 1.8rem;
  }

  @media (max-width: 768px) {
    height: 440px;

    p {
      max-width: 90%;
    }
  }

  @media (max-width: 420px) {
    height: 500px;
    b {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }
  }
`;
