import styled from "styled-components";

export const Container = styled.footer`
  @import url(https://fonts.googleapis.com/css?family=Merriweather:300,900);

  width: 100%;
  height: 200px;
  background: #111;
  position: fixed;
  left: 0;
  bottom: 0;

  div {
    width: 850px;
    margin: auto;
    margin-bottom: 200px; /* Same height as footer */
    padding: 100px 0;
    text-align: center;
  }

  p {
    color: #696969;
    font-size: 1em;
    font-weight: 300;
  }
`;
