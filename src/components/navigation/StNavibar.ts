import styled from "styled-components";

interface NaviWrapProps {
  isSeoulConOpen?: boolean;
  isProgramOpen?: boolean;
  isInfoOpen?: boolean;
  isScrolled: boolean;
}

export const Dim = styled.div`
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  display: none;

  &.visible {
    display: block;
  }
`;

export const NaviWrap = styled.div<NaviWrapProps>`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  .background-blur {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: ${(props) => (props.isScrolled ? "blur(5px)" : "none")};
    -webkit-backdrop-filter: ${(props) =>
      props.isScrolled ? "blur(5px)" : "none"};
    filter: ${(props) => (props.isScrolled ? "blur(5px)" : "none")};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  .padding {
    position: absolute;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);

    .mobile-menu-toggle {
      display: none;
    }
  }

  .left {
    padding-left: 30px;
    z-index: 999;

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

      &:nth-last-child(4) {
        margin-right: 50px;
      }
    }

    button span {
      display: inline-block;
      position: relative;
    }

    button span::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      height: 1px;
      width: 0;
      background-color: white;
    }

    .menu-container:hover button span::after {
      width: 100%;
      bottom: -3px;
    }

    button.active span::after {
      width: 100%;
      bottom: -3px;
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
      width: 237px;

      a {
        display: block;
        width: 100%;

        button {
          width: 100%;
          padding: 0px 15px;
          text-align: left;
          height: 58px;
          border: none;
          font-size: 14px;

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

  @media (max-width: 820px) {
    .padding {
      height: 60px;

      .left {
        img {
          width: 85%;
        }
      }

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
          flex-direction: colum;
          justify-content: start;
          padding: 0;
          display: flex;
          max-width: 100%;
          padding: 15px 0;
          border-bottom: 1px solid rgba(58, 58, 58, 1);
          color: rgba(199, 199, 199, 1);

          a {
            width: 100%;

            button {
              font-size: 14px;
              height: auto;
              color: rgba(199, 199, 199, 1);
              padding: 15px 0;
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
      hr,
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

  @media (max-width: 600px) {
    .mobile-menu-toggle {
      padding-right: 20px;
    }

    .left {
      padding-left: 10px;
    }

    .right {
      width: 65%;
      padding: 0;
      display: flex;
      align-items: center;
      flex-direction: column;

      .menu-container {
        width: 85%;
      }

      .menu-container:first-child {
        margin-top: 80px;
      }

      .ko,
      .en {
        bottom: 0px;
        left: 30px;
      }

      hr {
        position: absolute;
        bottom: 35px;
        left: 85px;
      }

      .ko {
        position: absolute;
        left: 95px;
      }
    }
  }
`;
