import styled from "styled-components";
import buttonArrow from "../../assets/images/main/button-arrow-white.svg";
import buttonArrowBlack from "../../assets/images/main/button-arrow-black.svg";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  overflow-x: hidden;
`;

export const MainWrap = styled.div`
  width: 100%;
  height: 1080px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TextCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  p {
    color: white;
    font-size: 1.375rem;
    font-weight: bold;
  }

  h1 {
    color: white;
    font-size: 3.875rem;
    margin-top: 0px;
    margin-bottom: 80px;
  }

  button {
    width: 239px;
    height: 52px;
    background: none;
    color: white;
    border: 1px solid white;
    border-radius: 50px;
    cursor: pointer;
    font-size: 1rem;

    img {
      width: 10px;
      height: 10px;
      margin-left: 5px;
    }
  }

  button:hover {
    background: white;
    color: black;
    transition: 0.2s;
  }

  button:hover img {
    content: url(${buttonArrowBlack});
  }
`;

export const BtnBetween = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0;

  button {
    background: none;
    width: 55px;
    height: 100%;
    border-radius: 50%;
    cursor: pointer;
    border: none;
  }

  button:first-child {
    margin-left: 50px;
  }

  button:last-child {
    margin-right: 50px;
  }
`;

export const Bottom = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);

  div {
    width: 201px;
    height: 2px;
    background: linear-gradient(0deg, #565656, #565656),
      linear-gradient(0deg, #3a3a3a, #3a3a3a);
    cursor: pointer;
    display: flex;

    button {
      width: 67px;
      background: white;
      border: none;
      color: white;
    }
  }
`;

export const YoutubeWrap = styled.div`
  width: 100%;
  height: 1080px;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  img {
    width: 372px;
    position: absolute;
    top: 130px;
    left: 350px;
  }

  h1 {
    font-size: 3rem;
    color: white;
    margin-bottom: 10px;
    font-weight: bold;
  }

  p {
    font-size: 1.125rem;
    color: white;
    margin-bottom: 50px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    video {
      width: 90%;
      object-fit: cover;
      z-index: 10;
    }
  }
`;

export const LineupWrap = styled.div`
  width: 100%;
  height: 880px;
  background: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;

  .padding {
    width: 100%;
    padding-left: 25rem;
  }

  .text_top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
  }

  .left {
    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.125rem;
      margin-bottom: 100px;
    }
  }

  .right {
    padding-right: 25rem;

    button {
      width: 239px;
      height: 52px;
      border: 1px solid black;
      border-radius: 50px;
      background: none;
      font-size: 1rem;
      cursor: pointer;

      img {
        width: 12px;
        height: 12px;
        margin-left: 5px;
        transition: 0.3s;
        z-index: 999;
      }
    }

    button:hover img {
      content: url(${buttonArrow});
    }

    button:hover {
      background: black;
      color: white;
      transition: 0.2s;
    }
  }

  .imgBox {
    width: 100%;
    display: flex;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    white-space: nowrap;
    margin-top: -50px;

    .imgContainer {
      width: auto;
      flex: 0 0 auto;
      position: relative;
      margin-right: 20px;
      display: inline-block;

      .width {
        width: 300px;
        height: 440px;
        overflow: hidden;
        border-radius: 150px;
      }

      .text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        display: flex;
        flex-direction: column;
      }

      img {
        position: relative;
        width: 100%;
        z-index: 9;
        transition: transform 0.3s ease, filter 0.3s ease;
        transform-origin: center center;

        &:hover {
          transform: scale(1.1);
          filter: brightness(0.3);
        }
      }

      .hoverText,
      b {
        display: none;
        z-index: 10;
      }

      span {
        color: rgba(82, 243, 255, 1);
        font-size: 16px;
        color: white;
        font-weight: bold;
        margin-bottom: 10px;
      }

      b {
        color: rgba(82, 243, 255, 1);
        font-size: 36px;
        font-weight: bold;
      }

      &:hover .hoverText,
      &:hover b {
        display: block;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }
    .imgContainer:last-child {
      margin-right: 220px;
    }
  }
`;

export const ProgramWrap = styled.div`
  width: 100%;
  height: 1800px;
  background: black;
  display: flex;
  justify-content: center;
  margin-top: -300px;
  position: relative;

  .triangle {
    width: 446px;
    position: absolute;
    top: 350px;
    right: -100px;
  }

  .padding {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .text2 {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      align-self: flex-start;
      margin-top: 250px;
      margin-bottom: 30px;

      h1 {
        font-size: 3rem;
        color: white;
      }
      p {
        font-size: 1.125rem;
        margin-top: -8px;
        color: white;
      }
    }

    .imgWrap {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 100px;

      .left {
        margin-right: 20px;
      }

      .left,
      .right {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .box {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;

          &:hover::after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100%;
            cursor: pointer;
            pointer-events: none;
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.5) 0%,
              rgba(47, 83, 0, 0.5) 100%
            );
            z-index: 1;
          }

          img {
            width: 100%;
            height: auto;
            z-index: 0;
            position: relative;
            transition: transform 0.5s;
            cursor: pointer;
            will-change: transform;

            &:hover {
              transform: scale(1.1);
              transition: 0.5s;
            }
          }
        }

        p {
          font-size: 1rem;
          color: #bfff6a;
        }

        h5 {
          font-size: 2.25rem;
          color: white;
          margin-top: 0px;
          margin-bottom: 30px;
        }
      }
    }
  }
`;

export const NoticeWrap = styled.div`
  width: 100%;
  height: 800px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;

  h1 {
    font-size: 3rem;
    color: white;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.125rem;
    color: white;
    margin-bottom: 50px;
  }

  .content {
    width: 100%;
    max-width: 60%;

    .top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;

      .right {
        span {
          margin-right: 120px;
        }
      }

      .left {
        width: 80%;
        display: flex;
        align-items: center;

        span:first-child {
          width: 100%;
          flex: 0 0 50px;
          text-align: center;
        }

        span:nth-child(2) {
          margin-left: 80px;
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
      display: flex;
      flex-direction: column;

      .list {
        display: flex;
        align-items: center;
        width: 100%;
        height: 65px;
        border-bottom: 1px solid rgba(58, 58, 58, 1);
        cursor: pointer;

        &:hover {
          background: #171717;
          transition: 0.1s;
        }

        .num {
          flex: 0 0 50px;
          text-align: center;
          margin-left: 20px;
        }
      }

      span:first-child {
        flex: 0 0 50px;
        text-align: center;
      }

      span:nth-child(2) {
        flex: 2;
        text-align: left;
        padding-left: 80px;
      }

      span:last-child {
        flex: 0 0 140px;
        text-align: left;
      }

      span {
        color: white;
      }
    }
  }

  button {
    width: 239px;
    height: 52px;
    border: 1px solid white;
    border-radius: 50px;
    background: none;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 50px;
    color: white;

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
`;
