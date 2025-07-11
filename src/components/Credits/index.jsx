import { Title, Conteiner } from "./styles";
import { getImages } from "../../utils/get_images";

function Credits({ credits }) {
  return (
    <>
      <Title>Créditos</Title>

      {credits && (
        <Conteiner>
          {credits.slice(0, 5).map((artist) => (
            <div key={artist.id}>
              <img src={getImages(artist.profile_path)} />
              <p>{artist.original_name}</p>
            </div>
          ))}
        </Conteiner>
      )}
    </>
  );
}
export default Credits;
