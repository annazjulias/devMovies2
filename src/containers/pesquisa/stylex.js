import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  width: 100%;
  margin: 60px auto;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #fff;
  display: flex;
  justify-content: center;
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 15px;

  input {
    padding: 0.7rem 1rem;
    width: 1000px;
    border-radius: 8px;
    border: none;
    font-size: 1rem;
  }

  button {
    padding: 0.7rem 1.5rem;
    background-color: #e50914;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background-color: #b20710;
    }
  }
`;

export const ResultsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 1rem;
`;

export const Loading = styled.p`
  color: #fff;
  font-size: 1.2rem;
`;
