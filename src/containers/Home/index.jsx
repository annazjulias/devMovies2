import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  SlideContainer,
  SlideItem,
  Info,
  Poster,
  Conteiner,
  ContainerButtons,
} from "./styles";
import Button from "../../components/Button";
import Slider from "../../components/slider";
import { getImages } from "../../utils/get_images";
import Modal from "../../components/Modal";
import SliderSeries from "../../components/sliderSerie";

import {
  getPopularMovies,
  getTopRatedMovies,
  getTopRatedSeries,
  getPopularSeries,
  getPopularPeople,
} from "../../services/getData";
import SliderPeople from "../../components/sliderPessoas";

function Home() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [movieIndex, setMovieIndex] = useState(0);
  const [popularFilmes, setPopularFilmes] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [topSeries, setTopSeries] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [popularPessoas, setPopularPessoas] = useState([]);

  useEffect(() => {
    let intervalId;

    async function getAllData() {
      try {
        const [
          popularFilmesData,
          topMoviesData,
          topSeriesData,
          popularSeriesData,
          popularPessoasData,
        ] = await Promise.all([
          getPopularMovies(),
          getTopRatedMovies(),
          getTopRatedSeries(),
          getPopularSeries(),
          getPopularPeople(),
        ]);

        setPopularFilmes(popularFilmesData);
        setTopMovies(topMoviesData);
        setTopSeries(topSeriesData);
        setPopularSeries(popularSeriesData);
        setPopularPessoas(popularPessoasData);
      } catch (error) {
        console.error("Erro ao buscar dados", error);
      }
    }

    getAllData();

    intervalId = setInterval(() => {
      setMovieIndex((prev) => (prev + 1) % 6); // mostra os 5 primeiros
    }, 9000);

    return () => clearInterval(intervalId);
  }, []);

  const movie = popularFilmes[movieIndex];

  return (
    <>
      <SlideContainer>
        {popularFilmes.slice(0, 6).map((item, index) => (
          <SlideItem
            key={item.id}
            active={index === movieIndex}
            img={getImages(item.backdrop_path)}
          >
            {index === movieIndex && showModal && (
              <Modal movieId={item.id} setShowModal={setShowModal} />
            )}
            <Conteiner>
              <Info>
                <h1>{item.title}</h1>
                <p>{item.overview}</p>
                <ContainerButtons>
                  <Button onClick={() => navigate(`detalhe/${item.id}`)} red>
                    Assista Agora
                  </Button>
                  <Button onClick={() => setShowModal(true)} red={false}>
                    Assista o Trailer
                  </Button>
                </ContainerButtons>
              </Info>
              <Poster>
                <img alt="Capa do filme" src={getImages(item.poster_path)} />
              </Poster>
            </Conteiner>
          </SlideItem>
        ))}
      </SlideContainer>

      {popularFilmes.length > 0 && (
        <Slider info={popularFilmes} title="Filmes Populares" />
      )}
      {topMovies.length > 0 && <Slider info={topMovies} title="Top Filmes" />}
      {topSeries.length > 0 && (
        <SliderSeries info={topSeries} title="Top Séries" />
      )}
      {popularSeries.length > 0 && (
        <SliderSeries info={popularSeries} title="Séries Populares" />
      )}
      {popularPessoas.length > 0 && (
        <SliderPeople info={popularPessoas} title="Top Artistas" />
      )}
    </>
  );
}

export default Home;
