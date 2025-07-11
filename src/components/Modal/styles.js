import styled from "styled-components";

export const Background = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  display: flex;
  z-index: 9999;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  background-color: red;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  padding: 50px;
  max-width: 1200px;
  iframe {
    border: none;
  }
`;
export const Button = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;
