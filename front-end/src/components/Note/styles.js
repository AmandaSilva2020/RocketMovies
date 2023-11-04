import { styled } from "styled-components";

export const Container = styled.button`
  width: 100%;
  margin-bottom: 24px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};

  border: none;
  border-radius: 16px;

  padding: 32px;

  text-align: left;

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 24px;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    height: 40px;

    font-size: 16px;
    font-family: 'Roboto', sans-serif;

    overflow: hidden;
    text-overflow: ellipsis;

    margin-top: 15px;
  }

  > section {
    margin-top: 15px;
  }
`;