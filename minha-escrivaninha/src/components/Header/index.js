import React from "react";
import { Link } from "react-router-dom";

import { Container, SearchBox, MenuContent, MenuLogin } from "./styles";

import { AiOutlineSearch } from "react-icons/ai";

function Header() {
  return (
    <Container>
      <Link to="/">
        <h1>Aramis Livraria</h1>
      </Link>

      <MenuContent>
        <ul>
          <li>Home</li>
          <li>MyBooks</li>
          <li>Browser</li>
        </ul>
      </MenuContent>

      <SearchBox>
        <form>
          <input
            id="movie-search"
            type="text"
            placeholder="Search by movie title"
          />

          <button id="submit-btn" type="submit">
            <AiOutlineSearch color={"#FFF"} />
          </button>
        </form>
      </SearchBox>

      <MenuLogin>
        <ul>
          <li>Sign In</li>
          <li>Join</li>
        </ul>
      </MenuLogin>
    </Container>
  );
}

export default Header;
