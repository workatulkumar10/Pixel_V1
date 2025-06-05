import React from "react";
import { Container, Logo, NavLinks } from "./styles";

const Header: React.FC = () => {
  return (
    <Container className="site-header">
      <a href="/" style={{ textDecoration: "none" }}>
        <Logo>Pixellium</Logo>
      </a>
      <NavLinks>
        <li><a href="#hero">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </NavLinks>
    </Container>
  );
};

export default Header;