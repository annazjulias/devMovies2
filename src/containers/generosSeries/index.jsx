import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSeriesByGenre } from "../../services/getData";
import Card from "../../components/card";
import {
  Containers,
  GridFilmesi,
  PageButton,
  PaginationScroll,
  ArrowButton,
} from "./styles";
import GenresButtonsSeries from "../ButonSeriesNovo";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

function SeriesByGenre() {
  const tvGenres = [
    { id: 28, name: "Ação" },
    { id: 12, name: "Aventura" },
    { id: 16, name: "Animação" },
    { id: 35, name: "Comédia" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentário" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Família" },
    { id: 14, name: "Fantasia" },
    { id: 36, name: "História" },
    { id: 27, name: "Terror" },
    { id: 10402, name: "Música" },
    { id: 9648, name: "Mistério" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Ficção Científica" },
    { id: 10770, name: "Cinema TV" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "Guerra" },
    { id: 37, name: "Faroeste" },
  ];

  const { genreId } = useParams();
  const navigate = useNavigate();

  const [series, setSeries] = useState([]);
  const [genreName, setGenreName] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageGroupStart, setPageGroupStart] = useState(1);

  const totalPages = 50; // ajuste conforme a API
  const pagesPerGroup = 5;

  // Resetar paginação quando trocar de gênero
  useEffect(() => {
    setCurrentPage(1);
    setPageGroupStart(1);
  }, [genreId]);

  useEffect(() => {
    async function fetchGenreseries() {
      try {
        const data = await getSeriesByGenre(genreId, currentPage);
        setSeries(data.results);

        const genreFound = tvGenres.find((g) => String(g.id) === genreId);
        setGenreName(genreFound?.name || "Series");

        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (error) {
        console.error("Erro ao buscar series por gênero:", error);
      }
    }

    fetchGenreseries();
  }, [genreId, currentPage]);

  const handleClick = (id) => {
    navigate(`/detalhe/tv/${id}`);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevGroup = () => {
    const newStart = Math.max(1, pageGroupStart - pagesPerGroup);
    setPageGroupStart(newStart);
  };

  const handleNextGroup = () => {
    const newStart = Math.min(
      totalPages - pagesPerGroup + 1,
      pageGroupStart + pagesPerGroup
    );
    setPageGroupStart(newStart);
  };

  const visiblePages = Array.from(
    { length: Math.min(pagesPerGroup, totalPages - pageGroupStart + 1) },
    (_, i) => pageGroupStart + i
  );

  return (
    <Containers>
      <h2>{genreName}</h2>

      <GenresButtonsSeries />

      <GridFilmesi>
        <section>
          {Array.isArray(series) && series.length > 0 ? (
            series.map((item) => (
              <div
                key={item.id}
                className="card"
                onClick={() => handleClick(item.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleClick(item.id);
                  }
                }}
              >
                <Card item={item} />
              </div>
            ))
          ) : (
            <p>Carregando filmes...</p>
          )}
        </section>
      </GridFilmesi>

      <PaginationScroll>
        <ArrowButton onClick={handlePrevGroup} disabled={pageGroupStart === 1}>
          <FaArrowAltCircleLeft size={24} />
        </ArrowButton>

        {visiblePages.map((pageNumber) => (
          <PageButton
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            active={pageNumber === currentPage}
          >
            {pageNumber}
          </PageButton>
        ))}

        <ArrowButton
          onClick={handleNextGroup}
          disabled={pageGroupStart + pagesPerGroup > totalPages}
        >
          <FaArrowAltCircleRight size={24} />
        </ArrowButton>
      </PaginationScroll>
    </Containers>
  );
}

export default SeriesByGenre;
