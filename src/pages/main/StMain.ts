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
  height: 100vh;
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
    line-height: 80px;

    @media (max-width: 312px) {
      line-height: 40px;
    }
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

  @media (max-width: 768px) {
    width: 100%;

    button {
      pointer-events: none;
    }
  }

  @media (max-width: 420px) {
    h1 {
      font-size: 32px;
      margin-bottom: 30px;
    }
    p {
      font-size: 16px;
    }
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

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Bottom = styled.div`
  position: absolute;
  bottom: 100px;
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
  height: auto;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding-top: 100px;
  padding-bottom: 100px;

  img {
    width: 372px;
    position: absolute;
    top: 130px;
    left: 15%;
  }

  h1 {
    font-size: 3rem;
    color: white;
    margin-bottom: 10px;
    font-weight: bold;
    position: relative;
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

  @media (max-width: 768px) {
    img {
      position: absolute;
      top: 250px;
      left: -10%;
    }
  }

  @media (max-width: 600px) {
    img {
      display: none;
    }

    h1 {
      font-size: 26px;
    }

    p {
      font-size: 16px;
      width: 90%;
      text-align: center;
      line-height: 1.5rem;
    }
  }
`;

export const LineupWrap = styled.div`
  width: 100%;
  background: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  height: auto;
  min-height: 800px;

  .padding {
    width: 80%;
    max-width: 1544px;
    overflow-x: visible;
  }

  .text_top {
    width: 100%;
    height: 109px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 70px;
  }

  .left {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 3rem;
      margin-top: 0px;
    }

    p {
      font-size: 1.125rem;
      font-weight: 600;
      margin-top: 0px;
    }
  }

  .right {
    button {
      width: 239px;
      height: 52px;
      border: 1px solid black;
      border-radius: 50px;
      background: none;
      font-size: 1rem;
      cursor: pointer;
      color: black;

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
    width: calc(100% + 100%);
    height: auto;
    display: flex;
    scrollbar-width: none;
    -ms-overflow-style: none;
    white-space: nowrap;
    margin-top: 0px;
    z-index: 9;
    position: relative;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    .imgContainer {
      width: auto;
      flex: 0 0 auto;
      position: relative;
      margin-right: 20px;
      display: inline-block;
      z-index: 2;
      overflow: visible;

      .width {
        width: 260px;
        border-radius: 150px;
        overflow: hidden;
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
      }

      &:hover img {
        transform: scale(1.1);
        filter: brightness(0.3);
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
      padding-right: 28%;
    }
  }

  @media (max-width: 2000px) {
    .padding {
      .imgBox {
        .imgContainer:last-child {
          padding-right: 45%;
        }
      }
    }
  }

  @media (max-width: 1000px) {
    min-height: 700px;
  }

  @media (max-width: 768px) {
    min-height: 800px;

    .text_top {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;

      .left {
        width: 100%;
        padding: 0;
        align-items: flex-start;

        p {
          margin-top: -5px;
        }
      }

      .right {
        width: 100%;
        padding: 0;
        margin-top: -50px;
        margin-bottom: 60px;

        button {
          pointer-events: none;
          margin-top: 80px;
        }
      }
    }

    .imgBox {
      margin-top: 150px;
      .imgContainer {
        .width {
          width: 260px;
        }
      }
      .imgContainer:last-child {
        padding-right: 45%;
      }
    }
  }

  @media (max-width: 530px) {
    width: 100%;
    margin-top: 50px;
    min-height: 650px;

    .padding {
      .text_top {
        width: 80%;

        .left {
          h1 {
            font-size: 26px;
          }
          p {
            font-size: 16px;
            line-height: 1.5rem;
          }
        }
      }

      .imgBox {
        margin-top: 120px;

        .imgContainer {
          .width {
            width: 136px;
          }
          .text {
            position: static;
            transform: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 10px;

            span {
              font-size: 14px;
            }

            b {
              font-size: 20px;
            }
          }

          .hoverText,
          b {
            display: block;
          }

          img {
            &:hover {
              transform: none;
              filter: none;
            }
          }

          &:hover .hoverText,
          &:hover b {
            display: block;
          }
        }
        .imgContainer:last-child {
          padding-right: 45%;
        }
      }
    }
  }

  @media (max-width: 423px) {
    min-height: 900px;
  }
`;

export const ProgramWrap = styled.div`
  width: 100%;
  height: auto;
  background: black;
  display: flex;
  justify-content: center;
  margin-top: -300px;
  position: relative;

  .triangle {
    width: 446px;
    position: absolute;
    top: 350px;
    right: 0px;
  }

  .padding {
    width: 80%;
    max-width: 1544px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

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

  @media (max-width: 768px) {
    .triangle {
      display: none;
    }

    .padding {
      .imgWrap {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;

        .left {
          margin-bottom: 50px;
        }
        .right {
          margin-bottom: -40px;
        }

        .box {
          pointer-events: none;

          img {
            pointer-events: none;
          }
        }
      }
    }
  }

  @media (max-width: 530px) {
    .padding {
      .imgWrap {
        .left {
          h5 {
            font-size: 20px;
          }
        }

        .right {
          h5 {
            font-size: 20px;
          }
        }
      }

      .text2 {
        h1 {
          font-size: 26px;
          margin-bottom: 20px;
        }

        p {
          font-size: 16px;
          line-height: 25px;
        }
      }
    }
  }

  @media (max-width: 420px) {
    margin-top: -530px;

    .padding {
      width: 90%;

      .text2 {
        h1 {
          font-size: 26px;
          margin-bottom: 30px;
        }
        p {
          font-size: 16px;
          line-height: 25px;
        }
      }
      .imgWrap {
        .left {
          margin-right: 0;
        }

        .left,
        .right {
          .box {
            max-width: 100%;

            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
`;

export const NoticeWrap = styled.div`
  width: 100%;
  height: auto;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  position: relative;
  padding-bottom: 200px;

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
          margin-left: 40px;
        }
      }

      .right {
        width: 20%;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        span:first-child {
          flex: 0 0 110px;
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
          width: 220px;

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
          padding-left: 45px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .date {
          flex: 0 1 50px;
          margin-right: 55px;
        }

        .views {
          flex: 0 1 50px;
        }
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

  @media (max-width: 768px) {
    button {
      pointer-events: none;
    }

    .content {
      max-width: 90%;

      .top {
        .left {
          span:first-child {
            margin-left: 0px;
          }

          span:nth-child(2) {
            margin-left: 18px;
          }
        }

        .right {
          span:first-child {
          }
        }
      }

      .listBox {
        .list {
          pointer-events: none;
          .num {
            margin-left: 5px;
          }

          .title {
            padding-left: 30px;
          }

          .date {
            flex-basis: 0px;
          }
        }
      }
    }
  }

  @media (max-width: 570px) {
    h1 {
      font-size: 26px;
    }

    p {
      font-size: 16px;
    }

    .content {
      max-width: 90%;

      .top {
        display: none;
      }
    }

    .listBox {
      width: 100%;

      .list {
        width: 100%;
        height: auto;
        flex-direction: column;
        align-items: flex-start;
        padding: 0;
        position: relative;

        .num {
          display: none;
        }

        .title {
          flex: none;
          width: 100%;
          text-align: left;
          position: absolute;
          top: 10px;
          left: -20px;
        }

        .rightBox {
          width: 100%;
          position: absolute;
          bottom: 10px;
          left: 10px;

          .views {
            .viewsText {
              display: inline;
              color: rgba(171, 171, 171, 1);
            }

            .viewsText:first-child {
              margin-left: -45px;
              margin-right: 10px;
            }
          }
        }

        .date,
        .views {
          flex: none;
          display: inline;
          font-size: 14px;
          color: rgba(171, 171, 171, 1);
        }

        .date {
          flex: none;
          display: inline;
        }

        .views {
          flex: none;
          display: inline;
        }
      }
    }
  }
`;
