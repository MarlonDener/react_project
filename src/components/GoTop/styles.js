import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    background: ${theme.colors.mediumGray};
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 4rem;
    height: 4rem;
    bottom: 2rem;
    right: 2rem;
    opacity: 0.6;
    z-index: 6;
    color: ${theme.colors.primaryColor};
    @media (max-width: 500px) {
      width: 3rem;
      height: 3rem;
      bottom: 2rem;
      right: 1rem;
    }
  `}
`;
