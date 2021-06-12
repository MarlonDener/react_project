import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';
import { Container as TextComponent } from '../TextComponent/styles';
import { Container as SectionContainer } from '../SectionContainer/styles';
export const GlobalContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};
    ${SectionContainer} {
      background: ${theme.colors.white};
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    margin: 0 auto;
    ${TextComponent} {
      margin-bottom: 10px;
      color: ${theme.colors.primaryColor};
      text-align: center;
    }
    > h1 {
      font-size: 25px;
      text-align: center;
      color: ${theme.colors.primaryColor};
    }
    @media (max-width: 800px) {
      > h1 {
        font-size: 27px;
      }
      > p {
        font-size: 19px;
      }
    }
    > p {
      font-size: 21px;
      text-align: center;
      margin: 0 auto;
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${theme.spacings.large};
    color: ${theme.colors.primaryColor};
    @media (max-width: 800px) {
      flex-direction: column;
    }
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    @media (max-width: 800px) {
      width: 100%;
    }
  `}
`;
export const Image = styled.img`
  ${({ theme }) => css`
    width: 300px;
    height: 250px;
    object-fit: cover;
    transition: 0.3s ease-in;
    @media (max-width: 800px) {
      width: 100%;
    }
    &:hover {
      transform: scale(1.2) rotate(10deg);
    }
  `}
`;
