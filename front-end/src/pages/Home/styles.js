import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 0 116px auto;
  grid-template-areas:
  "search"
  "header"
  "content"
  ;

  > div{
    position: absolute;
    width: 40%;
    left: 30%;
    top: 30px;
  }

  > main {
    grid-area: content;
    overflow-y: hidden;
    width: 100%;

    display: grid;
    grid-template-rows: auto auto;
    grid-template-areas: 
    "mainheader"
    "maincontent"
    ;

    header {
      grid-area: mainheader;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 50px 123px 30px;

      h1{
        font-size: 32px;
      }

      Button{
        width: 207px;
      }

      a{
        height: 48px;
        border-radius: 10px;

        padding: 0 32px;

        background-color: ${({ theme }) => theme.COLORS.PINK};

        display: flex;
        align-items: center;
        justify-self: end;
        
        font-size: 16px;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

        > svg {
          margin-right: 8px;
          font-size: 20px;
        }
      }

    }
  }
`;

export const Content = styled.div`
  grid-area: maincontent;
  margin: 0 123px 20px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    background: transparent;
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }
`;