import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 90px;
  z-index: 120;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  background-color: ${(props) =>
    props.$changeBackground ? "#000" : "transparent"};
  transition: background-color 0.9s ease-in-out;
`;
export const Links = styled(Link)`
  img {
    width: 250px;
    margin: 0px 0 0 15px;
  }
`;
export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
  margin-right: 37px;
  .lupa {
    width: 65px;
  }
`;

export const Li = styled.li`
  font-weight: 600;
  cursor: pointer;
  font-size: 32px;
  position: relative;
  img {
    width: 50px;
  }

  a {
    text-decoration: none;
    color: #ffff;
  }

  &::after {
    content: "";
    height: 3px;
    width: ${(props) => (props.$isActive ? "100%" : 0)};
    background-color: #ff0000;
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translate(-50%);
    transition: width 0.5s ease-in-out;
  }

  &&:hover::after {
    width: 100%;
  }
`;
