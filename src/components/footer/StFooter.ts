import styled from "styled-components";

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
