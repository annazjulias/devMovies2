import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllMovies } from "../../services/getData";
import { Containers, GridFilmesi } from "./styles";
import Card from "../../components/card";

function MoviesCatalog() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getAllMovies(2); // Busca as 2 primeiras páginas
        console.log("🔍 Filmes recebidos:", data); // Deve mostrar um array
        setMovies(data);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    }

    fetchMovies();
  }, []);

  const handleClick = (id) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/detalhe/movie/${id}`);
  };

  return (
    <Containers>
      <h2>Catálogo de Filmes</h2>

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
    </Containers>
  );
}

export default MoviesCatalog;
