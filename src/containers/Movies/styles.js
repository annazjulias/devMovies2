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

export const PageButton = styled.button`
  background-color: ${(props) => (props.active ? "#ff0000" : "#1c1c1c")};
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

export const PaginationScroll = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: auto;
  padding: 16px 0;
  gap: 10px;
  scroll-snap-type: x mandatory;
  margin: 2px auto;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 3px;
  }

  & > * {
    scroll-snap-align: start;
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
