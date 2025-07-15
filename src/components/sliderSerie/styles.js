// styles.js
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 20px 40px;
  background-color: #0d0d0d;
  box-shadow: inset 0 0 50px #000000bb;
  user-select: none;

  h2 {
    color: #fff;
    font-size: 28px;
    margin: 40px 0 24px 8px;
    font-weight: 700;
    letter-spacing: 1.2px;
    position: relative;
    padding-bottom: 6px;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 60px;
      height: 4px;
      background: linear-gradient(90deg, #f39c12, #e74c3c);
      border-radius: 2px;
    }
  }

  .swiper {
    padding-bottom: 12px;
  }

  .swiper-wrapper {
    display: flex;
    gap: 16px;
    max-width: 1200px;
    margin-left: 8px;
  }

  .card-wrapper {
    cursor: pointer;
    border-radius: 8px;
    overflow: hidden;
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;

    &:hover,
    &:focus-visible {
      transform: scale(1.05);
      box-shadow: 0 12px 20px rgba(255, 156, 0, 0.5);
      outline: none;
    }
  }
`;
