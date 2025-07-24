import { Container, Title, SearchForm, ResultsGrid, Loading } from "./stylex";
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { searchMulti } from "../../services/getData";
import Card from "../../components/Card";

function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryFromUrl = searchParams.get("query") || "";
  const [searchTerm, setSearchTerm] = useState(queryFromUrl);
  const [results, setResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchResults = async () => {
      if (!queryFromUrl) return;

      setLoading(true);
      try {
        const data = await searchMulti(queryFromUrl);

        setResults(data.results || []);
        setTotalResults(data.total_results || 0);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [queryFromUrl]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setSearchParams({ query: searchTerm });
    }
  };

  // Função para navegar para a rota de detalhe correta
  const handleClick = (id, mediaType) => {
    if (mediaType === "movie") {
      navigate(`/detalhe/movie/${id}`);
    } else if (mediaType === "tv") {
      navigate(`/detalhe/tv/${id}`);
    } else if (mediaType === "person") {
      navigate(`/detalhe/person/${id}`);
    } else {
      navigate(`/detalhe/${id}`);
    }
  };

  return (
    <Container>
      <Title>Pesquisar</Title>

      <SearchForm onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Digite o nome do filme, série ou pessoa"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </SearchForm>

      {!loading && totalResults > 0 && (
        <p style={{ margin: "1rem 0" }}>
          {totalResults} resultado{totalResults > 1 ? "s" : ""} para "
          {queryFromUrl}"
        </p>
      )}

      {loading ? (
        <Loading>Carregando...</Loading>
      ) : (
        results.length > 0 && (
          <ResultsGrid>
            {results.map((item) => (
              <div
                key={item.id}
                className="card"
                onClick={() => handleClick(item.id, item.media_type)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleClick(item.id, item.media_type);
                  }
                }}
              >
                <Card item={item} />
              </div>
            ))}
          </ResultsGrid>
        )
      )}
    </Container>
  );
}

export default SearchResults;
