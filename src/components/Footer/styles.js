import styled, { css } from 'styled-components';
import { Container as TextComponents } from '../TextComponent';
export const Container = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    margin: 0;
    text-align: center;
    border-top: thin solid ${theme.colors.mediumGray};
    box-shadow: 4px 2px 4px 4px rgba(0, 0, 0, 0.2);
    a {
      color: ${theme.colors.primaryColor};
      text-decoration: none;
      font-size: ${theme.fonts.sizes.small};
      &:hover {
        color: ${theme.colors.secondaryColor};
      }
    }
  `}
`;
