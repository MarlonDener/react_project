import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme, background }) => css`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 2fr;
    align-items: center;
    gap: ${theme.spacings.large};
    padding: 10px 50px;
    width: 100%;
    background: ${theme.colors.primaryColor};
    @media ${theme.media.medium} {
      grid-template-columns: 1fr;
      padding: 0px 0px;
    }
    ${Title} {
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`;
export const ImageContainer = styled.div`
  ${({ theme }) => css`
    > img {
      width: 100%;
      @media ${theme.media.medium} {
        img {
          width: 100%;
        }
      }
    }
  `}
`;
export const TextContainer = styled.div`
  ${({ theme }) => css``}
`;
