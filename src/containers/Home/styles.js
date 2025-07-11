import styled, { keyframes } from "styled-components";

const scale = keyframes`
from {
  transform: scale(0)
}
to {
  transform: scale(1)
}
`;

// ✅ Novo container que segura todos os slides (filmes)
export const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

// ✅ Cada slide (um filme) animado com translateX
export const SlideItem = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;

  transform: ${(props) =>
    props.active ? "translateX(0)" : "translateX(100%)"};
  opacity: ${(props) => (props.active ? 1 : 0)};
  z-index: ${(props) => (props.active ? 1 : 0)};
  transition:
    transform 1.2s ease-in-out,
    opacity 1 ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
    z-index: 1;
  }
`;

export const Conteiner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  z-index: 2;
`;

export const Info = styled.div`
  z-index: 2;
  padding: 20px;
  width: 50%;

  h1 {
    font-size: 60px;
    font-weight: 700;
    color: #ffff;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: #ffff;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

export const Poster = styled.div`
  z-index: 2;

  img {
    width: 400px;
    border-radius: 10px;
    animation: ${scale} 0.5s linear;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 20px;
`;
