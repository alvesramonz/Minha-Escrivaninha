import styled from "styled-components";

export const Container = styled.header`
  text-align: center;
  display: flex;
  background: rgb(244, 241, 234) !important;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
  color: #382110;

  h1 {
    padding-left: 20px;
  }

  a {
    color: #000;
  }
`;

export const SearchBox = styled.div`
  form {
    display: flex;
  }

  input {
    display: block;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background: #fff;
    background-clip: padding-box;
    border: none;
    border-right: none;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;

    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  button {
    float: left;
    width: 100%;
    height: calc(1.5em + 0.75rem + 0.5px);
    padding: 10px;
    background: #382110;
    color: white;
    font-size: 17px;
    border: none;
    border-left: none;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const MenuContent = styled.div`
  ul {
    display: flex;

    li {
      margin-right: 20px;
    }
  }
`;

export const MenuLogin = styled.div`
  ul {
    display: flex;

    li {
      margin-right: 20px;
    }
  }
`;
