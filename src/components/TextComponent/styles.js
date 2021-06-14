import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.small};
    padding: 10px 30px;
    width: 100%;
    color: ${theme.colors.mediumGray};

    @media (max-width: 800px) {
      padding: 10px 70px;
    }
  `}
`;
