import styled, { css } from 'styled-components';
import { Container as TextComponents } from '../TextComponent';
export const Container = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.primaryColor};
    margin: 0;
    text-align: center;
    border-top: thin solid ${theme.colors.mediumGray};
    a {
      color: inherit;
      text-decoration: none;
      font-size: ${theme.fonts.sizes.small};
      &:hover {
        color: #ccc;
      }
    }
  `}
`;
