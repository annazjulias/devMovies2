import styled, { keyframes } from 'styled-components';

const scale = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const Cover = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  height: 100px;
  z-index: 99;

  img {
    width: 450px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear;
  }

  @media (max-width: 768px) {
    justify-content: center;
    img {
      width: 90%; /* Reduz largura em telas menores */
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  width: 100%;
  margin-top: -100px;
  max-width: 1500px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: -50px;
    align-items: center;
  }
`;

export const Background = styled.div`
  background-image: url(${(props) => props.image});
  height: 50vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  }
`;

export const Info = styled.div`
  padding: 20px;
  width: 50%;
  z-index: 99;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h2 {
    font-size: 50px;
    font-weight: 700;
    color: #fff;
  }
  p {
    font-weight: 700;
    color: #fff;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    width: 90%; /* ocupa quase toda tela no mobile */
    text-align: center;
    align-items: center;

    h2 {
      font-size: 28px;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const ExtraInfo = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 2rem;

  border-radius: 16px;
  color: #fff;
  width: 1200px;
  margin: 10px auto;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    border-left: 4px solid rgb(246, 255, 0);
    padding-left: 1rem;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.2rem;
  }

  .info-box {
    background: rgba(255, 255, 255, 0.08);
    padding: 1rem;
    border-radius: 12px;
    text-align: center;
    transition: 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }

  .label {
    display: block;
    font-size: 0.9rem;
    font-weight: bold;
    color: rgb(255, 255, 255);
    margin-bottom: 0.4rem;
  }

  .value {
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
  }
`;
