import styled from "styled-components";

interface NaviWrapProps {
  isSeoulConOpen?: boolean;
  isProgramOpen?: boolean;
  isInfoOpen?: boolean;
}

export const NaviWrap = styled.div<NaviWrapProps>`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  .padding {
    position: absolute;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);

    .mobile-menu-toggle {
      display: none;
    }
  }

  .left {
    padding-left: 30px;

    img {
      display: flex;
      align-items: center;
    }
  }

  .left img,
  .right button {
    opacity: 1;
  }

  .right {
    display: flex;
    align-items: center;

    .toggle {
      display: none;
    }

    .menu-container {
      position: relative;
      display: inline-block;
    }

    button {
      background: none;
      border: none;
      padding: 0 30px;
      color: white;
      cursor: pointer;
      height: 80px;
      display: flex;
      align-items: center;
      font-size: 1rem;
      position: relative;

      &:hover {
        color: #ccc;
      }

      &:nth-last-child(4) {
        margin-right: 50px;
      }
    }

    hr {
      height: 10px;
      margin: 0 -15px;
      background: white;
      border: none;
      width: 1px;
      opacity: 40%;
    }

    .en {
      color: white;
      opacity: 40%;
    }

    .submenu {
      display: flex;
      flex-direction: column;
      position: absolute;
      background: black;
      left: 0%;
      top: 100%;
      width: 300px;

      a {
        display: block;
        width: 100%;

        button {
          width: 100%;
          padding: 0px 30px;
          text-align: left;
          height: 65px;
          border: none;

          &:hover {
            background: red;
            color: black;
          }
        }

        &:not(:last-child) button {
          border-bottom: 1px solid #565656;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .padding {
      .mobile-menu-toggle {
        display: flex;
      }
    }
    .mobile-menu-toggle {
      display: block;
      padding-right: 30px;
      align-items: center;
      z-index: 1000;
      background: none;
      border: none;
      cursor: pointer;
    }

    .right {
      position: absolute;
      top: 0;
      right: -100%;
      width: 40%;
      height: 100vh;
      background-color: black;
      flex-direction: column;
      align-items: flex-start;
      transition: right 0.3s ease-in-out;
      padding: 2rem;

      &.open {
        right: 0;
      }

      button,
      hr {
        padding: 0;
      }

      .toggle {
        display: flex;
      }

      .menu-container {
        width: 100%;

        button {
          display: flex;
          width: 100%;
          text-align: left;
          justify-content: space-between;
          padding: 0;

          .toggle {
            width: 20px;
          }
        }

        .submenu {
          width: 100%;
          height: auto;
          position: static;
          flex-direction: row;
          justify-content: start;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          max-width: 100%;
          padding: 20px 0;
          border-bottom: 1px solid rgba(58, 58, 58, 1);
          color: rgba(199, 199, 199, 1);

          a {
            width: 50%;

            button {
              font-size: 14px;
              height: auto;
              color: rgba(199, 199, 199, 1);
              padding: 10px 0;
              pointer-events: none;
              width: 100%;
              border: none;
            }
          }
        }

        .col {
          a {
            width: 100%;
          }
        }

        .menuBtn,
        .menuBtn2,
        .menuBtn3,
        .menuBtn4 {
          border-bottom: 1px solid rgba(58, 58, 58, 1);
        }
      }

      .ko,
      .hr,
      .en {
        position: absolute;
        bottom: 50px;
        display: inline-block;
        vertical-align: middle;
        display: flex;
        flex-direction: row;
      }

      hr {
        position: absolute;
        bottom: 85px;
        left: 85px;
      }

      .ko {
        position: absolute;
        left: 95px;
      }

      .menu-container:first-child {
        margin-top: 50px;
      }
    }
  }
`;
