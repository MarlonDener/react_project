import styled, { css } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    > h1 {
      color: ${theme.colors.primaryColor};
    }
  `}
`;
export const Main = styled.div`
 ${({ theme }) => css`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   position: absolute;
   top: 40%;
   gap: 16px;
 `}
 }
`;

export const TextComponentNotFound = styled.div`
 ${() => css`
  font-size: 20px;
   p {
       color #262626;
      > a {
      color: #291880;
      text-decoration: none;
      border-bottom: 0.4px solid #040114;
  }
  > a:hover{
         color: #040114;
      }
   }
 `}
 }
`;
