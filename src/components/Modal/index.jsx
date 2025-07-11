import { useState, useEffect } from "react";
import { Background, Container, Button } from "./styles";
import { getMoviesVideos } from "../../services/getData";

function Modal({ movieId, setShowModal }) {
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    async function fetchTrailer() {
      const videos = await getMoviesVideos(movieId);
      const trailerVideo = videos.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );

      setTrailer(trailerVideo);
    }

    fetchTrailer();
  }, [movieId]);

  return (
    <Background onClick={() => setShowModal(false)}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Button onClick={() => setShowModal(false)}>X</Button>

        {trailer ? (
          <iframe
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title="Trailer do filme"
            height="700px"
            width="100%"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        ) : (
          <p>Trailer não encontrado.</p>
        )}
      </Container>
    </Background>
  );
}

export default Modal;
