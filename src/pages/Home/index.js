import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { key } from "../../APIKEY/key";

import { Container, Moovie, MoovieList, Search } from "./styles";

function Home() {
  const [moovies, setMoovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${searchValue}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => setMoovies(data.results));
  };
  return (
    <Container>
      <Search>
        <input
          type={"search"}
          onChange={(e) => searchItems(e.target.value)}
          placeholder="Busque por um filme"
        />
        <Link to={"/popular"} className="button">
         Ver filmes em alta
        </Link>
      </Search>
      <h1>MOVIES</h1>

      <MoovieList>
        {moovies.map((moovie) => {
          return (
            <Moovie key={moovie.id}>
              <Link to={`/details/${moovie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${moovie.poster_path}`}
                  alt={moovie.title}
                />
              </Link>
              <span>{moovie.title}</span>
            </Moovie>
          );
        })}
      </MoovieList>
    </Container>
  );
}

export default Home;
