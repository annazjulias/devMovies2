import { Title, Conteiner } from "./styles";
import { getImages } from "../../utils/get_images";

function Credits({ credits }) {
  if (!credits) return null;

  // Se for um array (ex: créditos de filme)
  const creditsArray = Array.isArray(credits) ? credits : credits.cast;

  if (!creditsArray || creditsArray.length === 0) return null;

  return (
    <>
      <Title>Créditos</Title>
      <Conteiner>
        {creditsArray.slice(0, 5).map((artist) => (
          <div key={artist.id}>
            <img
              src={getImages(artist.profile_path)}
              alt={artist.original_name}
            />
            <p>{artist.original_name || artist.name}</p>
          </div>
        ))}
      </Conteiner>
    </>
  );
}

export default Credits;
