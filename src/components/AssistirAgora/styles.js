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
  width: 150px;
  display: flex;
  margin: 50px auto;
  box-shadow: 0px 0px 7px 10px rgb(255 0 0 / 30%);

  &:hover {
    background-color: #b00610;
    box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
  }
`;
