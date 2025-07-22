import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchForm, SearchInput, SearchButton } from "./styles";

function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      // Redireciona para a rota /busca?q=termoDigitado
      navigate(`/busca?q=${search}`);
      setSearch(""); // limpa o campo
    }
  };

  return (
    <SearchForm onSubmit={handleSearch}>
      <SearchInput
        type="text"
        placeholder="Buscar filmes, séries ou atores..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchButton type="submit"></SearchButton>
    </SearchForm>
  );
}

export default SearchBar;
