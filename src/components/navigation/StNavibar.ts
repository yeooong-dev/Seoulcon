import styled from "styled-components";

export const NaviWrap = styled.div`
  width: 100%;
  position: relative;
  top: 0;
  left: 0;

  .padding {
    position: absolute;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    z-index: -1;
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

    .mobile-menu-toggle {
      display: none;
      cursor: pointer;
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

    @media (max-width: 768px) {
      position: relative;

      .menu-container,
      .attend,
      .ko,
      .en,
      hr {
        display: none;
      }

      .mobile-menu-toggle {
        position: absolute;
        right: 0;
        display: flex;
        width: 90px;
        height: auto;
        z-index: 999;
      }

      &.open .menu-container,
      &.open .menu-container + button,
      &.open .attend,
      &.open .ko,
      &.open .en,
      &.open .submenu {
        display: block;
      }

      &.open .menu-container {
        transform: translateX(0%);
      }

      .menu-container {
        position: fixed;
        top: 0;
        right: 0;
        width: 300px;
        height: 100vh;
        background: black;
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
        display: flex;
        flex-direction: column;

        .menuBtn3 {
          position: absolute;
          top: 200px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    background: red;

    .padding {
      width: 100%;
    }
  }

  @media (max-width: 375px) {
    .padding {
      width: 100%;

      .left {
        padding-left: 10px;
      }

      .right {
        button {
          width: 100%;
          margin-right: 10px;
        }
      }
    }
  }
`;
