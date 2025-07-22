import Card from "../card";
import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

function Slider({ info = [], title = "" }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate(`/detalhe/movie/${id}`);
  };

  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={"auto"}
        className="swiper"
      >
        {Array.isArray(info) &&
          info.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="card-wrapper"
                onClick={() => handleClick(item.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleClick(item.id);
                  }
                }}
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
