import styled from "styled-components";

export const FooterWrap = styled.div`
  width: 100%;
  background: #ff0e14;
  display: flex;
  align-items: center;
  overflow-y: hidden;

  .top {
    position: relative;
    bottom: 50px;
    width: 100%;
    height: 170px;
    border-bottom: 0.1px solid #171717;
    padding-left: 2rem;

    img {
      padding-top: 70px;
      width: 120px;
    }
  }

  .bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: red;
    padding-left: 2rem;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 999;

    .right {
      padding-right: 4rem;

      img {
        margin-left: 10px;
        margin-bottom: -4px;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 470px) {
    .top {
      left: -15px;
      border: none;
    }

    .bottom {
      height: 70px;
      bottom: 0px;
      left: -15px;
      font-size: 12px;
      flex-direction: column;
      align-items: flex-start;

      .right {
        position: absolute;
        bottom: 10px;

        img:first-child {
          margin-left: 0;
        }
      }
    }
  }
`;
