import Footer from "../../components/footer/Footer";
import Navibar from "../../components/navigation/Navibar";
import { Wrapper } from "../main/StMain";
import star from "../../assets/images/seoulcon/img-star.svg";
import celebrity1 from "../../assets/images/seoulcon/img-influencer1.png";
import celebrity2 from "../../assets/images/seoulcon/img-influencer2.png";
import celebrity3 from "../../assets/images/seoulcon/img-influencer3.png";
import celebrity4 from "../../assets/images/seoulcon/img-influencer4.png";
import celebrity5 from "../../assets/images/seoulcon/img-influencer5.png";
import celebrity6 from "../../assets/images/seoulcon/img-influencer6.png";
import celebrity7 from "../../assets/images/seoulcon/img-influencer7.png";
import celebrity8 from "../../assets/images/seoulcon/img-influencer8.png";
import celebrity9 from "../../assets/images/seoulcon/img-influencer9.png";
import celebrity10 from "../../assets/images/seoulcon/img-influencer10.png";
import celebrity11 from "../../assets/images/seoulcon/img-influencer11.png";
import celebrity12 from "../../assets/images/seoulcon/img-influencer12.png";
import celebrity13 from "../../assets/images/seoulcon/img-influencer13.png";
import celebrity14 from "../../assets/images/seoulcon/img-influencer14.png";
import celebrity15 from "../../assets/images/seoulcon/img-influencer15.png";
import celebrity16 from "../../assets/images/seoulcon/img-influencer16.png";
import celebrity17 from "../../assets/images/seoulcon/img-influencer17.png";
import celebrity18 from "../../assets/images/seoulcon/img-influencer18.png";
import styled from "styled-components";

const Lineup = () => {
  return (
    <Wrapper>
      <Navibar />
      <LinupWrap>
        <StarImg src={star} alt='별' />
        <PaddingWrap>
          <Title>서울콘 인플루언서 라인업</Title>
          <Ment>전 세계 50개 국, 3,000팀, 30억 팔로워와 함께하세요</Ment>
          <Divider />
          <ImgBox>
            <div>
              <img src={celebrity1} alt='펑티모' />
              <p>펑티모(중국)</p>
              <b>1,000만</b>
            </div>

            <div>
              <img src={celebrity2} alt='MrBeast' />
              <p>MrBeast (미국)</p>
              <b>1,46억</b>
            </div>

            <div>
              <img src={celebrity3} alt='ZutiGang' />
              <p>ZutiGang (나미비아)</p>
              <b>1,340만</b>
            </div>

            <div>
              <img src={celebrity4} alt='PewDiePie' />
              <p>PewDiePie (미국)</p>
              <b>1,11억</b>
            </div>

            <div>
              <img src={celebrity5} alt='Romina Gafur' />
              <p>Romina Gafur (미국)</p>
              <b>481만</b>
            </div>

            <div>
              <img src={celebrity6} alt='Blazendary' />
              <p>Blazendary (미국)</p>
              <b>162만</b>
            </div>

            <div>
              <img src={celebrity7} alt='J.Fla' />
              <p>J.Fla (대한민국)</p>
              <b>1,760만</b>
            </div>

            <div>
              <img src={celebrity8} alt='RZD' />
              <p>RZD (인도네시아)</p>
              <b>408만</b>
            </div>

            <div>
              <img src={celebrity9} alt='영국남자' />
              <p>영국남자 (영국)</p>
              <b>557만</b>
            </div>

            <div>
              <img src={celebrity10} alt='Zoe Sugg' />
              <p>Zoe Sugg (영국)</p>
              <b>1,070만</b>
            </div>

            <div>
              <img src={celebrity11} alt='Junya.じゅんや' />
              <p>Junya.じゅんや (일본)</p>
              <b>2,300만</b>
            </div>

            <div>
              <img src={celebrity12} alt='Ysabelle' />
              <p>Ysabelle (필리핀)</p>
              <b>278만</b>
            </div>

            <div>
              <img src={celebrity13} alt='장엘리나' />
              <p>장엘리나 (대한민국)</p>
              <b>314만</b>
            </div>

            <div>
              <img src={celebrity14} alt='James Charles' />
              <p>James Charles (미국)</p>
              <b>2,380만</b>
            </div>

            <div>
              <img src={celebrity15} alt='NichLmao' />
              <p>NichLmao (싱가포르)</p>
              <b>2,360만</b>
            </div>

            <div>
              <img src={celebrity16} alt='Brent Rivera' />
              <p>Brent Rivera (미국)</p>
              <b>2,600만</b>
            </div>

            <div>
              <img src={celebrity17} alt='Claudipia' />
              <p>Claudipia (칠레)</p>
              <b>640만</b>
            </div>

            <div>
              <img src={celebrity18} alt='PONY Syndrome' />
              <p>PONY Syndrome (대한민국)</p>
              <b>595만</b>
            </div>
          </ImgBox>
        </PaddingWrap>
      </LinupWrap>
      <Footer />
    </Wrapper>
  );
};

export default Lineup;

const LinupWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  position: relative;
  color: white;
`;

const StarImg = styled.img`
  position: absolute;
  top: -240px;
  left: -50px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const PaddingWrap = styled.div`
  width: 70%;
  max-width: 1544px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 50px;
  display: flex;
  align-self: flex-start;
  margin-top: 150px;
  z-index: 9;

  @media (max-width: 420px) {
    font-size: 26px;
  }
`;

const Ment = styled.p`
  font-size: 18px;
  align-self: flex-start;
  margin-top: -25px;
  margin-bottom: 30px;
  z-index: 9;
  font-weight: bold;
  line-height: 24px;

  @media (max-width: 420px) {
    font-size: 16px;
  }
`;

const Divider = styled.hr`
  width: 100%;
  background: rgba(58, 58, 58, 1);
  opacity: 0.3;
`;

const ImgBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 50px 25px;
  margin-top: 50px;
  margin-bottom: 200px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  img {
    width: 100%;
    max-width: 260px;
    margin-bottom: 20px;
    z-index: 9;
  }

  p {
    font-size: 16px;
    line-height: 25px;
  }

  p,
  b {
    margin: 0;
    color: white;
  }

  b {
    font-weight: bold;
    color: rgba(82, 243, 255, 1);
    font-size: 30px;
    margin-top: 15px;
  }

  @media (max-width: 1200px) {
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);

    img {
      width: 220px;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 50px 0px;

    img {
      max-width: 160px;
    }
  }

  @media (max-width: 570px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 50px 10px;

    img {
      max-width: 130px;
    }
  }

  @media (max-width: 430px) {
    margin-bottom: 100px;
    grid-template-columns: repeat(2, 1fr);

    img {
      max-width: 156px;
    }

    div {
      b {
        font-size: 20px;
        margin-top: 5px;
      }

      p {
        font-size: 14px;
        line-height: 22.4px;
      }
    }
  }

  @media (max-width: 350px) {
    gap: 50px 10px;
    img {
      max-width: 120px;
    }
  }
`;
