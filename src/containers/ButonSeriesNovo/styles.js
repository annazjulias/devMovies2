import styled from "styled-components";

export const GenresContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 20px 0;
  justify-content: center;
`;

export const GenreButton = styled.button`
  padding: 12px 24px;
  border-radius: 30px;
  border: 1px solid #fff;
  background-color: transparent;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 18px;
  &:hover {
    background-color: #ff3d00;
    color: #fff;
    transform: scale(1.05);
    box-shadow: 0 0 10px #ff3d00;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 61, 0, 0.5);
  }
`;
