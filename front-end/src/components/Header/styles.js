import { styled } from "styled-components";

export const Container = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
  
  padding: 26px 123px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > div {
    text-wrap: nowrap;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    text-align: right;
    
    margin-right: 10px;

    button {
      background: none;
      border: none;
      text-align: right;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > a img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }
`;