import React from "react";
import { Button } from "./styles";

function AssistirAgoraButton({ movie }) {
  const handleClick = () => {
    if (!movie?.title && !movie?.name) return;

    const title = movie.title || movie.name;
    const year =
      movie.release_date?.split("-")[0] ||
      movie.first_air_date?.split("-")[0] ||
      "";

    const formattedTitle = title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/gi, "")
      .replace(/\s+/g, "+");

    const query = `${formattedTitle}+${year}+assistir+dublado+redecanais`;

    const url = `https://www.google.com/search?q=${query}`;
    window.open(url, "_blank");
  };

  return <Button onClick={handleClick}>Assistir Agora</Button>;
}

export default AssistirAgoraButton;
