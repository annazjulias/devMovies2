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

export const PageButton = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background-color: ${(props) => (props.active ? "#ff3c00" : "#eee")};
  color: ${(props) => (props.active ? "white" : "black")};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => (props.active ? "#e63700" : "#ddd")};
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
  padding: 8px 12px;
  background-color: #222;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    color: rgb(243, 18, 18);
    background-color: white;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
