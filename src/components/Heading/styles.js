import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.fonts.sizes.medium};
    padding: 15px 4px;
  `,
  medium: (theme) => css`
    font-size: ${theme.fonts.sizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.fonts.sizes.huge};
    ${mediaFont(theme)};
  `,
  huge: (theme) => css`
    font-size: ${theme.fonts.sizes.xhuge};
    ${mediaFont(theme)};
  `,
};
const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.fonts.sizes.large};
  }
`;

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.div`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.white : theme.colors.primaryColor};
    ${titleSize[size](theme)}
    ${titleCase(uppercase)}
    padding-left: 30px;
    padding-bottom: 20px;
    padding-top: 15px;
    padding-right: 8px;
  `}
`;
