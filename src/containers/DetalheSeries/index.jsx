import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Background, Container, Cover, Info } from "./styled";
import { getImages } from "../../utils/get_images";
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";
import { ContainerMovies } from "../../components/Credits/styles";
import SliderSeries from "../../components/sliderSerie";

import {
  getSeriesDetalhes,
  getSeriesCreditosPrin,
  getSeriesSimilar,
  getSeriesVideos,
} from "../../services/getData";

function DetailSeries() {
  const { id } = useParams();
  const [serie, setSerie] = useState(null);
  const [serieVideos, setSerieVideos] = useState([]);
  const [serieCredits, setSerieCredits] = useState(null);
  const [serieSimilar, setSerieSimilar] = useState([]);

  useEffect(() => {
    async function fetchSeriesData() {
      try {
        const [detalhes, videos, creditosPrin, similares] = await Promise.all([
          getSeriesDetalhes(id),
          getSeriesVideos(id),
          getSeriesCreditosPrin(id),
          getSeriesSimilar(id),
        ]);
        console.log("Detalhes da série:", detalhes);
        console.log("Vídeos da série:", videos);
        console.log("Elenco da série:", creditosPrin);
        console.log("Séries similares:", similares);

        setSerie(detalhes);
        setSerieVideos(videos);
        setSerieCredits(creditosPrin);
        setSerieSimilar(similares?.results || []);
      } catch (error) {
        console.error("Erro ao carregar dados da série:", error);
      }
    }

    fetchSeriesData();
  }, [id]);

  if (!serie) return null;

  return (
    <>
      <Background image={getImages(serie.backdrop_path)} />
      <Container>
        <Cover>
          <img alt="Capa da série" src={getImages(serie.poster_path)} />
        </Cover>
        <Info>
          <h2>{serie.name}</h2>
          <SpanGenres genres={serie.genres} />
          <p>{serie.overview}</p>
          <Credits credits={serieCredits} />
        </Info>
      </Container>

      <ContainerMovies>
        {serieVideos.slice(0, 5).map((video) => (
          <div key={video.id}>
            <h4>{video.name}</h4>
            <iframe
              src={`https://www.youtube.com/embed/${video.key}`}
              title={video.name}
              height="500px"
              width="100%"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </ContainerMovies>

      {serieSimilar.length > 0 && (
        <SliderSeries info={serieSimilar} title="Séries Similares" type="tv" />
      )}
    </>
  );
}

export default DetailSeries;
