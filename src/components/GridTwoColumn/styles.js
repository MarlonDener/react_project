import styled, { css } from 'styled-components';
import { Title, titleCase } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme, background }) => css`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 2fr;
    align-items: center;
    gap: ${theme.spacings.large};
    padding: 90px 50px;
    width: 100%;
    background: ${theme.colors.primaryColor};
    @media ${theme.media.medium} {
      grid-template-columns: 1fr;
      padding: 25px 0px;
    }
    ${Title} {
      margin-bottom: ${theme.spacings.xsmall};
      @media (max-width: 800px) {
        padding-bottom:3px;
        padding-top: 8px;
        padding-right: 3px;
        padding-left: 3px;
      }
    }
    ${titleCase} {
        @media (max-width: 800px) {
      strong {
          font-size: 26px;
      }
  }
    }
  `}
`;
export const ImageContainer = styled.div`
  ${({ theme }) => css`
    > img {
      width: 100%;
      @media (max-width: 700px) {
        width: 88%;
      }
    }
  `}
`;
export const TextContainer = styled.div`
  ${({ theme }) => css`
    padding: 0px 19px;
  `}
`;
