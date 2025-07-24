import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #e50914;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b00610;
  }
`;
