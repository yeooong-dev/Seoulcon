import styled from "styled-components";

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
  }

  h1 {
    color: white;
    font-size: 3.875rem;
    margin-top: -10px;
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
    width: 48px;
    height: 48px;
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
    height: 1px;
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

  .text {
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
      margin-top: -15px;
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
      }
    }
  }

  .imgBox {
    display: flex;
    overflow-x: auto;
    max-width: 100%;
    scrollbar-width: none;
    -ms-overflow-style: none;

    img {
      width: 260px;
      margin-right: 20px;
    }

    img:last-child {
      margin-right: 0;
    }

    &::-webkit-scrollbar {
      display: none;
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
      margin-bottom: 20px;

      h1 {
        font-size: 3rem;
        color: white;
      }
      p {
        font-size: 1.125rem;
        margin-top: -15px;
        color: white;
      }
    }

    .imgWrap {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 100px;

      .left,
      .right {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-right: 20px;

        p {
          font-size: 1rem;
          color: #bfff6a;
        }
        h5 {
          font-size: 2.25rem;
          color: white;
          margin-top: -5px;
          margin-bottom: 30px;
        }
        img {
          width: 100%;
          height: auto;
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
    margin-bottom: 100px;
  }

  .content {
    width: 100%;
    max-width: 55%;
    padding-top: 20px;

    .top {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;

      .left {
        display: flex;
        align-items: center;
        span:first-child {
          width: 50px;
          text-align: center;
        }
      }

      span:last-child {
        flex: 0 0 120px;
      }

      span {
        color: white;
      }
    }

    hr {
      border-top: 1px solid white;
      margin: 20px 0;
    }

    div {
      display: flex;
      justify-content: space-between;

      span:first-child {
        flex: 0 0 120px;
        text-align: center;
      }

      span:last-child {
        flex: 0 0 140px;
      }

      span:nth-child(2) {
        flex: 2;
        padding-left: 80px;
      }

      span {
        color: white;
      }

      .num {
        margin-left: 20px;
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
    margin-top: 100px;
    color: white;

    img {
      width: 12px;
      height: 12px;
      margin-left: 5px;
    }
  }
`;

export const FooterWrap = styled.div`
  width: 100%;
  height: 190px;
  background: #ff0e14;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-y: hidden;

  .left {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 100px;

    img {
      width: 130px;
    }

    p {
      margin: 0;
    }
  }

  .right {
    padding: 5rem;
    margin-top: 160px;

    div {
      grid-row: 5;
      display: flex;
      gap: 1rem;

      img {
        width: 24px;
        cursor: pointer;
      }
    }
  }
`;
