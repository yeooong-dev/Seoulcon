import circle from "../../assets/images/seoulcon/img-round.svg";
import { Wrapper } from "../main/StMain";
import Navibar from "../../components/navigation/Navibar";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";

const Goods = () => {
  return (
    <Wrapper>
      <Navibar />
      <GoodsWrap>
        <PaddingWrap>
          <img src={circle} alt='도형' className='circle' />
          <Title>굿즈 리스트업</Title>
          <Divider />
          <ContentSection>
            <FlexContainer></FlexContainer>
          </ContentSection>
        </PaddingWrap>
      </GoodsWrap>
      <Footer />
    </Wrapper>
  );
};

export default Goods;

const GoodsWrap = styled.div`
  width: 100%;
  height: auto;
  background: black;
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
  width: 80%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  margin-top: 120px;
  z-index: 9;
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

const ContentSection = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const FlexContainer = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  align-items: flex-start;
`;
