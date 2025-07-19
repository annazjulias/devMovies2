import { getImages } from "../../utils/get_images";
import { Conteiner } from "./styles";
import { useNavigate } from "react-router-dom";

function Card({ item }) {
  const navigate = useNavigate();

  return (
    <Conteiner className="card4">
      <img
        onClick={() => navigate(`detalhe/${item.id}`)}
        src={getImages(item.poster_path || item.profile_path || "")}
      />
      <h3>{item.title}</h3>
      <h3>{item.original_name}</h3>
    </Conteiner>
  );
}

export default Card;
