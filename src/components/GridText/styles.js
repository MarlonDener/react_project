import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';
import { Container as TextComponent } from '../TextComponent/styles';
import { Container as SectionContainer } from '../SectionContainer/styles';
export const GlobalContainer = styled.div`
  ${({ theme }) => css`
    color: #fff;
    ${SectionContainer} {
      background: ${theme.colors.primaryColor};
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primaryColor};
    margin: 0 auto;
    > ${TextComponent} {
      margin: ${theme.spacings.medium} 10px;
      text-align: center;
    }
    > h1 {
      font-size: 25px;
      text-align: center;
      text-transform: uppercase;
    }
    > p {
      text-align: center;
      margin: 0 auto;
    }
    @media (max-width: 800px) {
      > h1 {
        font-size: 21px;
      }
      > p {
        font-size: 19px;
      }
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.large};

    @media (max-width: 800px) {
      flex-direction: column;
    }
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    width: 320px;
    ${HeadingContainer} {
      position: relative;
      left: 5rem;
    }
    ${HeadingContainer}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: 7rem;
      top: 0.6rem;
      left: -3rem;
      transform: rotate(8deg);
    }
    @media (max-width: 800px) {
      width: 90%;
    }
  `}
`;
