import { styled } from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 10px;

  margin-top: 24px;
  padding: 0 16px;

  border: none;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  &:disabled {
    opacity: 50%;
  }

  &:is(.deleteBtn){
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;