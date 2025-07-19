import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getPersonById,
  getPersonCredits,
  getPersonImages,
} from "../../services/getData";
import { getImages } from "../../utils/get_images";

import {
  Background,
  MainContainer,
  ArtistInfo,
  ArtistPhoto,
  ArtistDetails,
  SectionTitle,
  CreditsList,
  LoadMoreButton,
  MoviesSection,
} from "./styled";

function DetailArtist() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [person, setPerson] = useState(null);
  const [credits, setCredits] = useState([]);
  const [images, setImages] = useState([]);
  const [visibleCount, setVisibleCount] = useState(20);

  useEffect(() => {
    async function fetchData() {
      try {
        const [personData, personCredits, personImages] = await Promise.all([
          getPersonById(id),
          getPersonCredits(id),
          getPersonImages(id),
        ]);

        setPerson(personData);
        setCredits(personCredits.cast || []);
        setImages(personImages.profiles || []);
      } catch (error) {}
    }

    fetchData();
  }, [id]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 20);
  };

  const handleClickItem = (item) => {
    if (item.media_type === "movie" || item.title) {
      navigate(`/detalhe/movie/${item.id}`);
    } else if (item.media_type === "tv" || item.name) {
      navigate(`/detalhe/tv/${item.id}`);
    } else {
      navigate(`/detalhe/movie/${item.id}`);
    }
  };

  if (!person) return null;

  return (
    <>
      <Background image={getImages(person.profile_path)} />

      <MainContainer>
        <ArtistInfo>
          <ArtistPhoto>
            <img src={getImages(person.profile_path)} alt={person.name} />
          </ArtistPhoto>
          <ArtistDetails>
            <h2>{person.name}</h2>
            <p>{person.biography || "Sem biografia disponível."}</p>
          </ArtistDetails>
        </ArtistInfo>
      </MainContainer>

      <MoviesSection>
        <SectionTitle>Top Filmes</SectionTitle>
        {credits.length > 0 ? (
          <>
            <CreditsList>
              {credits.slice(0, visibleCount).map((item) => (
                <li key={item.id}>
                  <img
                    onClick={() => handleClickItem(item)}
                    style={{ cursor: "pointer" }}
                    src={getImages(item.poster_path)}
                    alt={item.title || item.name}
                  />
                </li>
              ))}
            </CreditsList>
            {visibleCount < credits.length && (
              <LoadMoreButton onClick={handleLoadMore}>
                Ver mais filmes
              </LoadMoreButton>
            )}
          </>
        ) : (
          <p>Sem créditos disponíveis.</p>
        )}
      </MoviesSection>
    </>
  );
}

export default DetailArtist;
