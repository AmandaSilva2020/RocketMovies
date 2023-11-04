import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content"
  ;

  > main {
    grid-area: content;
    justify-content: center;
    margin: 40px 123px;
    padding-right: 16px;

    overflow-y: auto;
    &::-webkit-scrollbar {
      background: transparent;
      width: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 8px;
    }

    h1{
      margin-top: 24px;
    }

    .row_1{
      display: flex;
      align-items: baseline;
      margin-bottom: 20px;
    }

    .row_2{
      display: flex;
      align-items: center;
      margin-bottom: 40px;
    }

    .rating_wrapper{
      display: flex;
      gap: 10px;
      margin-left: 20px;
    }

    .rating_wrapper svg{
      font-size: 20px;
    }

    .row_2 img{
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }

    .row_2 svg{
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    .row_2 span {
      margin-inline: 8px;
    }

    p {
      margin-top: 40px;
    }

    .button-wrapper{
      margin-top: 10px;
      display: flex;
      gap: 40px;
    }

  }

`;