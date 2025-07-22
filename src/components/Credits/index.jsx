import { Title, Conteiner } from "./styles";
import { getImages } from "../../utils/get_images";
import { useNavigate } from "react-router-dom";

function Credits({ credits }) {
  if (!credits) return null;

  const creditsArray = Array.isArray(credits) ? credits : credits.cast;

  if (!creditsArray || creditsArray.length === 0) return null;
  const navigate = useNavigate();

  const handleClick = (id) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate(`/detalhe/person/${id}`);
  };
  return (
    <>
      <Title>Créditos</Title>
      <Conteiner>
        {creditsArray.slice(0, 5).map((artist) => (
          <div key={artist.id}>
            <img
              src={getImages(artist.profile_path)}
              alt={artist.original_name}
              onClick={() => handleClick(artist.id)}
            />
            <p>{artist.original_name || artist.name}</p>
          </div>
        ))}
      </Conteiner>
    </>
  );
}

export default Credits;
