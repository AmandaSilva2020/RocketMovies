import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;

  margin-bottom: 8px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  >input {
    width: 100%;
    height: 56px;

    padding: 19px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    border: none;

    outline: none;
  }

  > svg {
    margin-left: 16px;
  }

  font-size: 14px;

  

  &::placeholder{
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;