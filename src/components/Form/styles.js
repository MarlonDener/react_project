import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 1000px;
    width: 99%;
    padding: 40px 20px;
    flex-direction: column;
    > h1 {
        margin-bottom: 20px;
        color: ${theme.colors.primaryColor};
        font-size: 44px;

        @media (max-width: 800px) {
         font-size: 33px;
        }
    }
`}
`;
export const LineContainer = styled.div`
    ${({ theme }) => css`
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`}
`;
export const input = styled.input`
    ${({ theme }) => css`
    display: flex;
    width: 49%;
    background: ${theme.colors.white};
    outline: none;
    border:  1px solid ${theme.colors.primaryColor};
    height: 40px;
    padding: 7px;
    font-size: 16px;

    @media (max-width: 800px) {
        width: 100%;
        margin: 7px 0px;
    }

`}
`;



export const button = styled.button`
    ${({ theme }) => css`
    display: block;
    width: 140px;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    border:  1px solid ${theme.colors.primaryColor};
    outline: none;
    height: 40px;
    cursor: pointer;
    color ${theme.colors.white};
    cursor: pointer;
    transition: 0.3s opacity ease-in;
    margin-top: 5px;
    &:hover{
        opacity: 0.8;
    }
`}
`;

export const Textarea = styled.textarea`
    ${({ theme }) => css`
    display: block;
    width: 100%;
    height: 200px;
    margin: 15px 14px;
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    border:  1px solid ${theme.colors.primaryColor};
    outline: none;
    padding: 7px;
    font-size: 19px;
`}
`;
