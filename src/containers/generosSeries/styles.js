import styled from 'styled-components';

export const Containers = styled.div`
  background-color: #000;
  h2 {
    margin: 0 auto;
    margin-top: 120px;
    margin-bottom: 10px;
    color: rgb(255, 255, 255);
    font-family: 'Original Surfer', sans-serif;
    font-size: 80px;
    background-color: red;
    width: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const GridSeries = styled.div`
  justify-items: center;
  overflow-x: hidden;

  section {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 1rem;
  }

  .card {
    width: 270px;
    transition: transform 0.3s ease;

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

export const GenresButtons = styled.div`
  display: flex;
  margin-top: 120px;
`;

// ✅ Novos estilos para paginação:
export const PaginationScroll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 40px 0;
  flex-wrap: wrap;
`;

export const PageButton = styled.button`
  background-color: ${(props) => (props.active ? '#ff0000' : '#1c1c1c')};
  color: #fff;
  border: none;
  padding: 5px 19px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff0000;
  }
`;

export const ArrowButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #fff;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    color: #ff0000;
  }
`;
