import styled from "@emotion/styled";
export const HomeStyled = styled.div`

display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-between;
gap: 10px;

.vtuber {
  width: 350px;
  border: solid 1px black;
}

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
  border-radius: 12.5%;
}

`;
