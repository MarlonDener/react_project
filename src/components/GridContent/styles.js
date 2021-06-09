import styled, { css } from 'styled-components';
import { Container as ContainerText } from '../TextComponent/styles';
export const Container = styled.div`
  ${({ theme }) => css`
    > h1 {
      color: ${theme.colors.primaryColor};
      text-transform: uppercase;
      font-size: ${theme.fonts.sizes.xlarge}};
      text-align: center;
      margin: 0 auto;
      max-width: 58rem;
      margin-top: ${theme.spacings.large};

      ${ContainerText} {
          color: ${theme.colors.primaryColor};
      }
    }
  `}
`;
export const Html = styled.div`
  ${({ theme }) => css``}
`;
