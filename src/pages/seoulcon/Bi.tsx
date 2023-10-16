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
                <div className='color' />
                <div style={{ marginRight: "100px" }}>
                  <p>#000000</p>
                  <p className='tag'>#세련됨 #시작 #집중 #끝 #기본</p>
                </div>

                <div className='colorRed' />
                <div>
                  <p>#FF0E14</p>
                  <p className='tag'>#열정 #사랑 #관심 #활력 #재미</p>
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

  .circle {
    position: absolute;
    top: -200px;
    left: 100px;
  }
`;

const ContentSection = styled.div`
  width: 70%;
  height: 1080px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ContentSection2 = styled.div`
  width: 70%;
  height: 850px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ContentSection3 = styled.div`
  width: 70%;
  height: 1700px;
  display: flex;
  position: relative;
  margin-top: -100px;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 50px;
  position: absolute;
  top: 60px;
  left: 0;
`;

const Divider = styled.hr`
  width: 100%;
  background: rgba(58, 58, 58, 1);
  opacity: 0.3;
  position: absolute;
  top: 200px;
  left: 0;
`;

const Divider2 = styled.hr`
  width: 100%;
  background: rgba(58, 58, 58, 1);
  opacity: 0.3;
  position: absolute;
  top: 80px;
  left: 0;
`;

const Divider3 = styled.hr`
  width: 100%;
  background: rgba(58, 58, 58, 1);
  opacity: 0.3;
  position: absolute;
  top: 10px;
  left: 0;
`;

const FlexContainer = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  align-items: flex-start;
`;

const SubTitle = styled.h5`
  width: 40%;
  font-size: 30px;
  align-items: flex-start;
`;

const DescriptionWrapper = styled.div`
  width: 60%;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 50px;

  img {
    width: 793px;
    margin-bottom: 20px;
  }
`;

const Description = styled.p`
  margin-top: 0;
  font-size: 22px;
  font-weight: bold;
`;

const Description2 = styled.p`
  font-size: 18px;
  line-height: 30px;
`;

const BrandSymbol = styled.img`
  width: 790px;
  align-self: flex-start;
  margin-top: 30px;
`;

const FlexWrap = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;

  .color {
    width: 48px;
    height: 48px;
    background: black;
    border: 2px solid white;
  }

  .colorRed {
    width: 48px;
    height: 48px;
    background: red;
  }

  .tag {
    color: rgba(143, 143, 143, 1);
    font-size: 14px;
  }
`;
