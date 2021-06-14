import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.smallDesktop};
    padding: 10px 30px;
    width: 100%;
    color: ${theme.colors.mediumGray};
    text-transform: none;
    @media (max-width: 800px) {
      padding: 10px 4px;
      font-size: ${theme.fonts.sizes.small};
    }
  `}
`;
