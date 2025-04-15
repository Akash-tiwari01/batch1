import React from "react";
import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import logo from "../assets/img/logo.png"
import { useSelector } from "react-redux";

const NavbarComponent = () => {

  const cartItems = useSelector(state => state.cart.items)
  console.log(cartItems)
  const cartItemsCount = cartItems.reduce((total, item)=>total + item.quantity, 0)
  return (
    <Navbar expand="lg" className="nav-navbar">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="nav-logo">
          <img src={logo} alt="Logo" className="nav-logo-img" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-toggler" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          {/* Centered Nav Links */}
          <Nav className="mx-auto nav-links">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/courses" className="nav-link">Courses</NavLink>
            <NavDropdown title="Categories" id="basic-nav-dropdown" className="nav-dropdown">
              <NavDropdown.Item as={Link} to="/category/webdev">Web Development</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/datascience">Data Science</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/design">Design</NavDropdown.Item>
            </NavDropdown>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </Nav>

          {/* Right Side Icons + Auth Buttons */}
          <div className="nav-icons">
            <NavLink to="/cart" className="nav-cart position-relative">
              <FaShoppingCart size={24} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartItemsCount}
              </span>
            </NavLink>

            <NavLink to="/profile" className="nav-profile">
              <FaUserCircle size={24} />
            </NavLink>

            <Button className="nav-login-btn" as={Link} to="/login">Login</Button>
            <Button className="nav-signup-btn" as={Link} to="/signup">Sign Up</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
