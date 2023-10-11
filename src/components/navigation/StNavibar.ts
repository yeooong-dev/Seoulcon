import styled from "styled-components";

export const NaviWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

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

    button {
      background: none;
      border: none;
      padding: 0 30px;
      color: white;
      cursor: pointer;
      height: 80px;
      display: flex;
      align-items: center;
      transition: color 0.3s;
      font-size: 1rem;

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
      background-color: white;
      border: none;
      width: 1px;
    }
  }
`;
