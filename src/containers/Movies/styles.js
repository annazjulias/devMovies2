import styled from "styled-components";

export const Containers = styled.div`
  background-color: #000;

  h2 {
    margin-top: 120px;
    font-size: 2rem;
    color: #fff;
    margin-bottom: 2rem;
  }
`;

export const GridFilmesi = styled.div`
  justify-items: center;
  overflow-x: hidden;
  section {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  }

  .card {
    width: 270px;

    .card4 {
      padding: 25px;
      width: 300px;
      height: 440px;
    }
    img {
      width: 250px;
    }
  }

  .card:hover {
    transform: scale(1.05);
  }
`;
