import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Navibar from "../../components/navigation/Navibar";
import { Wrapper } from "../main/StMain";
import buttonArrow from "../../assets/images/main/button-arrow-white.svg";

const Tourist = () => {
  return (
    <Wrapper>
      <Navibar />
      <FestivalWrap>
        <PaddingWrap>
          <Title>인근 관광지</Title>
          <Divider />
          <Contents>
            <p>서울의 핫 플레이스가 궁금하다면?</p>
            <button>
              바로가기 <img src={buttonArrow} alt='detail' />
            </button>
          </Contents>
        </PaddingWrap>
      </FestivalWrap>
      <Footer />
    </Wrapper>
  );
};

export default Tourist;

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

  .square {
    position: absolute;
    top: 0px;
    left: -50px;
  }
`;

const PaddingWrap = styled.div`
  width: 60%;

  p {
    margin-top: -10px;
    margin-bottom: 30px;
  }
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
  margin-bottom: 20px;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 200px;
  height: 600px;

  p {
    font-size: 22px;
    line-height: 30px;
  }
  button {
    width: 220px;
    height: 52px;
    background: none;
    color: white;
    border: 1px solid white;
    border-radius: 50px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 30px;

    img {
      width: 12px;
      height: 12px;
      margin-left: 5px;
    }
  }
`;
