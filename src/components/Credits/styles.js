import styled from "styled-components";
export const Conteiner = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
  }

  p {
    color: #ffff;
  }

  img {
    height: 300px;
    cursor: pointer;
  }
`;
export const Title = styled.h4`
  color: #ffff;
  font-size: 28px;
  font-size: 400;
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
    border: none;
  }
`;
