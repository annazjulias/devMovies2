import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  overflow: hidden;
  h2 {
    color: #ffff;
    font-size: 24px;
    margin: 50px 0 20px 20px;
  }
  padding: 0 20px;
  background: #000;

  .swiper-wrapper {
    display: flex;
    gap: 16px;
    max-width: 1200px;
  }
`;
