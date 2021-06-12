import styled, { css } from 'styled-components';
import { Container as ContainerText } from '../TextComponent/styles';
export const Container = styled.div`
  ${({ theme }) => css`
    > h1 {
      color: ${theme.colors.primaryColor};
      text-transform: uppercase;
      text-align: center;
      margin: 0 auto;
      max-width: 58rem;
      margin-top: ${theme.spacings.large};
      @media (min-width: 800px) {
       font-size: ${theme.fonts.sizes.xlarge}};
      }
      @media (max-width: 800px) {
       font-size: ${theme.fonts.sizes.small}};
      }
      ${ContainerText} {
          margin: 0 auto;
          color: ${theme.colors.primaryColor};
          max-width: 80rem;
          padding-bottom: 40px;
      }

    }
  `}
`;
export const Html = styled.div`
  ${({ theme }) => css``}
`;
