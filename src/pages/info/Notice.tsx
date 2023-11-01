import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Navibar from "../../components/navigation/Navibar";
import { Wrapper } from "../main/StMain";
import square from "../../assets/images/info/img-square.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

type Notice = {
  id: number;
  title: string;
  date: string;
  views: number;
};

const Notice = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageRange, setPageRange] = useState([1, 5]);
  const itemsPerPage = 10;

  const increasePageRange = () => {
    const newEnd =
      pageRange[1] + 5 <= totalPages ? pageRange[1] + 5 : pageRange[1];
    const newStart = newEnd - 4;
    setPageRange([newStart, newEnd]);
  };

  const decreasePageRange = () => {
    const newStart = pageRange[0] - 5 > 0 ? pageRange[0] - 5 : 1;
    setPageRange([newStart, newStart + 4]);
  };

  useEffect(() => {
    const dummyNotices = Array.from({ length: 50 }).map((_, i) => ({
      id: i + 1,
      title: `[2023 서울콘] 현장 DDP 입장 순서 안내 ${i + 1}`,
      date: "2023.07.27.",
      views: 3345,
    }));
    setNotices(dummyNotices);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = notices.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(notices.length / itemsPerPage);

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
              {currentItems.map((notice) => (
                <Link key={notice.id} to='/noticePage'>
                  <div className='list'>
                    <span className='num'>{notice.id}</span>
                    <span className='title'>{notice.title}</span>
                    <div className='rightBox'>
                      <span className='date'>{notice.date}</span>
                      <span className='views'>
                        <span className='viewsText'>| </span>
                        <span className='viewsText'>조회수 : </span>
                        {notice.views}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <Pagination>
              <button onClick={decreasePageRange} className='left'>
                &lt;
              </button>

              {Array.from({ length: 5 }).map((_, index) => {
                const pageNum = index + pageRange[0];
                if (pageNum <= totalPages) {
                  return (
                    <button
                      key={pageNum}
                      className='num'
                      onClick={() => setCurrentPage(pageNum)}
                      style={{
                        color:
                          currentPage === pageNum
                            ? "white"
                            : "rgba(86, 86, 86, 1)",
                      }}
                    >
                      {pageNum}
                    </button>
                  );
                }
                return null;
              })}

              <button onClick={increasePageRange} className='right'>
                &gt;
              </button>
            </Pagination>
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
  max-width: 1544px;

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

  @media (max-width: 600px) {
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

        .viewsText {
          display: none;
        }
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
        padding-left: 50px;
      }

      .views {
        margin-left: 43px;
      }
    }

    span {
      color: white;
    }
  }

  @media (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 100px;

    .top {
      display: none;
    }

    .listBox {
      .list {
        width: 100%;
        height: 70px;
        margin: 0;
        align-items: flex-start;
        flex-direction: column;
        position: relative;

        .num {
          display: none;
        }

        .title {
          position: absolute;
          top: 13px;
          left: -20px;
          color: white;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 80%;
        }

        .rightBox {
          width: 100%;
          position: absolute;
          bottom: 13px;
          left: -50px;

          .viewsText {
            display: inline;
          }

          .viewsText:first-child {
            margin-left: -35px;
            margin-right: 5px;
          }
        }

        span {
          color: rgba(171, 171, 171, 1);
        }
      }
    }
  }
`;

const Pagination = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;

  .num {
    background: none;
    border: none;
    color: rgba(86, 86, 86, 1);
    cursor: pointer;
    margin: 6px;
  }

  .left,
  .right {
    width: 30px;
    height: 30px;
    background: none;
    border: 1px solid white;
    cursor: pointer;
    font-size: 1.1rem;
    color: white;
    margin: 0 10px;
  }
`;
