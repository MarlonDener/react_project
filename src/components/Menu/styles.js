import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Container as LogoLinkContainer } from '../LogoLink/styles';
const visible = (theme) => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, menuVisible }) => css`
    z-index: 5;
    width: 100%;
    background: ${theme.colors.white};
    border-bottom: 1px solid #626262;
    transition: all 300ms ease-in-out;

    ${SectionContainer} {
      padding-top: 3px;
      padding-bottom: 3px;
    }

    @media (max-width: 758px) {
      visibility: hidden;
      opacity: 0;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      ${menuVisible && visible(theme)}
      display: flex;
      align-items: center;
      justify-content: center;
      ${LogoLinkContainer} {
        > img {
          width: 150px;
          position: relative;
          top: -35px;
        }
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 789px) {
      display: block;
      text-align: center;
    }
  `}
`;
export const display = styled.div`
  ${({ theme }) => css`
    width: 50%;
    @media (max-width: 789px) {
      width: 100%;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    heigth: 4rem;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    border: none;
    cursor: pointer;
    display: none;
    transition: 0.2s all ease-in-out;

    &:hover {
      filter: brightness(1.8);
    }

    > svg {
      width: 3rem;
      height: 3.5rem;
    }
    @media (max-width: 789px) {
      display: block;
    }
  `}
`;
