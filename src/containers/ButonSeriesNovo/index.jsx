import { useNavigate } from "react-router-dom";
import { GenresContainer, GenreButton } from "./styles";

export const tvGenres = [
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

export default function GenresButtonsSeries() {
  const navigate = useNavigate();

  return (
    <GenresContainer>
      {genresList.map((genre) => (
        <GenreButton key={genre.id} onClick={() => navigate(`/tv/${genre.id}`)}>
          {genre.name}
        </GenreButton>
      ))}
    </GenresContainer>
  );
}
