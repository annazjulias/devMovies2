import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

export const Background = styled.div`
  background-image: url(${(props) => props.image});
  height: 50vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  animation: ${fadeIn} 1s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background-image: linear-gradient(to top, #000, transparent);
  }
`;

export const MainContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 25px 20px;
  color: #fff;
`;

export const ArtistInfo = styled.div`
  display: flex;
  gap: 30px;
  align-items: flex-start;
  margin-bottom: 40px;
`;

export const ArtistPhoto = styled.div`
  width: 220px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);

  img {
    width: 100%;
    display: block;
  }
`;

export const ArtistDetails = styled.div`
  flex: 1;

  h2 {
    font-size: 2.6rem;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.5;
    color: #ddd;
  }
`;

export const MoviesSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px 40px;
  color: #fff;
`;

export const SectionTitle = styled.h3`
  font-size: 1.9rem;
  margin-bottom: 15px;

  padding-bottom: 6px;
`;

export const CreditsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 18px;
  list-style: none;
  padding: 0;
  margin-bottom: 30px;

  li {
    border-radius: 10px;
    overflow: hidden;
    background: #222;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);

    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      transition: transform 0.3s ease;
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 12px 24px;
  background-color: #111;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: red;
  }
`;
