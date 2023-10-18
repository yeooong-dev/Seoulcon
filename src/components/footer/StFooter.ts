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

    .right {
      padding-right: 4rem;

      img {
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }
`;
