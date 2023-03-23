import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import useStore from "../store/Contexto.jsx";
import { Navigate, useNavigate } from "react-router";

export const MyNavbar = () => {

  const {favorite} = useStore();
  const Navigate = useNavigate();

 const handleHome = () => {
    Navigate('/');
 }

 const handleDelete = () => {
  setFavorite = setFavorite.filter((item)=> console.log(item));
  console.log(`setfavorite`,setFavorite)
 }

  let setFavorite = favorite.length ? favorite.map((item) => <NavDropdown.Item key={item.name}>{item.name}<i className="fas fa-times" name={item.name} onClick={handleDelete}></i></NavDropdown.Item>) : null;

  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand href="#">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLFQDCjUKaJeQFoZOv2WdbvdsZO5o1S4gfMbn_8OSEXNb7c3GccxsKmTX5yC9FvOHeJ5M&usqp=CAU"
            className="logo"
            onClick={handleHome}
          />
        </Navbar.Brand>
        <NavDropdown title="Favorites" id="basic-nav-dropdown">
         {setFavorite}
        </NavDropdown>
      </Container>
    </Navbar>
  )
}