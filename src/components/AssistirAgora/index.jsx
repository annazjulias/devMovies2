import React from "react";
import { Button } from "./styles";

function AssistirAgoraButton({ movie }) {
  const handleClick = () => {
    if (!movie?.title && !movie?.name) return;

    const title = movie.title || movie.name;

    // Formata o título para uma URL de busca
    const formattedTitle = title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Remove acentos
      .replace(/[^a-z0-9\s]/gi, "") // Remove caracteres especiais
      .replace(/\s+/g, "+"); // Substitui espaços por "+"

    const url = `https://redecanais.gd/search.php?keywords=${formattedTitle}`;
    window.open(url, "_blank"); // Abre em nova aba
  };

  return <Button onClick={handleClick}>Assistir Agora</Button>;
}

export default AssistirAgoraButton;
