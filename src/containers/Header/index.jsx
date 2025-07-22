import { Link, useLocation } from "react-router-dom";
import { Container, Menu, Li, Links } from "./styles";
import Logo from "../../assets/dev.png";
import Lupa from "../../assets/lupa.png";
import { useState, useEffect } from "react";

import SearchBar from "../../components/SearchBar";

function Header() {
  const [changeBackground, setChangeBackground] = useState(false);
  const { pathname } = useLocation();
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 160) {
        setChangeBackground(true);
      } else {
        setChangeBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // vazio para adicionar listener só uma vez

  return (
    <Container $changeBackground={changeBackground}>
      <Links to="/" $isActive={pathname === "/"}>
        <img src={Logo} alt="Logo Dev Movies" />
      </Links>
      <Menu>
        <Li $isActive={pathname === "/"}>
          <Link to="/" $isActive={pathname === "/"}>
            Home
          </Link>
        </Li>
        <Li $isActive={pathname.includes("series")}>
          <Link to="/series" $isActive={pathname.includes("series")}>
            Séries
          </Link>
        </Li>
        <Li $isActive={pathname.includes("filmes")}>
          <Link to="/filmes" $isActive={pathname.includes("filmes")}>
            Filmes
          </Link>
        </Li>
        {showSearch && <SearchBar />}
        <img
          className="lupa"
          src={Lupa}
          alt="Pesquisar"
          onClick={toggleSearch}
          style={{ cursor: "pointer" }}
        />
      </Menu>
    </Container>
  );
}

export default Header;
