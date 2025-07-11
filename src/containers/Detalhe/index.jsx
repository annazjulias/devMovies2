import { useEffect, useState } from "react";
import { Background, Container, Cover, Info } from "./styled";
import {
  getMoviesById,
  getMoviesCredits,
  getMoviesSimilar,
  getMoviesVideos,
} from "../../services/getData";
import { useParams } from "react-router-dom";
import { getImages } from "../../utils/get_images";
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";
import { ContainerMovies } from "../../components/Credits/styles";
import Slider from "../../components/slider";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [movieVideos, setMoviesVideos] = useState([]);
  const [movieCredits, setMovieCredits] = useState(null);
  const [movieSimilar, setMovieSimilar] = useState([]);

  useEffect(() => {
    async function getAllData() {
      try {
        const [movieData, videos, credits, similarData] = await Promise.all([
          getMoviesById(id),
          getMoviesVideos(id),
          getMoviesCredits(id),
          getMoviesSimilar(id),
        ]);
        setMovie(movieData);
        setMoviesVideos(videos);
        setMovieCredits(credits);
        setMovieSimilar(similarData.results || []);
      } catch (error) {}
    }
    getAllData();
  }, [id]);

  return (
    <>
      {movie && (
        <>
          <Background image={getImages(movie.backdrop_path)} />
          <Container>
            <Cover>
              <img alt="Capa do filme" src={getImages(movie.poster_path)} />
            </Cover>
            <Info>
              <h2>{movie?.title}</h2>
              <SpanGenres genres={movie.genres} />
              <p>{movie.overview}</p>
              <Credits credits={movieCredits} />
            </Info>
          </Container>
          <ContainerMovies>
            {movieVideos &&
              movieVideos.slice(0, 5).map((videos) => (
                <div key={videos.id}>
                  <h4>{videos.name}</h4>
                  <iframe
                    src={`https://www.youtube.com/embed/${videos.key}`}
                    title="Video Play"
                    height="500px"
                    width="100%"
                  ></iframe>
                </div>
              ))}
          </ContainerMovies>
          {movieSimilar && (
            <Slider info={movieSimilar} title="Filmes Similares" />
          )}
        </>
      )}
    </>
  );
}

export default Detail;
