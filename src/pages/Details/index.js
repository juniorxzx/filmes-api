import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { key } from "../../APIKEY/key";
import { Container } from "./styles";

function Details() {
  const { id } = useParams();

  const [moovies, setMoovies] = useState({});
  const image_path = "https://image.tmdb.org/t/p/w500/";
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=pt-BR&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        const { title, poster_path, overview, release_date, video } = data;
        const moovie = {
          id,
          title: title,
          sinopse: overview,
          img: `${image_path}${poster_path}`,
          releaseDate: release_date,
          video: video
        };

        setMoovies(moovie);
      });
  }, [id]);
  return (
    <Container>
      <div className="moovie">
        <img src={moovies.img} alt={moovies.title} />
        <div className="details">
          <h1>{moovies.title}</h1>
          <span>Sinopse: {moovies.sinopse}</span>
          <span className="release-date">
            Data de lançamento: {moovies.releaseDate}
            
          </span>
        

          <Link to={"/"}>
            <button>Voltar</button>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Details;
