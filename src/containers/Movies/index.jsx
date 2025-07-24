import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllMovies } from "../../services/getData";
import {
  Containers,
  GridFilmesi,
  PageButton,
  PaginationScroll,
  ArrowButton,
} from "./styles";
import GenresButtons from "../GenresButtons";
import Card from "../../components/Card";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function MoviesCatalog() {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageGroupStart, setPageGroupStart] = useState(1);

  const totalPages = 250;
  const pagesPerGroup = 5;

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getAllMovies(currentPage);
        setMovies(data);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    }

    fetchMovies();
  }, [currentPage]);

  const handleClick = (id) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/detalhe/movie/${id}`);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      <h2>Catálogo de Filmes</h2>

      {/* Botões para navegar por gêneros */}
      <GenresButtons />

      <GridFilmesi>
        <section>
          {Array.isArray(movies) && movies.length > 0 ? (
            movies.map((item) => (
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

export default MoviesCatalog;
