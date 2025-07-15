import Card from "../card";
import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

function SliderPeople({ info, title }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate(`/detalhe/person/${id}`);
  };

  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        grabCursor
        spaceBetween={16}
        slidesPerView={"auto"}
        className="swiper"
      >
        {info.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="card-wrapper"
              onClick={() => handleClick(item.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleClick(item.id);
              }}
              aria-label={`Detalhes da pessoa ${item.name}`}
            >
              <Card item={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default SliderPeople;
