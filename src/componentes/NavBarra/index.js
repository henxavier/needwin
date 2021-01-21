import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, Image} from 'react-bootstrap';
import logo from '../../img/needwin.svg'
import { FaDiscord, FaFacebookSquare, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Link } from "react-router-dom";


function NavBarra() {
    return (<>
    <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark" className="barra">

    <Nav className="ml-5">
      <Link to="/main">
      {<Image className="w-25 mx-auto" src={logo}></Image>}
      </Link>
    </Nav>

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">

      <Nav className="mr-auto h5">

        <NavDropdown title="WARZONE" id="collasible-nav-dropdown">
          <NavDropdown.Item><Link to="/assalt">Fuzis de Assalto</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to ="/smts">SMTS</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to="/escopetas">Escopetas</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to="/mts">MTS</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to ="/atirador">Fuzis de Atirador</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to="/precisao">Fuzis de Precisão</Link></NavDropdown.Item>
        </NavDropdown>

        <Nav.Link to="/Tierlist">TIERLIST</Nav.Link>

        <Nav.Link href="/">CAMPEONATOS</Nav.Link>
        
      </Nav>

      <Nav>
        <Nav.Link href="https://www.facebook.com/needwinoficial"><FaFacebookSquare /></Nav.Link>
        <Nav.Link href="#memes"><FaDiscord /></Nav.Link>
        <Nav.Link href="https://www.youtube.com/channel/UCyFvFKPM-3qT-a-L2ZVfkOQ"><FaYoutube /></Nav.Link>
        <Nav.Link href="https://www.instagram.com/needwinoficial/"><FaInstagram /></Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
</>);
}

export default NavBarra