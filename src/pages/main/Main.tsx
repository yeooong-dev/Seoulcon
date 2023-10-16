import Navibar from "../../components/navigation/Navibar";
import mainImg from "../../assets/images/main/img-mainBnr.jpg";
import {
  MainWrap,
  Bottom,
  BtnBetween,
  TextCenter,
  Wrapper,
  YoutubeWrap,
  LineupWrap,
  ProgramWrap,
  NoticeWrap,
} from "./StMain";
import buttonArrow from "../../assets/images/main/button-arrow-white.svg";
import buttonArrowBlack from "../../assets/images/main/button-arrow-black.svg";
import leftBtn from "../../assets/images/main/ico-roundArrow-left.svg";
import RightBtn from "../../assets/images/main/ico-roundArrow-right.svg";
import mainVideo from "../../assets/video/main-movie.mp4";
import lineImg1 from "../../assets/images/main/img-influencer1.png";
import lineImg2 from "../../assets/images/main/img-influencer2.png";
import lineImg3 from "../../assets/images/main/img-influencer3.png";
import lineImg4 from "../../assets/images/main/img-influencer4.png";
import lineImg5 from "../../assets/images/main/img-influencer5.png";
import lineImg6 from "../../assets/images/main/img-influencer6.png";
import lineImg7 from "../../assets/images/main/img-influencer7.png";
import lineImg8 from "../../assets/images/main/img-influencer8.png";
import lineImg9 from "../../assets/images/main/img-influencer9.png";
import lineImg10 from "../../assets/images/main/img-influencer10.png";
import lineImg11 from "../../assets/images/main/img-influencer11.png";
import imgProgram1 from "../../assets/images/main/img-program1.jpg";
import imgProgram2 from "../../assets/images/main/img-program2.jpg";
import imgProgram3 from "../../assets/images/main/img-program3.jpg";
import imgProgram4 from "../../assets/images/main/img-program4.jpg";
import Footer from "../../components/footer/Footer";
import round from "../../assets/images/seoulcon/img-round.svg";
import triangle from "../../assets/images/program/img-triangle.svg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <Wrapper>
      <MainWrap>
        <Navibar />
        <img src={mainImg} alt='main_img' />
        <TextCenter>
          <p>2023 SEOULCON INFLUENCER</p>
          <h1>영국남자, T1, 박재범</h1>
          <button>
            자세히보기 <img src={buttonArrow} alt='detail' />
          </button>
        </TextCenter>
        <BtnBetween>
          <button>
            <img src={leftBtn} alt='left_button' />
          </button>
          <button>
            <img src={RightBtn} alt='right_button' />
          </button>
        </BtnBetween>
        <Bottom>
          <div>
            <button></button>
          </div>
        </Bottom>
      </MainWrap>

      <YoutubeWrap>
        <img src={round} alt='원' />
        <h1>2023 서울콘</h1>
        <p>2023 연말, 인플루언서와 당신을 전세계로 연결합니다</p>
        <div>
          <video muted autoPlay loop>
            <source src={mainVideo} type='video/mp4' />
          </video>
        </div>
      </YoutubeWrap>

      <LineupWrap>
        <div className='padding'>
          <div className='text'>
            <div className='left'>
              <h1>인플루언서 라인업</h1>
              <p>전 세계 30개국, 3,000명, 24억 팔로워와 함께해 보세요</p>
            </div>

            <div className='right'>
              <Link to='/lineup'>
                <button>
                  한번에 보기 <img src={buttonArrowBlack} alt='detail' />
                </button>
              </Link>
            </div>
          </div>

          <div className='imgBox'>
            <img src={lineImg1} alt='lineup' />
            <img src={lineImg2} alt='lineup' />
            <img src={lineImg3} alt='lineup' />
            <img src={lineImg4} alt='lineup' />
            <img src={lineImg5} alt='lineup' />
            <img src={lineImg6} alt='lineup' />
            <img src={lineImg7} alt='lineup' />
            <img src={lineImg8} alt='lineup' />
            <img src={lineImg9} alt='lineup' />
            <img src={lineImg10} alt='lineup' />
            <img src={lineImg11} alt='lineup' />
          </div>
        </div>
      </LineupWrap>

      <ProgramWrap>
        <img src={triangle} alt='triangle' className='triangle' />
        <div className='padding'>
          <div className='text2'>
            <h1>서울콘 프로그램</h1>
            <p>서울콘이 준비한 다양한 프로그램을 만나보세요</p>
          </div>

          <div className='imgWrap'>
            <div className='left'>
              <p>01</p>
              <h5>페스티벌</h5>
              <img src={imgProgram1} alt='페스티벌' />
            </div>

            <div className='right'>
              <p>02</p>
              <h5>컨퍼런스</h5>
              <img src={imgProgram2} alt='컨버런스' />
            </div>
          </div>

          <div className='imgWrap'>
            <div className='left'>
              <p>03</p>
              <h5>콘텐츠, 패션, 뷰티</h5>
              <img src={imgProgram3} alt='콘텐츠, 패션, 뷰티' />
            </div>

            <div className='right'>
              <p>04</p>
              <h5>공연&엔터테인멘트</h5>
              <img src={imgProgram4} alt='공연&엔터테인멘트' />
            </div>
          </div>
        </div>
      </ProgramWrap>

      <NoticeWrap>
        <h1>공지사항</h1>
        <p>서울콘의 새로운 소식을 전해드립니다</p>
        <div className='content'>
          <div className='top'>
            <div className='left'>
              <span>순서</span>
              <span>제목</span>
            </div>
            <span>등록일</span>
          </div>
          <hr />

          <div>
            <span className='num'>1</span>
            <span>[2023 서울콘] 현장 DDP 입장 순서 안내</span>
            <span>2023.07.27.</span>
          </div>
        </div>
        <Link to='/notice'>
          <button>
            자세히 보기 <img src={buttonArrow} alt='detail' />
          </button>
        </Link>
      </NoticeWrap>

      <Footer />
    </Wrapper>
  );
};

export default Main;
