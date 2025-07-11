import Card from "../card";
import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

function Slider({ info, title }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // rolagem suave
    });
    navigate(`/detalhe/${id}`);
  };

  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        grabCursor
        spaceBetween={10}
        slidesPerView={"auto"}
        className="swiper"
      >
        {info.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => handleClick(item.id)}
              style={{ cursor: "pointer" }}
            >
              <Card item={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Slider;
