import { styled } from "styled-components";

export const Container = styled.span`
  

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  &:is(.fill) > svg{
    fill: ${({ theme }) => theme.COLORS.PINK};
  }
  
`;