import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllSeries } from "../../services/getData";
import Card from "../../components/card";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import {
  Containers,
  GridSeries,
  PageButton,
  PaginationScroll,
  ArrowButton,
} from "./styles";
import GenresButtonsSeries from "../ButonSeriesNovo";

function SeriesPage() {
  const navigate = useNavigate();
  const [series, setSeries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageGroupStart, setPageGroupStart] = useState(1);

  const totalPages = 250;
  const pagesPerGroup = 5;

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllSeries(currentPage);
        setSeries(data);
      } catch (error) {
        console.error("Erro ao buscar séries:", error);
      }
    }

    fetchData();
  }, [currentPage]);
  const handleClick = (id) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/detalhe/tv/${id}`);
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
      <h2>Catálogo de Series</h2>
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
            <p>Carregando series...</p>
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

export default SeriesPage;
