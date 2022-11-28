import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import User from "../../src/assets/Foto.jpg";
import Logo from "../../src/assets/loops.png";


const Navigation = () => {
  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        className="navbar navbar-expand-lg navbar-light bg-light navbar-store fixed-top navbar fixed-top"
      >
        <Container>
          <img className="w-20" src={Logo} alt="logo" />
          <Nav className="mr-5">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Payment</Nav.Link>
            <Nav.Link href="#">Promo</Nav.Link>
            <Nav.Link href="#">History</Nav.Link>
            <Nav.Link href="#">Hi Lutfiana Fara Dilah</Nav.Link>
            <img className="w-8" src={User} alt="user" />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;