import styled from "styled-components";

export const FooterWrap = styled.div`
  width: 100%;
  background: #ff0e14;
  display: flex;
  flex-direction: column; /* 세로로 배치 */
  align-items: center;
  overflow-y: hidden;

  .top {
    flex-grow: 1; /* 여기에 flex-grow 추가 */
    position: relative;
    bottom: 50px;
    width: 100%;
    border-bottom: 0.1px solid #171717;
    padding-left: 2rem;
    padding-bottom: 60px;
    padding-top: 60px;

    img {
      padding-top: 20px;
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
