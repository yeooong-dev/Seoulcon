import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Navibar from "../../components/navigation/Navibar";
import { Wrapper } from "../main/StMain";
import square from "../../assets/images/info/img-square.svg";
import buttonArrow from "../../assets/images/main/button-arrow-white.svg";
import buttonArrowBlack from "../../assets/images/main/button-arrow-black.svg";
import { Link } from "react-router-dom";

const NoticePage = () => {
  return (
    <Wrapper>
      <Navibar />
      <FestivalWrap>
        <PaddingWrap>
          <img src={square} alt='도형' className='square' />
          <Title>[2023 서울콘] 현장 DDP 입장 순서 안내</Title>
          <div className='flex'>
            <p>2023. 07. 27.</p>
            <p>|</p>
            <p>조회수 : 3,345</p>
          </div>
          <Divider />
          <Contents>
            <p>
              {"<스탠딩석 입장 안내>"}
              <br />
              선착순으로 입장하는 스탠딩석은 입장순서 및 좌석이 지정되어 있지
              않습니다. 스탠딩석의 입장순서는 당일 선착순으로 발급되는
              ‘입장순서표’에 의하여 결정됩니다.
              <br />
              ‘스탠딩 입장순서표’ 배분은 공연당일 두차례(10시/13시)에 걸쳐
              매표소 옆 데스크에서 배분할 예정입니다.(ex.10시 배분-10시까지
              대기라인에 도착 인원들에게 순서 표 배분)
              <br />
              입장시작 시간은 15시입니다. 14시30분까지 ‘스탠딩 입장순서표’상의
              번호순으로 대기라인에 대기해주시기 바랍니다.
            </p>
            <p>
              {"< 주의사항 >"}
              <br />
              ‘스탠딩 입장순서표’는 10시/13시까지 오신분들에게만 배분할
              예정입니다. ‘입장순서표’를 받지 못하신 분들은 15시 부터
              입장순서표를 받으신 분들의 입장이 끝난 후,
              <br />
              도착 순서대로 입장이 가능하오니 유의하여주시기 바랍니다.
              <br />
              현장 혼잡이 예상되오니, 스탠딩입장순서표’ 배부시간인 10시/13시,
              ‘입장대기시간’14시30분을 꼭 준수해주시기바랍니다.
              <br />
              입장순서표를 배분 받았지만, 훼손 또는 분실로 인하여 숫자의 분별이
              어려울 경우 및 입장순서 대기시간인 14시30분을 지나서 오신 경우
              등은 입장순서표 내용과 상관 없이 우선 입장이 불가하오니, 꼭 규칙을
              엄수해주시기바랍니다. ​
            </p>
            <Divider />
            <Link to='/notice'>
              <button>
                돌아가기 <img src={buttonArrow} alt='detail' />
              </button>
            </Link>
          </Contents>
        </PaddingWrap>
      </FestivalWrap>
      <Footer />
    </Wrapper>
  );
};

export default NoticePage;

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

  @media (max-width: 768px) {
    .square {
      display: none;
    }
  }
`;

const PaddingWrap = styled.div`
  width: 60%;
  max-width: 1544px;

  .flex {
    display: flex;

    p {
      margin-right: 10px;
    }
  }

  p {
    margin-top: -10px;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 420px) {
    .flex {
      p {
        font-size: 14px;
        margin-top: 0px;
      }
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  margin-top: 120px;
  z-index: 9;
  line-height: 4rem;

  @media (max-width: 420px) {
    font-size: 26px;
    line-height: 36px;
  }
`;

const Divider = styled.hr`
  width: 100%;
  background: rgba(58, 58, 58, 1);
  opacity: 0.3;
  margin-bottom: 40px;
`;

const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 200px;

  p {
    font-size: 18px;
    line-height: 32px;
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
    margin-top: 50px;

    img {
      width: 12px;
      height: 12px;
      margin-left: 5px;
    }
  }

  button:hover {
    background: white;
    color: black;
    transition: 0.3s;
  }

  button:hover img {
    content: url(${buttonArrowBlack});
  }

  @media (max-width: 420px) {
    margin-bottom: 100px;

    p {
      font-size: 16px;
      line-height: 28px;
    }

    button {
      margin-top: 0;
    }
  }
`;
