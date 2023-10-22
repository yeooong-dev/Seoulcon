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
              <div className='right'>
                <span>등록일</span>
                <span>조회수</span>
              </div>
            </div>
            <Divider2 />

            <div className='listBox'>
              <Link to='/noticePage'>
                <div className='list'>
                  <span className='num'>1</span>
                  <span className='title'>
                    [2023 서울콘] 현장 DDP 입장 순서 안내
                  </span>
                  <div className='rightBox'>
                    <span className='date'>2023.07.27.</span>
                    <span className='views'>3,345</span>
                  </div>
                </div>
              </Link>

              <Link to='/noticePage'>
                <div className='list'>
                  <span className='num'>1</span>
                  <span className='title'>
                    [2023 서울콘] 현장 DDP 입장 순서 안내
                  </span>
                  <div className='rightBox'>
                    <span className='date'>2023.07.27.</span>
                    <span className='views'>3,345</span>
                  </div>
                </div>
              </Link>

              <Link to='/noticePage'>
                <div className='list'>
                  <span className='num'>1</span>
                  <span className='title'>
                    [2023 서울콘] 현장 DDP 입장 순서 안내
                  </span>
                  <div className='rightBox'>
                    <span className='date'>2023.07.27.</span>
                    <span className='views'>3,345</span>
                  </div>
                </div>
              </Link>

              <Link to='/noticePage'>
                <div className='list'>
                  <span className='num'>1</span>
                  <span className='title'>
                    [2023 서울콘] 현장 DDP 입장 순서 안내
                  </span>
                  <div className='rightBox'>
                    <span className='date'>2023.07.27.</span>
                    <span className='views'>3,345</span>
                  </div>
                </div>
              </Link>

              <Link to='/noticePage'>
                <div className='list'>
                  <span className='num'>1</span>
                  <span className='title'>
                    [2023 서울콘] 현장 DDP 입장 순서 안내
                  </span>
                  <div className='rightBox'>
                    <span className='date'>2023.07.27.</span>
                    <span className='views'>3,345</span>
                  </div>
                </div>
              </Link>

              <Link to='/noticePage'>
                <div className='list'>
                  <span className='num'>1</span>
                  <span className='title'>
                    [2023 서울콘] 현장 DDP 입장 순서 안내
                  </span>
                  <div className='rightBox'>
                    <span className='date'>2023.07.27.</span>
                    <span className='views'>3,345</span>
                  </div>
                </div>
              </Link>

              <Link to='/noticePage'>
                <div className='list'>
                  <span className='num'>1</span>
                  <span className='title'>
                    [2023 서울콘] 현장 DDP 입장 순서 안내
                  </span>
                  <div className='rightBox'>
                    <span className='date'>2023.07.27.</span>
                    <span className='views'>3,345</span>
                  </div>
                </div>
              </Link>

              <Link to='/noticePage'>
                <div className='list'>
                  <span className='num'>1</span>
                  <span className='title'>
                    [2023 서울콘] 현장 DDP 입장 순서 안내
                  </span>
                  <div className='rightBox'>
                    <span className='date'>2023.07.27.</span>
                    <span className='views'>3,345</span>
                  </div>
                </div>
              </Link>

              <Link to='/noticePage'>
                <div className='list'>
                  <span className='num'>1</span>
                  <span className='title'>
                    [2023 서울콘] 현장 DDP 입장 순서 안내
                  </span>
                  <div className='rightBox'>
                    <span className='date'>2023.07.27.</span>
                    <span className='views'>3,345</span>
                  </div>
                </div>
              </Link>

              <Link to='/noticePage'>
                <div className='list'>
                  <span className='num'>1</span>
                  <span className='title'>
                    [2023 서울콘] 현장 DDP 입장 순서 안내
                  </span>
                  <div className='rightBox'>
                    <span className='date'>2023.07.27.</span>
                    <span className='views'>3,345</span>
                  </div>
                </div>
              </Link>
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

  @media (max-width: 768px) {
    .square {
      display: none;
    }
  }
`;

const PaddingWrap = styled.div`
  width: 60%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  margin-top: 120px;
  z-index: 9;

  @media (max-width: 375px) {
    font-size: 26px;
  }
`;

const Divider = styled.hr`
  width: 100%;
  background: rgba(58, 58, 58, 1);
  opacity: 0.3;

  @media (max-width: 420px) {
    display: none;
  }
`;

const Divider2 = styled.hr`
  width: 100%;
  background: rgba(58, 58, 58, 1);
  margin: 0;
  margin-top: 10px;
`;

const Contents = styled.div`
  width: 100%;
  margin-bottom: 200px;

  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    .left {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: start;

      span:first-child {
        flex: 0 0 45px;
        margin-left: 10px;
      }

      span:nth-child(2) {
        flex: 2;
        margin-left: 15px;
      }
    }

    .right {
      width: 20%;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      span:first-child {
        flex: 0 0 100px;
        text-align: left;
      }

      span:nth-child(2) {
        flex: 0 0 130px;
        text-align: center;
      }
    }
    span {
      color: white;
    }
  }

  hr {
    border-top: 1px solid white;
    margin: 0px 0;
  }

  .listBox {
    display: flex;
    justify-content: center;
    flex-direction: column;

    .list {
      display: flex;
      align-items: center;
      width: 100%;
      height: 65px;
      border-bottom: 1px solid rgba(58, 58, 58, 1);
      cursor: pointer;

      .rightBox {
        width: 260px;
      }

      &:hover {
        background: #171717;
        transition: 0.1s;
      }

      .num {
        flex: 0 1 50px;
        text-align: center;
        margin-left: 20px;
      }

      .title {
        flex: 1;
        text-align: left;
        padding-left: 20px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      
      }

      .date {
        margin-right: 0px;
        padding-left:50px;
      }

      .views {
        margin-left: 43px;
      }
    }

    span {
      color: white;
    }
  }

  @media (max-width: 420px) {
    font-size: 14px;
    margin-bottom: 100px;

    .top {
      display: none;
    }

    .listBox {
      .list {
        width: 100%;
        align-items: flex-start;
        flex-direction: column;
        position: relative;
  
        .num {
          display: none;
        }
  
        .title {
          position: absolute;
          top: 10px;
          left: -20px;
        }
  
        .rightBox {
          position: absolute;
          bottom: 10px;
          left: -50px;
  
          span {
            color: rgba(171, 171, 171, 1);
          }
        }
    }
  }
`;
