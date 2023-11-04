import { styled } from "styled-components";

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

    .input-wrapper{
      display: flex;
      margin: 40px 0 32px;
      gap: 40px;
    }

    .inputRating{
      border-radius: 10px;
      width: 100%;
      height: 56px;

      padding: 19px;

      color: ${({ theme }) => theme.COLORS.WHITE};
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      border: none;

      outline: none;
    }

    textarea{
      width: 100%;
      border: none;
      margin-bottom: 40px;

      display: flex;
      align-items: center;
      border-radius: 10px;
      padding: 19px;

      background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      color: ${({ theme }) => theme.COLORS.GRAY_300};

      resize: none;
    }

    h2{
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-size: 20px;
    }

    .span-wrapper{
      display: flex;
      gap: 24px;

      align-items: center;
      justify-content: start;

      margin-top: 24px;
      padding: 16px;
      border-radius: 8px;

      width: 100%;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

    .button-wrapper{
      display: flex;
      gap: 40px;
    }
  }
`;