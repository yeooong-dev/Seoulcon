import circle from "../../assets/images/seoulcon/img-round.svg";
import brandImg from "../../assets/images/seoulcon/img-brand.jpg";
import { Wrapper } from "../main/StMain";
import Navibar from "../../components/navigation/Navibar";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import appImg1 from "../../assets/images/seoulcon/img-application1.jpg";
import appImg2 from "../../assets/images/seoulcon/img-application2.jpg";
import appImg3 from "../../assets/images/seoulcon/img-application3.jpg";

const Bi = () => {
  return (
    <Wrapper>
      <Navibar />
      <BiWrap>
        <img src={circle} alt='도형' className='circle' />

        <ContentSection>
          <Title>서울콘 브랜드</Title>
          <Divider />
          <FlexContainer>
            <SubTitle>브랜드 심볼</SubTitle>
            <DescriptionWrapper>
              <Description>
                “서울콘 무대로의 초대 티켓 + 콘텐츠의 다양성”
              </Description>
              <Description2>
                서울콘의 사각형 앵글은 Online과 Offline의 공간을 상징하며
                <br />
                첫 글자의 O를 활용하여 인플루언서의 상징인 스탠드 마이크를,
                <br />
                삼각형의 재생/플레이 심볼을 함께 사용하여 임팩트 있는 주목성을
                의도하였습니다.
              </Description2>
              <Description2>
                미디어 플랫폼으로 전 세계의 고객들과 커뮤니케이션하는 형태적
                의미를 담았으며
                <br />
                새로움에 대한 믿음과 사람들과 함께 즐기는 컨셉으로
                개발하였습니다.
              </Description2>
              <BrandSymbol src={brandImg} alt='브랜드 심볼' />
            </DescriptionWrapper>
          </FlexContainer>
        </ContentSection>

        <ContentSection2>
          <FlexContainer>
            <Divider2 />
            <SubTitle>브랜드 컬러</SubTitle>
            <DescriptionWrapper>
              <Description>서울콘 블랙</Description>
              <Description2 style={{ marginBottom: "50px" }}>
                서울콘 스페이스의 시작과 끝을 표현하는 컬러로서, 스포트라이트의
                순간을 상징합니다.
                <br />
                기존에 볼 수 없는 축제를 채워나가는 가치로서의 의미를
                전달합니다.
              </Description2>
              <Description>서울콘 레드</Description>
              <Description2 style={{ marginBottom: "50px" }}>
                크리에이터의 돋보이는 창의성과 열정을, 서울콘에 참여하는
                여러분들의 관심과 사랑을 표현합니다.
                <br />
                강렬함, 사람들의 환호, 미디어 플랫폼을 통해 글로벌로 뻗어나가는
                영향력을 상징합니다.
              </Description2>
              <FlexWrap>
                <div className='brandColor'>
                  <div className='color' />
                  <div style={{ marginRight: "100px" }} className='colorText'>
                    <p>#000000</p>
                    <p className='tag'>#세련됨 #시작 #집중 #끝 #기본</p>
                  </div>
                </div>

                <div className='brandColor'>
                  <div className='colorRed' />
                  <div className='colorText'>
                    <p>#FF0E14</p>
                    <p className='tag'>#열정 #사랑 #관심 #활력 #재미</p>
                  </div>
                </div>
              </FlexWrap>
            </DescriptionWrapper>
          </FlexContainer>
        </ContentSection2>

        <ContentSection3>
          <FlexContainer>
            <Divider3 />
            <SubTitle>어플리케이션</SubTitle>
            <DescriptionWrapper>
              <img src={appImg1} alt='어플리케이션 이미지' />
              <img src={appImg2} alt='어플리케이션 이미지' />
              <img src={appImg3} alt='어플리케이션 이미지' />
            </DescriptionWrapper>
          </FlexContainer>
        </ContentSection3>
      </BiWrap>
      <Footer />
    </Wrapper>
  );
};

export default Bi;

const BiWrap = styled.div`
  width: 100%;
  height: auto;
  background: black;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding-top: 200px;

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

const ContentSection = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ContentSection2 = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 80px;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

const ContentSection3 = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  position: relative;
  top: 150px;
  margin-bottom: 250px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 50px;
  position: absolute;
  top: -100px;
  left: 0;

  @media (max-width: 768px) {
    top: -100px;
  }

  @media (max-width: 420px) {
    font-size: 26px;
  }
`;

const Divider = styled.hr`
  width: 100%;
  background: rgba(58, 58, 58, 1);
  opacity: 0.3;
  position: absolute;
  top: 10px;
  left: 0;

  @media (max-width: 420px) {
    top: -40px;
  }
`;

const Divider2 = styled.hr`
  width: 100%;
  background: rgba(58, 58, 58, 1);
  opacity: 0.3;
  position: absolute;
  top: 10px;
  left: 0;

  @media (max-width: 768px) {
    top: 10px;
  }

  @media (max-width: 420px) {
    top: -50px;
  }
`;

const Divider3 = styled.hr`
  width: 100%;
  background: rgba(58, 58, 58, 1);
  opacity: 0.3;
  position: absolute;
  top: 10px;
  left: 0;

  @media (max-width: 768px) {
    top: 10px;
  }

  @media (max-width: 420px) {
    top: -43px;
  }
`;

const FlexContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SubTitle = styled.h5`
  width: 40%;
  font-size: 30px;
  align-items: flex-start;

  @media (max-width: 420px) {
    font-size: 18px;
    margin-top: 0px;
  }
`;

const DescriptionWrapper = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 50px;

  img {
    width: 100%;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0;

    img {
      max-width: 100%;
    }
  }
`;

const Description = styled.p`
  margin-top: 0;
  font-size: 22px;
  font-weight: bold;
  line-height: 25px;

  @media (max-width: 420px) {
    font-size: 16px;
  }
`;

const Description2 = styled.p`
  font-size: 18px;
  line-height: 30px;

  @media (max-width: 420px) {
    font-size: 16px;
    line-height: 25px;
  }
`;

const BrandSymbol = styled.img`
  width: 100%;
  align-self: flex-start;
  margin-top: 30px;
  max-width: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const FlexWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  position: relative;

  .brandColor {
    display: flex;
    align-items: center;

    .color {
      width: 48px;
      height: 48px;
      background: black;
      border: 2px solid white;
      margin-right: 20px;
    }

    .colorRed {
      width: 48px;
      height: 48px;
      background: red;
      margin-right: 20px;
    }
  }

  .tag {
    color: rgba(143, 143, 143, 1);
    font-size: 14px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 420px) {
    flex-direction: column;

    .brandColor {
      width: 100%;

      .colorText {
        p:first-child {
          font-size: 16px;
        }

        p:last-child {
          font-size: 11.3px;
        }
      }
    }
  }
`;
