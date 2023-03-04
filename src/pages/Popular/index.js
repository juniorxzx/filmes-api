import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { key } from "../../APIKEY/key";
import { Container, MoovieList, Moovie, Back } from "./styles";

function Popular() {
  const [moovies, setMoovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-BR-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMoovies(data.results));
  }, []);
  return (
    <Container>
      <Link to={"/"}>
        <Back>Voltar</Back>
      </Link>
      <h1>Filmes em alta</h1>

      <MoovieList>
        {moovies.map((moovie) => {
          return (
            <Moovie key={moovie.id}>
              <Moovie key={moovie.id}>
                <Link to={`/details/${moovie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${moovie.poster_path}`}
                    alt={moovie.title}
                  />
                </Link>
                <span>{moovie.title}</span>
              </Moovie>

              <span>{moovie.title}</span>
            </Moovie>
          );
        })}
      </MoovieList>
    </Container>
  );
}

export default Popular;
