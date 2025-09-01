import styled from 'styled-components';

export const Conteiner = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  margin-top: 30px;

  user-select: none;
  overflow-x: auto; /* permite rolagem horizontal */
  -webkit-overflow-scrolling: touch; /* rolagem suave no mobile */

  div {
    display: flex;
    flex-direction: column;
    scroll-snap-align: start; /* cada div "trava" na posição */
  }

  p {
    color: #fff;
    font-size: 14px; /* melhora legibilidade no mobile */
  }

  img {
    height: 300px;
    cursor: pointer;
    border-radius: 12px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const Title = styled.h4`
  color: #fff;
  font-size: 28px;
  font-weight: 400; /* corrigido */
  text-align: center;
`;

export const ContainerMovies = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    height: 100%;
    margin: 50px 0;
  }

  h4 {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  iframe {
    width: 100%; /* ocupa toda a largura disponível */
    min-height: 315px;
    border: none;
    border-radius: 12px;
  }
`;
