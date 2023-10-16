import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Navibar from "../../components/navigation/Navibar";
import { Wrapper } from "../main/StMain";
import square from "../../assets/images/info/img-square.svg";
import { Link } from "react-router-dom";

const Notice = () => {
  return (
    <Wrapper>
      <Navibar />
      <FestivalWrap>
        <PaddingWrap>
          <img src={square} alt='도형' className='square' />
          <Title>공지사항</Title>
          <Divider />
          <Contents>
            <div className='top'>
              <div className='left'>
                <span>순서</span>
                <span>제목</span>
              </div>
              <span>등록일</span>
            </div>
            <Divider2 />

            <div className='list'>
              <span className='num'>1</span>
              <Link to='/noticePage'>
                <span className='title'>
                  [2023 서울콘] 현장 DDP 입장 순서 안내
                </span>
              </Link>
              <span className='date'>2023.07.27.</span>
            </div>

            <div className='list'>
              <span className='num'>1</span>
              <span className='title'>
                [2023 서울콘] 현장 DDP 입장 순서 안내
              </span>
              <span className='date'>2023.07.27.</span>
            </div>
            <div className='list'>
              <span className='num'>1</span>
              <span className='title'>
                [2023 서울콘] 현장 DDP 입장 순서 안내
              </span>
              <span className='date'>2023.07.27.</span>
            </div>
            <div className='list'>
              <span className='num'>1</span>
              <span className='title'>
                [2023 서울콘] 현장 DDP 입장 순서 안내
              </span>
              <span className='date'>2023.07.27.</span>
            </div>
            <div className='list'>
              <span className='num'>1</span>
              <span className='title'>
                [2023 서울콘] 현장 DDP 입장 순서 안내
              </span>
              <span className='date'>2023.07.27.</span>
            </div>
            <div className='list'>
              <span className='num'>1</span>
              <span className='title'>
                [2023 서울콘] 현장 DDP 입장 순서 안내
              </span>
              <span className='date'>2023.07.27.</span>
            </div>
            <div className='list'>
              <span className='num'>1</span>
              <span className='title'>
                [2023 서울콘] 현장 DDP 입장 순서 안내
              </span>
              <span className='date'>2023.07.27.</span>
            </div>
            <div className='list'>
              <span className='num'>1</span>
              <span className='title'>
                [2023 서울콘] 현장 DDP 입장 순서 안내
              </span>
              <span className='date'>2023.07.27.</span>
            </div>
            <div className='list'>
              <span className='num'>1</span>
              <span className='title'>
                [2023 서울콘] 현장 DDP 입장 순서 안내
              </span>
              <span className='date'>2023.07.27.</span>
            </div>
            <div className='list'>
              <span className='num'>1</span>
              <span className='title'>
                [2023 서울콘] 현장 DDP 입장 순서 안내
              </span>
              <span className='date'>2023.07.27.</span>
            </div>
          </Contents>
        </PaddingWrap>
      </FestivalWrap>
      <Footer />
    </Wrapper>
  );
};

export default Notice;

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

const Divider2 = styled.hr`
  width: 100%;
  background: rgba(58, 58, 58, 1);
`;

const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 200px;

  .list {
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(58, 58, 58, 1);

    a {
      text-decoration: none;
      color: inherit;
      display: flex; 
      align-items: center;
      justify-content: flex-start;
      width: 64%; 
      overflow: hidden;
      
      &.title {
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }

  .top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 10px;

    .left {
      display: flex;
      width: 80%;
      justify-content: space-between;

      span {
        display: flex;
        align-items: center;

        &:first-child {
          justify-content: center;
          width: 10%;
        }
        &:last-child {
          justify-content: flex-start;
          width: 85%;
        }
      }
    }

    span:last-child {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 20%;
    }
  }

  div:not(.top) {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .num {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 8%;
    }

    .title {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 64%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .date {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 20%;
    }
  }
`;
