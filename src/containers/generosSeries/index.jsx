import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSeriesByGenre } from "../../services/getData";
import Card from "../../components/card";
import {
  Containers,
  GridSeries,
  PageButton,
  PaginationScroll,
  ArrowButton,
} from "./styles";
import GenresButtonsSeries from "../ButonSeriesNovo";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

function SeriesByGenre() {
  const tvGenres = [
    { id: 10759, name: "Ação e Aventura" },
    { id: 16, name: "Animação" },
    { id: 35, name: "Comédia" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentário" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Família" },
    { id: 10762, name: "Kids" },
    { id: 9648, name: "Mistério" },
    { id: 10763, name: "Notícias" },
    { id: 10764, name: "Reality" },
    { id: 10765, name: "Ficção Científica e Fantasia" },
    { id: 10766, name: "Novela" },
    { id: 10767, name: "Talk Show" },
    { id: 10768, name: "Guerra e Política" },
    { id: 37, name: "Faroeste" },
  ];
  const { genreIds } = useParams();
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
  }, [genreIds]);

  useEffect(() => {
    async function fetchGenreseries() {
      try {
        const data = await getSeriesByGenre(genreIds, currentPage);
        setSeries(data.results);

        const genreFound = tvGenres.find((g) => String(g.id) === genreIds);
        setGenreName(genreFound?.name || "Series");

        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (error) {
        console.error("Erro ao buscar series por gênero:", error);
      }
    }

    fetchGenreseries();
  }, [genreIds, currentPage]);

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

      <GridSeries>
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
      </GridSeries>

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
