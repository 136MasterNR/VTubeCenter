import styled from "@emotion/styled";

export const HomeStyled = styled.div`

text-align: center;
padding-top: 15px;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(calc(100% / 3 - 20px), 1fr));
border-bottom: 1px solid white;
border-left: 1px solid white;
border-right: 1px solid white;
border-bottom-left-radius: 1pc;
border-bottom-right-radius: 1pc;

img {
    line-height: 110px;
    text-align: center;
    color: mediumpurple;
    display: inline-block;
    cursor: pointer;
    width: 128px;
    height: 128px;
    min-width: 128px;
    min-height: 128px;
    border-radius: 2px;
    border: 4px solid white;
    border-radius: 50%;
}

`