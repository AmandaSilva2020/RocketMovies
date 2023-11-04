import { styled } from "styled-components";

export const Container = styled.a`
  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 16px;
  display: flex;
  align-items: center;
  
  > svg {
    margin-right: 8px;
    font-size: 18px;
  }
`;