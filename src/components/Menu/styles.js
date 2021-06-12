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
    box-shadow: 4px 2px 4px 4px rgba(0, 0, 0, 0.2);
    transition: all 300ms ease-in-out;
    position: fixed;
    top: 0;
    left: 0;
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
    width: 5rem;
    height: 5rem;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    border: none;
    cursor: pointer;
    display: none;
    transition: 0.2s all ease-in-out;
    border: thin solid rgba(255, 255, 255, 0.4);
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
